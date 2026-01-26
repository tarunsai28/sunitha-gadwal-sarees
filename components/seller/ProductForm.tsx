"use client";

import { useState } from "react";
import { Product } from "@/data/products";
import { X, Save, Upload } from "lucide-react";

interface ProductFormProps {
    initialData?: Partial<Product>;
    onSave: (product: Product) => void;
    onCancel: () => void;
}

export default function ProductForm({ initialData, onSave, onCancel }: ProductFormProps) {
    const [formData, setFormData] = useState<Partial<Product>>(initialData || {
        title: "",
        code: "",
        price: "",
        category: "Pure Handloom pattu",
        color: "",
        description: "",
        images: [],
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Basic validation could go here
        onSave(formData as Product);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-sm border border-brand-cream">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-serif text-xl text-brand-black">{initialData ? 'Edit Saree' : 'Add New Saree'}</h3>
                <button type="button" onClick={onCancel} className="text-brand-charcoal hover:text-brand-maroon">
                    <X size={24} />
                </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal mb-2">Saree Title</label>
                    <input
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded focus:border-brand-maroon focus:outline-none"
                        placeholder="e.g. Royal Crimson Gadwal"
                    />
                </div>
                <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal mb-2">Product Code</label>
                    <input
                        name="code"
                        value={formData.code}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded focus:border-brand-maroon focus:outline-none"
                        placeholder="e.g. SGS-008"
                    />
                </div>
                <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal mb-2">Price (₹)</label>
                    <input
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded focus:border-brand-maroon focus:outline-none"
                        placeholder="e.g. 15000"
                    />
                </div>
                <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal mb-2">Color</label>
                    <input
                        name="color"
                        value={formData.color}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded focus:border-brand-maroon focus:outline-none"
                        placeholder="e.g. Deep Green"
                    />
                </div>
                <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal mb-2">Category</label>
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded focus:border-brand-maroon focus:outline-none"
                    >
                        <option value="Pure Handloom pattu">Pure Handloom pattu</option>
                        <option value="Powerloom pattu">Powerloom pattu</option>
                        <option value="Semi-Gadwal pattu">Semi-Gadwal pattu</option>
                    </select>
                </div>
                <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal mb-2">Image Upload</label>
                    <div
                        className="relative border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-brand-maroon hover:bg-brand-maroon/5 transition-colors cursor-pointer group"
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={(e) => {
                            e.preventDefault();
                            if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                                const file = e.dataTransfer.files[0];
                                const reader = new FileReader();
                                reader.onloadend = () => {
                                    setFormData(prev => ({ ...prev, images: [reader.result as string] }));
                                };
                                reader.readAsDataURL(file);
                            }
                        }}
                        onClick={() => document.getElementById('file-upload')?.click()}
                    >
                        <input
                            id="file-upload"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => {
                                if (e.target.files && e.target.files[0]) {
                                    const file = e.target.files[0];
                                    const reader = new FileReader();
                                    reader.onloadend = () => {
                                        setFormData(prev => ({ ...prev, images: [reader.result as string] }));
                                    };
                                    reader.readAsDataURL(file);
                                }
                            }}
                        />

                        {formData.images && formData.images.length > 0 ? (
                            <div className="relative w-full aspect-video bg-gray-100 rounded overflow-hidden">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={formData.images[0]} alt="Preview" className="w-full h-full object-contain" />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <p className="text-white font-medium flex items-center gap-2">
                                        <Upload size={20} /> Change Image
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-2 py-4">
                                <div className="w-12 h-12 bg-gray-100 text-gray-400 rounded-full flex items-center justify-center mx-auto group-hover:bg-white group-hover:text-brand-maroon transition-colors">
                                    <Upload size={24} />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-brand-black">Click to upload or drag and drop</p>
                                    <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (max 5MB)</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal mb-2">Description</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    className="w-full p-2 border border-gray-300 rounded focus:border-brand-maroon focus:outline-none"
                    placeholder="Describe the weave, border, and material..."
                />
            </div>

            <div className="flex justify-end gap-4 pt-4 border-t border-brand-cream">
                <button type="button" onClick={onCancel} className="px-6 py-2 text-sm font-medium text-brand-charcoal hover:bg-gray-50 rounded">
                    Cancel
                </button>
                <button type="submit" className="flex items-center gap-2 px-6 py-2 bg-brand-maroon text-white text-sm font-bold uppercase tracking-widest rounded hover:bg-brand-maroon/90 shadow-lg">
                    <Save size={16} /> Save Product
                </button>
            </div>
        </form>
    );
}
