
import { Globe, ShieldCheck, Star } from "lucide-react";

export default function TrustIndicators() {
    return (
        <section className="py-12 border-t border-brand-cream bg-brand-ivory">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-left md:text-left">
                    <div className="flex items-center gap-4">
                        <Globe className="text-brand-maroon" size={32} strokeWidth={1.5} />
                        <div>
                            <h4 className="font-serif text-lg font-bold">Worldwide Shipping</h4>
                            <p className="text-xs text-brand-charcoal">We deliver heritage globally</p>
                        </div>
                    </div>
                    <div className="hidden md:block w-px h-12 bg-brand-cream"></div>
                    <div className="flex items-center gap-4">
                        <ShieldCheck className="text-brand-maroon" size={32} strokeWidth={1.5} />
                        <div>
                            <h4 className="font-serif text-lg font-bold">Quality Guarantee</h4>
                            <p className="text-xs text-brand-charcoal">Verified authentic handloom</p>
                        </div>
                    </div>
                    <div className="hidden md:block w-px h-12 bg-brand-cream"></div>
                    <div className="flex items-center gap-4">
                        <Star className="text-brand-maroon" size={32} strokeWidth={1.5} />
                        <div>
                            <h4 className="font-serif text-lg font-bold">50+ Years Legacy</h4>
                            <p className="text-xs text-brand-charcoal">Trusted by generations</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
