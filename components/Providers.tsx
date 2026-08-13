"use client";

import { ProductProvider } from "@/context/ProductContext";
import { Product } from "@/data/products";

export default function Providers({
    children,
    initialProducts,
}: {
    children: React.ReactNode;
    initialProducts: Product[];
}) {
    return (
        <ProductProvider initialProducts={initialProducts}>
            {children}
        </ProductProvider>
    );
}
