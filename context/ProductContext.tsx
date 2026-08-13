"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "@/data/products";

interface ProductContextType {
    products: Product[];
    addProduct: (product: Product) => Promise<void>;
    updateProduct: (product: Product) => Promise<void>;
    deleteProduct: (id: string) => Promise<void>;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

async function mutate(body: object): Promise<Product[]> {
    const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    });
    if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || "Request failed");
    }
    return res.json();
}

export function ProductProvider({
    children,
    initialProducts,
}: {
    children: ReactNode;
    initialProducts: Product[];
}) {
    const [products, setProducts] = useState<Product[]>(initialProducts);

    const addProduct = async (product: Product) => {
        setProducts(await mutate({ action: "add", product }));
    };

    const updateProduct = async (product: Product) => {
        setProducts(await mutate({ action: "update", product }));
    };

    const deleteProduct = async (id: string) => {
        setProducts(await mutate({ action: "delete", id }));
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
