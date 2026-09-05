import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getStoredBlogPosts } from "@/lib/blob-store";
import { siteContent } from "@/data/siteContent";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays } from "lucide-react";
import Logo from "@/components/Logo";

export const revalidate = 60;

export const metadata: Metadata = {
    title: `Journal | ${siteContent.brandName}`,
    description: "Stories from the loom — heritage, craftsmanship, and the world of authentic Gadwal handloom sarees.",
};

function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
}

export default async function BlogPage() {
    const posts = (await getStoredBlogPosts()).slice().sort(
        (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

    return (
        <main className="min-h-screen bg-brand-ivory">
            <Header />

            {/* Page Header */}
            <div className="pt-32 pb-16 bg-brand-maroon text-center px-4">
                <span className="text-brand-gold-bright uppercase tracking-[0.2em] text-xs font-bold mb-3 block">Our Journal</span>
                <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">Stories from the Loom</h1>
                <p className="text-brand-cream/90 max-w-2xl mx-auto font-light text-lg">
                    Heritage, craftsmanship, and the world of authentic Gadwal handloom sarees.
                </p>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                {posts.length === 0 ? (
                    <div className="text-center py-20 text-brand-charcoal">
                        <p>No articles published yet — check back soon.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 max-w-6xl mx-auto">
                        {posts.map((post) => (
                            <Link
                                key={post.id}
                                href={`/blog/${post.slug}`}
                                className="group flex flex-col bg-white border border-brand-cream hover:border-brand-gold/30 transition-all duration-300 hover:shadow-lg rounded-lg overflow-hidden"
                            >
                                <div className="relative aspect-[3/2] overflow-hidden bg-brand-cream/20">
                                    {post.coverImage ? (
                                        <Image
                                            src={post.coverImage}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center opacity-50">
                                            <Logo variant="mark" markClassName="h-20" />
                                        </div>
                                    )}
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center gap-2 text-xs text-brand-gold uppercase tracking-widest font-medium mb-3">
                                        <CalendarDays size={14} />
                                        {formatDate(post.publishedAt)}
                                    </div>
                                    <h2 className="font-serif text-xl text-brand-black mb-2 group-hover:text-brand-maroon transition-colors leading-snug">
                                        {post.title}
                                    </h2>
                                    <p className="text-brand-charcoal text-sm leading-relaxed line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    <span className="mt-4 text-brand-maroon text-xs uppercase tracking-widest font-bold group-hover:underline">
                                        Read More →
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            <Footer />
            <WhatsAppButton variant="floating" />
        </main>
    );
}
