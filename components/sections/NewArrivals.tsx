
"use client";

import Link from "next/link";
import { useProducts } from "@/context/ProductContext";
import ProductCard from "@/components/ProductCard";

export default function NewArrivals() {
    const { products } = useProducts();
    // Get newest 8 products
    const newProducts = products.filter(p => p.isNew).slice(0, 8);

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="text-center md:text-left w-full md:w-auto">
                        <span className="text-brand-gold uppercase tracking-[0.2em] text-xs font-bold mb-2 block">Fresh from Looms</span>
                        <h2 className="font-serif text-3xl md:text-4xl text-brand-black">New Arrivals</h2>
                    </div>
                    <Link
                        href="/collections"
                        className="hidden md:inline-block text-brand-maroon border-b border-brand-maroon pb-1 text-sm uppercase tracking-widest hover:text-brand-black hover:border-brand-black transition-all"
                    >
                        View All Collections
                    </Link>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-6 sm:gap-x-8 sm:gap-y-12">
                    {newProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link
                        href="/collections"
                        className="inline-block px-8 py-3 bg-brand-maroon text-white uppercase text-sm tracking-widest"
                    >
                        View All Collections
                    </Link>
                </div>
            </div>
        </section>
    );
}
