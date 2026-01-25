
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteContent } from "@/data/siteContent";
import Image from "next/image";
import { Gem, Award, Scale } from "lucide-react";

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

                {/* Mission / Vision - Side by Side Layout */}
                <div className="relative mb-32">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Image Section */}
                        <div className="relative h-[600px] rounded-lg overflow-hidden shadow-xl">
                            <Image
                                src="/heritage-loom.png"
                                alt="Traditional handloom weaving process"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-brand-black/10"></div>
                        </div>

                        {/* Content Card */}
                        <div className="relative z-10">
                            <div className="bg-white p-8 md:p-12 rounded-sm shadow-xl border-t-4 border-brand-maroon">
                                <span className="text-brand-gold uppercase tracking-[0.2em] text-xs font-bold mb-4 block">Our Philosophy</span>
                                <h2 className="font-serif text-3xl md:text-4xl text-brand-black mb-8 leading-tight">From Our Looms to Your Wardrobe</h2>

                                <div className="prose prose-lg text-brand-charcoal font-light">
                                    <p className="mb-6 leading-relaxed">
                                        Gadwal, a historic town in Telangana, is renowned for its Pure Gadwal Handloom sarees. Distinguished by their rich, contrasting silk borders and pallus interlocked with a lightweight body, this heritage craft requires immense skill and precision.
                                    </p>
                                    <p className="mb-6 leading-relaxed">
                                        Led by <strong className="text-brand-maroon font-serif">{siteContent.owner}</strong>, we are a family of weavers dedicated to preserving this ancient craft. Unlike mass-produced textiles, every saree at Sunitha Gadwal Saree House is a labor of love, taking days to complete.
                                    </p>
                                    <p className="leading-relaxed border-l-2 border-brand-gold pl-4 italic text-brand-maroon/80">
                                        "Our mission is humble yet powerful: To bring authentic, high-quality Gadwal handlooms directly from our looms to your wardrobe."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Values - Premium with Icons */}
                <div className="bg-brand-ivory py-12">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-brand-gold uppercase tracking-[0.2em] text-xs font-bold mb-3 block">Why Choose Us</span>
                        <h2 className="font-serif text-3xl md:text-4xl text-brand-black mb-6">Our Core Values</h2>
                        <div className="w-24 h-1 bg-brand-maroon/20 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Authenticity */}
                        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 group text-center border border-brand-cream">
                            <div className="w-16 h-16 mx-auto bg-brand-cream/30 rounded-full flex items-center justify-center mb-6 text-brand-maroon group-hover:bg-brand-maroon group-hover:text-white transition-colors">
                                <Gem size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-serif text-xl text-brand-black mb-3">Authenticity</h3>
                            <p className="text-sm text-brand-charcoal leading-relaxed">
                                100% Genuine Handloom. We stand by the purity of our weave, ensuring every thread tells a truth.
                            </p>
                        </div>

                        {/* Craftsmanship */}
                        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 group text-center border border-brand-cream">
                            <div className="w-16 h-16 mx-auto bg-brand-cream/30 rounded-full flex items-center justify-center mb-6 text-brand-maroon group-hover:bg-brand-maroon group-hover:text-white transition-colors">
                                <Award size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-serif text-xl text-brand-black mb-3">Craftsmanship</h3>
                            <p className="text-sm text-brand-charcoal leading-relaxed">
                                Honoring the intricate 'Kuppadam' & 'Tippadam' techniques that define the legendary Gadwal sarees.
                            </p>
                        </div>

                        {/* Transparency */}
                        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 group text-center border border-brand-cream">
                            <div className="w-16 h-16 mx-auto bg-brand-cream/30 rounded-full flex items-center justify-center mb-6 text-brand-maroon group-hover:bg-brand-maroon group-hover:text-white transition-colors">
                                <Scale size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-serif text-xl text-brand-black mb-3">Transparency</h3>
                            <p className="text-sm text-brand-charcoal leading-relaxed">
                                Direct-to-consumer pricing with no hidden costs. Fair trade for you, fair wages for our weavers.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
            <WhatsAppButton variant="floating" />
        </main>
    );
}
