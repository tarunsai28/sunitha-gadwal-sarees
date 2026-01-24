
import Link from "next/link";
import WhatsAppButton from "./WhatsAppButton";

export default function HeroSection() {
    return (
        <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-brand-ivory">
            {/* Background with overlay - In a real app, use a high quality image here */}
            <div className="absolute inset-0 bg-brand-maroon/5 z-0">
                {/* Placeholder for background image */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            </div>

            <div className="container relative z-10 px-4 text-center">
                <span className="inline-block py-1 px-3 border border-brand-gold/30 rounded-full text-brand-maroon text-xs tracking-[0.2em] font-medium uppercase mb-6 animate-fade-in-up">
                    Authentic Handloom
                </span>
                <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-brand-black mb-6 leading-tight max-w-4xl mx-auto">
                    The Timeless Elegance of <span className="text-brand-maroon italic">Gadwal</span>
                </h1>
                <p className="text-brand-charcoal text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                    Straight from our family looms to your home. Experience the heritage of authentic handloom sarees, crafted with passion and tradition.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <WhatsAppButton variant="primary" label="Get Price on WhatsApp" className="min-w-[200px]" />
                    <Link
                        href="/collections"
                        className="inline-flex items-center justify-center min-w-[200px] px-6 py-3 border border-brand-black text-brand-black uppercase text-sm tracking-widest hover:bg-brand-black hover:text-white transition-all duration-300"
                    >
                        Explore Collection
                    </Link>
                </div>
            </div>
        </section>
    );
}
