import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getStoredBlogPosts } from "@/lib/blob-store";
import { siteContent } from "@/data/siteContent";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ArrowLeft } from "lucide-react";

export const revalidate = 60;

function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const posts = await getStoredBlogPosts();
    const post = posts.find((p) => p.slug === slug);
    if (!post) return { title: "Article Not Found" };

    return {
        title: `${post.title} | ${siteContent.brandName}`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: post.coverImage ? [post.coverImage] : undefined,
        },
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const posts = await getStoredBlogPosts();
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    const paragraphs = post.content.split(/\n+/).filter(Boolean);

    return (
        <main className="min-h-screen bg-brand-ivory">
            <Header />

            <article className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 max-w-3xl">
                <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-brand-maroon hover:underline mb-8">
                    <ArrowLeft size={16} /> Back to Journal
                </Link>

                <div className="flex items-center gap-2 text-xs text-brand-gold uppercase tracking-widest font-medium mb-4">
                    <CalendarDays size={14} />
                    {formatDate(post.publishedAt)}
                </div>

                <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-brand-black mb-8 leading-tight">
                    {post.title}
                </h1>

                {post.coverImage && (
                    <div className="relative aspect-[16/9] rounded-lg overflow-hidden shadow-xl mb-10">
                        <Image src={post.coverImage} alt={post.title} fill className="object-cover" priority />
                    </div>
                )}

                <div className="text-brand-charcoal">
                    {paragraphs.map((para, i) => (
                        <p key={i} className="mb-6 leading-relaxed text-base md:text-lg font-light">
                            {para}
                        </p>
                    ))}
                </div>

                <div className="mt-12 pt-8 border-t border-brand-cream">
                    <WhatsAppButton variant="primary" label="Ask Us About This" />
                </div>
            </article>

            <Footer />
            <WhatsAppButton variant="floating" />
        </main>
    );
}
