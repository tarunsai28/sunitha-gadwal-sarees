
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
            <div className="relative pt-24 pb-10 md:pt-32 md:pb-20 bg-brand-maroon-deep text-white text-center px-4 overflow-hidden">
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-maroon via-brand-maroon-deep to-brand-maroon-deep"></div>
                <div className="relative z-10 max-w-4xl mx-auto">
                    <span className="text-brand-gold-bright uppercase tracking-[0.2em] text-xs font-bold mb-3 md:mb-4 block animate-fade-in">Our Story</span>
                    <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6">Weaving Heritage Since Generations</h1>
                    <p className="text-brand-cream/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                        Every saree we sell has passed through the same hands that wove it — no factory, no middleman, just {siteContent.owner} and our family of master weavers.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20">

                {/* Mission / Vision - Side by Side Layout */}
                <div className="relative mb-12 md:mb-32">
                    <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
                        {/* Image Section */}
                        <div className="relative h-[260px] sm:h-[380px] md:h-[600px] rounded-lg overflow-hidden shadow-xl">
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
                            <div className="bg-white p-5 sm:p-8 md:p-12 rounded-lg shadow-xl border-t-4 border-brand-maroon">
                                <span className="text-brand-gold uppercase tracking-[0.2em] text-xs font-bold mb-3 md:mb-4 block">Our Philosophy</span>
                                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-brand-black mb-4 md:mb-8 leading-tight">From Our Looms to Your Wardrobe</h2>

                                <div className="text-brand-charcoal font-light">
                                    <p className="mb-4 md:mb-6 leading-relaxed text-sm sm:text-base">
                                        Gadwal, a historic town in Telangana, is renowned for its Pure Gadwal Handloom sarees. Distinguished by their rich, contrasting silk borders and pallus interlocked with a lightweight body, this heritage craft requires immense skill and precision.
                                    </p>
                                    <p className="mb-4 md:mb-6 leading-relaxed text-sm sm:text-base">
                                        Led by <strong className="text-brand-maroon font-serif">{siteContent.owner}</strong>, we are a family of weavers dedicated to preserving this ancient craft. Unlike mass-produced textiles, every saree at Sunitha Gadwal Saree House is a labor of love, taking days to complete.
                                    </p>
                                    <p className="leading-relaxed border-l-2 border-brand-gold pl-4 italic text-brand-maroon/80 text-sm sm:text-base">
                                        "Our mission is humble yet powerful: To bring authentic, high-quality Gadwal handlooms directly from our looms to your wardrobe."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Values - Premium with Icons */}
                <div className="bg-brand-ivory py-6 md:py-12">
                    <div className="text-center max-w-2xl mx-auto mb-8 md:mb-16">
                        <span className="text-brand-gold uppercase tracking-[0.2em] text-xs font-bold mb-3 block">Why Choose Us</span>
                        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-brand-black mb-4 md:mb-6">Our Core Values</h2>
                        <div className="interlock-divider w-24 mx-auto text-brand-gold/60"></div>
                    </div>

                    <div className="flex flex-col gap-3 md:grid md:grid-cols-3 md:gap-8">
                        {/* Authenticity */}
                        <div className="flex flex-row items-center gap-4 text-left bg-white p-4 md:flex-col md:items-center md:text-center md:p-8 border-l-[3px] border-y border-r border-brand-gold/30 border-y-brand-cream border-r-brand-cream md:border md:border-brand-cream shadow-sm hover:shadow-md transition-all duration-300 group rounded-lg">
                            <div className="w-11 h-11 md:w-16 md:h-16 shrink-0 bg-brand-cream/30 rounded-full ring-4 ring-brand-gold/15 flex items-center justify-center md:mx-auto md:mb-6 text-brand-maroon group-hover:bg-brand-maroon group-hover:text-white transition-colors">
                                <Gem size={22} className="md:hidden" strokeWidth={1.5} />
                                <Gem size={32} className="hidden md:block" strokeWidth={1.5} />
                            </div>
                            <div>
                                <h3 className="font-serif text-base md:text-xl text-brand-black mb-1 md:mb-3">Authenticity</h3>
                                <p className="text-sm text-brand-charcoal leading-relaxed">
                                    100% Genuine Handloom. We stand by the purity of our weave, ensuring every thread tells a truth.
                                </p>
                            </div>
                        </div>

                        {/* Craftsmanship */}
                        <div className="flex flex-row items-center gap-4 text-left bg-white p-4 md:flex-col md:items-center md:text-center md:p-8 border-l-[3px] border-y border-r border-brand-gold/30 border-y-brand-cream border-r-brand-cream md:border md:border-brand-cream shadow-sm hover:shadow-md transition-all duration-300 group rounded-lg">
                            <div className="w-11 h-11 md:w-16 md:h-16 shrink-0 bg-brand-cream/30 rounded-full ring-4 ring-brand-gold/15 flex items-center justify-center md:mx-auto md:mb-6 text-brand-maroon group-hover:bg-brand-maroon group-hover:text-white transition-colors">
                                <Award size={22} className="md:hidden" strokeWidth={1.5} />
                                <Award size={32} className="hidden md:block" strokeWidth={1.5} />
                            </div>
                            <div>
                                <h3 className="font-serif text-base md:text-xl text-brand-black mb-1 md:mb-3">Craftsmanship</h3>
                                <p className="text-sm text-brand-charcoal leading-relaxed">
                                    Honoring the intricate 'Kuppadam' & 'Tippadam' techniques that define the legendary Gadwal sarees.
                                </p>
                            </div>
                        </div>

                        {/* Transparency */}
                        <div className="flex flex-row items-center gap-4 text-left bg-white p-4 md:flex-col md:items-center md:text-center md:p-8 border-l-[3px] border-y border-r border-brand-gold/30 border-y-brand-cream border-r-brand-cream md:border md:border-brand-cream shadow-sm hover:shadow-md transition-all duration-300 group rounded-lg">
                            <div className="w-11 h-11 md:w-16 md:h-16 shrink-0 bg-brand-cream/30 rounded-full ring-4 ring-brand-gold/15 flex items-center justify-center md:mx-auto md:mb-6 text-brand-maroon group-hover:bg-brand-maroon group-hover:text-white transition-colors">
                                <Scale size={22} className="md:hidden" strokeWidth={1.5} />
                                <Scale size={32} className="hidden md:block" strokeWidth={1.5} />
                            </div>
                            <div>
                                <h3 className="font-serif text-base md:text-xl text-brand-black mb-1 md:mb-3">Transparency</h3>
                                <p className="text-sm text-brand-charcoal leading-relaxed">
                                    Direct-to-consumer pricing with no hidden costs. Fair trade for you, fair wages for our weavers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
            <WhatsAppButton variant="floating" />
        </main>
    );
}
