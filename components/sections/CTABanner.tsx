
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { siteContent } from "@/data/siteContent";

export default function CTABanner() {
    return (
        <section className="py-20 bg-brand-maroon text-white text-center">
            <div className="container mx-auto px-4">
                <h2 className="font-serif text-3xl md:text-4xl mb-6">Ready to Drape Elegance?</h2>
                <p className="text-white/80 max-w-xl mx-auto mb-10 text-lg">
                    Our master weavers are creating new masterpieces every day. Connect with us to see the latest collection or place a custom order.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
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
