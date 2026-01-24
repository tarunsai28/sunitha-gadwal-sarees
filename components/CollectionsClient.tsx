
"use client";

import { useState, useMemo } from "react";
import { Product, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Search, Filter, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CollectionsClient() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [sortBy, setSortBy] = useState<"newest" | "az" | "za">("newest");
    const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

    // Fixed categories as per user request
    const categories = ["Pure Handloom pattu", "Powerloom pattu", "Semi-Gadwal pattu"];

    const filteredProducts = useMemo(() => {
        return products
            .filter(product => {
                const matchesSearch =
                    product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    product.code.toLowerCase().includes(searchQuery.toLowerCase());
                const matchesCategory = selectedCategory ? product.category === selectedCategory : true;

                return matchesSearch && matchesCategory;
            })
            .sort((a, b) => {
                if (sortBy === "newest") return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0); // Simplified logic: New first
                if (sortBy === "az") return a.title.localeCompare(b.title);
                if (sortBy === "za") return b.title.localeCompare(a.title);
                return 0;
            });
    }, [searchQuery, selectedCategory, sortBy]);

    const clearFilters = () => {
        setSelectedCategory(null);
        setSearchQuery("");
    };

    return (
        <div className="flex flex-col lg:flex-row gap-8 relative">
            {/* Sidebar Filters - Desktop */}
            <aside className="hidden lg:block w-64 flex-shrink-0 space-y-8">
                <div>
                    <h3 className="font-serif text-lg font-bold mb-4">Categories</h3>
                    <div className="space-y-2">
                        <button
                            onClick={() => setSelectedCategory(null)}
                            className={cn("block text-sm text-left hover:text-brand-maroon transition-colors", !selectedCategory ? "font-bold text-brand-maroon" : "text-brand-charcoal")}
                        >
                            All Categories
                        </button>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat === selectedCategory ? null : cat)}
                                className={cn("block text-sm text-left hover:text-brand-maroon transition-colors", selectedCategory === cat ? "font-bold text-brand-maroon" : "text-brand-charcoal")}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">

                {/* Toolbar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 bg-brand-cream/20 p-4 rounded-sm">
                    {/* Search */}
                    <div className="relative w-full md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                        <input
                            type="text"
                            placeholder="Search code or name..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-9 pr-4 py-2 text-sm border border-brand-cream focus:border-brand-maroon outline-none bg-white"
                        />
                    </div>

                    <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
                        {/* Mobile Filter Toggle */}
                        <button
                            className="lg:hidden flex items-center gap-2 text-sm font-medium text-brand-black"
                            onClick={() => setIsMobileFiltersOpen(true)}
                        >
                            <Filter size={18} /> Filters
                        </button>

                        {/* Sort */}
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value as any)}
                            className="text-sm border-none bg-transparent font-medium focus:ring-0 cursor-pointer"
                        >
                            <option value="newest">Sort by: Newest</option>
                            <option value="az">Sort by: A-Z</option>
                            <option value="za">Sort by: Z-A</option>
                        </select>
                    </div>
                </div>

                {/* Active Filters Summary */}
                {(selectedCategory || searchQuery) && (
                    <div className="flex flex-wrap items-center gap-2 mb-6">
                        <span className="text-xs text-gray-500 uppercase tracking-widest mr-2">Active Filters:</span>
                        {selectedCategory && (
                            <span className="px-3 py-1 bg-brand-maroon text-white text-xs rounded-full flex items-center gap-1">
                                {selectedCategory} <button onClick={() => setSelectedCategory(null)}><X size={12} /></button>
                            </span>
                        )}
                        {searchQuery && (
                            <span className="px-3 py-1 bg-brand-maroon text-white text-xs rounded-full flex items-center gap-1">
                                Search: "{searchQuery}" <button onClick={() => setSearchQuery("")}><X size={12} /></button>
                            </span>
                        )}
                        <button onClick={clearFilters} className="text-xs text-brand-maroon underline ml-2">Clear All</button>
                    </div>
                )}

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-20 text-gray-400">
                        <p>No products found matching your criteria.</p>
                        <button onClick={clearFilters} className="text-brand-maroon underline mt-2">Reset Filters</button>
                    </div>
                )}
            </div>

            {/* Mobile Filters Drawer */}
            {isMobileFiltersOpen && (
                <div className="fixed inset-0 z-50 bg-black/50 lg:hidden">
                    <div className="absolute right-0 top-0 bottom-0 w-80 bg-white p-6 overflow-y-auto">
                        <div className="flex justify-between items-center mb-8">
                            <h3 className="font-serif text-xl font-bold">Filters</h3>
                            <button onClick={() => setIsMobileFiltersOpen(false)}><X /></button>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h4 className="font-bold mb-3">Categories</h4>
                                <div className="space-y-2">
                                    <button
                                        onClick={() => { setSelectedCategory(null); setIsMobileFiltersOpen(false); }}
                                        className={cn("block w-full text-left p-2 rounded", !selectedCategory ? "bg-brand-cream" : "")}
                                    >
                                        All Categories
                                    </button>
                                    {categories.map(cat => (
                                        <button
                                            key={cat}
                                            onClick={() => { setSelectedCategory(cat === selectedCategory ? null : cat); setIsMobileFiltersOpen(false); }}
                                            className={cn("block w-full text-left p-2 rounded", selectedCategory === cat ? "bg-brand-cream" : "")}
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
