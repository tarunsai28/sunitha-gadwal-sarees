"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { products as initialProducts, Product } from "@/data/products";

interface ProductContextType {
    products: Product[];
    addProduct: (product: Product) => void;
    updateProduct: (product: Product) => void;
    deleteProduct: (id: string) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({ children }: { children: ReactNode }) {
    const [products, setProducts] = useState<Product[]>([]);

    // Load initial data on mount
    useEffect(() => {
        const saved = localStorage.getItem('products');
        if (saved) {
            try {
                setProducts(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to parse products from local storage", e);
                setProducts(initialProducts);
            }
        } else {
            setProducts(initialProducts);
        }
    }, []);

    // Save to local storage whenever products change
    useEffect(() => {
        if (products.length > 0) {
            localStorage.setItem('products', JSON.stringify(products));
        }
    }, [products]);

    const addProduct = (product: Product) => {
        // ID generation is now handled in Dashboard or passed in, but safeguards here are good
        const newProduct = { ...product, id: product.id || Date.now().toString() };
        setProducts(prev => [newProduct, ...prev]);
    };

    const updateProduct = (updatedProduct: Product) => {
        setProducts(prev => prev.map(p => p.id === updatedProduct.id ? updatedProduct : p));
    };

    const deleteProduct = (id: string) => {
        setProducts(prev => prev.filter(p => p.id !== id));
    };

    return (
        <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct }}>
            {children}
        </ProductContext.Provider>
    );
}

export function useProducts() {
    const context = useContext(ProductContext);
    if (context === undefined) {
        throw new Error("useProducts must be used within a ProductProvider");
    }
    return context;
}
