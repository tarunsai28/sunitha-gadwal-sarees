"use client";

import { useState } from "react";
import { Product } from "@/data/products";
import { useProducts } from "@/context/ProductContext";
import ProductForm from "./ProductForm";
import { Plus, Edit2, Trash2, LogOut } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function SellerDashboard() {
    // Use global state from context
    const { products, addProduct, updateProduct, deleteProduct } = useProducts();
    const [isEditing, setIsEditing] = useState(false);
    const [currentProduct, setCurrentProduct] = useState<Partial<Product> | undefined>(undefined);

    const handleAddNew = () => {
        setCurrentProduct(undefined);
        setIsEditing(true);
    };

    const handleEdit = (product: Product) => {
        setCurrentProduct(product);
        setIsEditing(true);
    };

    const handleDelete = (id: string) => {
        if (confirm("Are you sure you want to delete this product?")) {
            deleteProduct(id);
        }
    };

    const handleSave = (product: Product) => {
        if (currentProduct && currentProduct.id) {
            // Edit existing
            updateProduct(product);
        } else {
            // Add new
            const newProduct = { ...product, id: Date.now().toString(), isNew: true };
            addProduct(newProduct);
        }
        setIsEditing(false);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Top Bar */}
            <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-20">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-brand-maroon rounded-full flex items-center justify-center text-white font-serif font-bold">S</div>
                        <h1 className="font-serif text-xl text-brand-black">Seller Dashboard</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="/" className="text-sm text-gray-500 hover:text-brand-black">View Website</Link>
                        <button className="flex items-center gap-2 text-sm text-red-600 hover:text-red-700 font-medium">
                            <LogOut size={16} /> Logout
                        </button>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                {isEditing ? (
                    <div className="max-w-4xl mx-auto">
                        <ProductForm
                            initialData={currentProduct}
                            onSave={handleSave}
                            onCancel={() => setIsEditing(false)}
                        />
                    </div>
                ) : (
                    <>
                        <div className="flex justify-between items-center mb-8">
                            <div>
                                <h2 className="text-2xl font-serif text-brand-black">My Products</h2>
                                <p className="text-gray-500 text-sm mt-1">Manage your saree collection</p>
                            </div>
                            <button
                                onClick={handleAddNew}
                                className="flex items-center gap-2 px-5 py-2.5 bg-brand-black text-white rounded-lg hover:bg-gray-800 transition-colors shadow-md"
                            >
                                <Plus size={18} /> Add New Saree
                            </button>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead className="bg-gray-50 border-b border-gray-200">
                                        <tr>
                                            <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Image</th>
                                            <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Details</th>
                                            <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Price</th>
                                            <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Category</th>
                                            <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500 text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {products.map(product => (
                                            <tr key={product.id} className="hover:bg-gray-50 group transition-colors">
                                                <td className="px-6 py-4">
                                                    <div className="w-12 h-16 bg-gray-100 rounded overflow-hidden relative border border-gray-200">
                                                        {product.images?.[0] && (
                                                            <Image
                                                                src={product.images[0]}
                                                                alt={product.title}
                                                                fill
                                                                className="object-cover"
                                                            />
                                                        )}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <h3 className="font-bold text-gray-900">{product.title}</h3>
                                                    <span className="text-xs text-gray-500 font-mono">{product.code}</span>
                                                </td>
                                                <td className="px-6 py-4 text-gray-700 font-medium">
                                                    {product.price ? `₹${product.price}` : '-'}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-brand-cream text-brand-charcoal border border-brand-gold/20">
                                                        {product.category}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <div className="flex items-center justify-end gap-3">
                                                        <button
                                                            onClick={() => handleEdit(product)}
                                                            className="p-2 text-gray-500 hover:text-brand-maroon hover:bg-brand-maroon/5 rounded-full transition-colors"
                                                            title="Edit"
                                                        >
                                                            <Edit2 size={18} />
                                                        </button>
                                                        <button
                                                            onClick={() => handleDelete(product.id)}
                                                            className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
                                                            title="Delete"
                                                        >
                                                            <Trash2 size={18} />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </>
                )}
            </main>
        </div>
    );
}
