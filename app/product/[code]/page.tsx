
import { products } from "@/data/products";
import { siteContent } from "@/data/siteContent";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductGallery from "@/components/ProductGallery";
import ProductCard from "@/components/ProductCard";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Phone, Mail } from "lucide-react";
import Link from "next/link";

// Generate separate static params for export
export async function generateStaticParams() {
    return products.map((product) => ({
        code: product.code,
    }));
}

// Metadata generation
export async function generateMetadata({ params }: { params: { code: string } }): Promise<Metadata> {
    const product = products.find((p) => p.code === params.code);
    if (!product) return { title: "Product Not Found" };

    return {
        title: `${product.title} | ${siteContent.brandName}`,
        description: product.description,
        openGraph: {
            title: product.title,
            description: product.description,
            images: product.images,
        },
    };
}

export default function ProductPage({ params }: { params: { code: string } }) {
    const product = products.find((p) => p.code === params.code);

    if (!product) {
        notFound();
    }

    // Related products (Same category, excluding current)
    const relatedProducts = products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    return (
        <main className="min-h-screen bg-brand-ivory">
            <Header />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">

                {/* Breadcrumb */}
                <div className="text-sm text-brand-charcoal mb-8">
                    <Link href="/" className="hover:text-brand-maroon">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/collections" className="hover:text-brand-maroon">Collections</Link>
                    <span className="mx-2">/</span>
                    <span className="text-brand-maroon font-medium">{product.title}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                    {/* Gallery */}
                    <div>
                        <ProductGallery images={product.images} title={product.title} />
                    </div>

                    {/* Info */}
                    <div>
                        <div className="mb-2">
                            <span className="inline-block px-3 py-1 bg-brand-cream text-brand-maroon text-xs font-bold uppercase tracking-widest rounded-full mb-4">
                                {product.category}
                            </span>
                            {product.isNew && (
                                <span className="inline-block px-3 py-1 bg-brand-maroon text-white text-xs font-bold uppercase tracking-widest rounded-full mb-4 ml-2">
                                    New Arrival
                                </span>
                            )}
                        </div>

                        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-brand-black mb-4 leading-tight">
                            {product.title}
                        </h1>

                        <div className="flex items-center gap-4 mb-8 border-b border-brand-cream pb-8">
                            <span className="text-xl text-brand-maroon font-serif">Price: On Request</span>
                            <WhatsAppButton variant="text" label="Ask Price" />
                        </div>

                        <div className="prose prose-stone mb-8">
                            <p className="text-brand-charcoal leading-relaxed">{product.description}</p>
                        </div>

                        {/* Product Details Table */}
                        <div className="bg-white border border-brand-cream p-6 rounded-sm mb-8">
                            <h3 className="font-serif text-lg font-bold mb-4">Product Details</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between border-b border-dashed border-gray-200 pb-2">
                                    <span className="text-gray-500">Product Code</span>
                                    <span className="font-medium text-brand-black">{product.code}</span>
                                </div>
                                <div className="flex justify-between border-b border-dashed border-gray-200 pb-2">
                                    <span className="text-gray-500">Material</span>
                                    <span className="font-medium text-brand-black">{product.material}</span>
                                </div>
                                <div className="flex justify-between border-b border-dashed border-gray-200 pb-2">
                                    <span className="text-gray-500">Color</span>
                                    <span className="font-medium text-brand-black">{product.color}</span>
                                </div>
                                <div className="flex justify-between border-b border-dashed border-gray-200 pb-2">
                                    <span className="text-gray-500">Border Type</span>
                                    <span className="font-medium text-brand-black">{product.borderType}</span>
                                </div>
                                <div className="flex justify-between border-b border-dashed border-gray-200 pb-2">
                                    <span className="text-gray-500">Weave</span>
                                    <span className="font-medium text-brand-black">{product.weave}</span>
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="space-y-4">
                            <WhatsAppButton
                                variant="primary"
                                label="Get Price on WhatsApp"
                                productCode={product.code}
                                className="w-full py-4 text-base"
                            />

                            <div className="grid grid-cols-2 gap-4">
                                <a
                                    href={`tel:${siteContent.contact.phones[0]}`}
                                    className="flex items-center justify-center gap-2 px-6 py-3 border border-brand-black text-brand-black uppercase text-sm tracking-widest hover:bg-brand-black hover:text-white transition-all"
                                >
                                    <Phone size={18} /> Call Us
                                </a>
                                <a
                                    href={`mailto:${siteContent.contact.email}`}
                                    className="flex items-center justify-center gap-2 px-6 py-3 border border-brand-black text-brand-black uppercase text-sm tracking-widest hover:bg-brand-black hover:text-white transition-all"
                                >
                                    <Mail size={18} /> Email Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <div className="mt-24 border-t border-brand-cream pt-16">
                        <h2 className="font-serif text-2xl md:text-3xl text-brand-black mb-12 text-center">You May Also Like</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                            {relatedProducts.map(p => (
                                <ProductCard key={p.id} product={p} />
                            ))}
                        </div>
                    </div>
                )}

            </div>

            <Footer />
            <WhatsAppButton variant="floating" />
        </main>
    );
}
