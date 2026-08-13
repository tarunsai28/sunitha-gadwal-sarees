import Link from "next/link";
import Image from "next/image";
import WhatsAppButton from "./WhatsAppButton";
import { siteContent } from "@/data/siteContent";
import { Award } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex flex-col lg:flex-row bg-brand-ivory overflow-hidden">
            {/* Text Content - Left Side */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 lg:p-16 xl:p-24 relative order-2 lg:order-1">
                {/* Background Pattern */}
                <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                </div>

                <div className="max-w-xl mx-auto text-center lg:text-left relative z-10 animate-fade-in-up">
                    <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                        <span className="h-px w-8 bg-brand-gold"></span>
                        <span className="text-brand-maroon text-xs lg:text-sm tracking-[0.2em] font-medium uppercase font-sans">
                            Authentic Handloom
                        </span>
                        <span className="h-px w-8 bg-brand-gold"></span>
                    </div>

                    <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-brand-black mb-6 lg:mb-8 leading-[1.1]">
                        From Our Looms <br />
                        <span className="text-brand-maroon italic font-light inline-block transform hover:translate-x-2 transition-transform duration-500">to Your Wardrobe</span>
                    </h1>

                    <div className="pl-0 lg:pl-6 border-l-0 lg:border-l-4 border-brand-gold/50 mb-10">
                        <p className="text-brand-charcoal text-lg md:text-xl font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
                            {siteContent.brandName} brings you the heritage of authentic Gadwal sarees, woven with passion by {siteContent.owner} and our family of master weavers.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-6">
                        <WhatsAppButton variant="primary" label="Get Price" className="min-w-[150px] lg:min-w-[180px] shadow-xl hover:shadow-2xl transition-shadow" />
                        <Link
                            href="/collections"
                            className="group inline-flex items-center justify-center gap-2 min-w-[150px] lg:min-w-[180px] px-6 py-3 lg:px-8 lg:py-4 border-b-2 border-brand-black text-brand-black uppercase text-xs lg:text-sm tracking-[0.15em] hover:text-brand-maroon hover:border-brand-maroon transition-all duration-300"
                        >
                            <span>Explore</span>
                            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Image - Right Side with Unique Arch Mask */}
            <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen relative order-1 lg:order-2 p-0 lg:p-0">
                <div className="relative h-full w-full rounded-bl-[60px] lg:rounded-tl-[250px] lg:rounded-bl-none overflow-hidden shadow-2xl border-b-8 lg:border-b-0 lg:border-l-8 border-brand-white">
                    <Image
                        src="/weaver-loom.jpg"
                        alt="Weaver on a loom"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-1000"
                        priority
                    />
                    <div className="absolute inset-0 bg-brand-maroon/5 mix-blend-multiply"></div>
                </div>

                {/* Floating Seal 'Unique Thing' */}
                <div className="absolute -bottom-6 left-6 lg:bottom-12 lg:-left-12 z-20 block animate-spin-slow">
                    <div className="relative w-24 h-24 lg:w-32 lg:h-32 bg-brand-gold rounded-full flex items-center justify-center shadow-lg border-4 border-white text-brand-maroon">
                        <svg className="absolute w-full h-full p-2 animate-spin-slow" viewBox="0 0 100 100" style={{ animationDuration: '15s' }}>
                            <path id="curve" d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0" fill="transparent" />
                            <text className="text-[10.5px] font-bold uppercase tracking-widest" fill="currentColor">
                                <textPath xlinkHref="#curve">
                                    Authentic Gadwal • Handloom •
                                </textPath>
                            </text>
                        </svg>
                        <div className="bg-white rounded-full p-2">
                            <Award className="text-brand-maroon w-5 h-5 lg:w-6 lg:h-6" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
