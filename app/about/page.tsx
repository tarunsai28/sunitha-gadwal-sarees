
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteContent } from "@/data/siteContent";
import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-brand-ivory">
            <Header theme="transparent-light" />

            {/* Hero */}
            <div className="relative pt-32 pb-20 bg-brand-black text-white text-center px-4 overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-maroon via-brand-black to-brand-black"></div>
                <div className="relative z-10 max-w-4xl mx-auto">
                    <span className="text-brand-gold uppercase tracking-[0.2em] text-xs font-bold mb-4 block animate-fade-in">Our Story</span>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">Weaving Heritage Since Generations</h1>
                    <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
                        {siteContent.brandName} is not just a brand; it’s a legacy of authentic Gadwal handlooms, woven with passion and precision.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">

                {/* Mission / Vision */}
                <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                    <div className="relative aspect-square md:aspect-[4/5] bg-brand-cream/50 rounded-sm overflow-hidden">
                        {/* Placeholder for About Image */}
                        <div className="absolute inset-0 bg-brand-maroon/10 flex items-center justify-center text-brand-maroon opacity-30">
                            [Heritage Image]
                        </div>
                    </div>
                    <div>
                        <h2 className="font-serif text-3xl text-brand-black mb-6">From Our Looms to Your Wardrobe</h2>
                        <div className="w-16 h-1 bg-brand-maroon mb-8"></div>
                        <div className="prose prose-stone text-brand-charcoal">
                            <p className="mb-4">
                                Gadwal, a historic town in Telangana, is renowned for its Pure Gadwal Handloom sarees. Distinguished by their rich, contrasting silk borders and pallus interlocked with a lightweight body, this heritage craft requires immense skill and precision.
                            </p>
                            <p className="mb-4">
                                Led by <strong>{siteContent.owner}</strong>, we are a family of weavers dedicated to preserving this ancient craft. Unlike mass-produced textiles, every saree at Sunitha Gadwal Saree House is a labor of love, taking days to complete.
                            </p>
                            <p>
                                Our mission is humble yet powerful: To bring authentic, high-quality Gadwal handlooms directly from our looms to your wardrobe, eliminating middlemen and ensuring you receive the purest form of our art.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Values */}
                <div className="bg-brand-cream/30 p-12 rounded-sm text-center">
                    <h2 className="font-serif text-2xl md:text-3xl text-brand-black mb-12">Our Core Values</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="font-serif text-xl text-brand-maroon mb-3">Authenticity</h3>
                            <p className="text-sm text-brand-charcoal">100% Genuine Handloom. We stand by the purity of our weave.</p>
                        </div>
                        <div>
                            <h3 className="font-serif text-xl text-brand-maroon mb-3">Craftsmanship</h3>
                            <p className="text-sm text-brand-charcoal">Honoring the intricate 'Kuppadam' technique that defines Gadwal sarees.</p>
                        </div>
                        <div>
                            <h3 className="font-serif text-xl text-brand-maroon mb-3">transparency</h3>
                            <p className="text-sm text-brand-charcoal">Direct-to-consumer pricing with no hidden costs or inflated margins.</p>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
            <WhatsAppButton variant="floating" />
        </main>
    );
}
