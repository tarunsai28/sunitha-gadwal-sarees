
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { siteContent } from "@/data/siteContent";

export default function CTABanner() {
    return (
        <section className="py-12 md:py-20 bg-brand-maroon text-white text-center">
            <div className="container mx-auto px-4">
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-6">Tell Us the Occasion</h2>
                <p className="text-white/80 max-w-xl mx-auto mb-6 md:mb-10 text-base md:text-lg">
                    Wedding, festival, or everyday elegance — tell us what you&apos;re draping for, and we&apos;ll help you find the saree for it.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
                    <WhatsAppButton
                        variant="ghost"
                        className="bg-white text-brand-maroon hover:bg-brand-gold hover:text-brand-maroon border-none"
                    />

                    <a
                        href={`tel:${siteContent.contact.phones[0]}`}
                        className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white uppercase text-sm tracking-widest hover:bg-white hover:text-brand-maroon transition-all"
                    >
                        <Phone size={18} /> Call Us
                    </a>

                    <a
                        href={`mailto:${siteContent.contact.email}`}
                        className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white uppercase text-sm tracking-widest hover:bg-white hover:text-brand-maroon transition-all"
                    >
                        <Mail size={18} /> Email Us
                    </a>
                </div>
            </div>
        </section>
    );
}
