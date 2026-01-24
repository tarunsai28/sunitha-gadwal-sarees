
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteContent } from "@/data/siteContent";
import { Scale, FileCheck, Truck, Gavel } from "lucide-react";

export default function TermsConditions() {
    return (
        <main className="min-h-screen bg-brand-ivory">
            <Header />

            {/* Hero Section */}
            <div className="pt-32 pb-16 bg-brand-cream/30 text-center px-4">
                <span className="text-brand-gold uppercase tracking-[0.2em] text-xs font-bold mb-3 block animate-fade-in">Legal Framework</span>
                <h1 className="font-serif text-4xl md:text-5xl text-brand-black mb-6">Terms & Conditions</h1>
                <div className="w-24 h-1 bg-brand-maroon/20 mx-auto rounded-full"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 border border-brand-cream shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-brand-charcoal text-lg mb-10 leading-relaxed text-center italic">
                        "Welcome to {siteContent.brandName}. By accessing our website and placing orders, you agree to the following heritage guidelines."
                    </p>

                    <div className="space-y-12">
                        {/* Section 1 */}
                        <div className="flex gap-6">
                            <div className="shrink-0 w-12 h-12 bg-brand-maroon/5 text-brand-maroon rounded-full flex items-center justify-center">
                                <FileCheck size={24} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h3 className="font-serif text-xl text-brand-black mb-3">Authenticity Guidelines</h3>
                                <p className="text-brand-charcoal leading-relaxed text-sm md:text-base">
                                    All our products are authentic handloom sarees directly from our looms. Slight irregularities in weave or color are characteristic of hand-woven products and are not considered defects—they are the signature of human craftsmanship.
                                </p>
                            </div>
                        </div>

                        {/* Section 2 */}
                        <div className="flex gap-6">
                            <div className="shrink-0 w-12 h-12 bg-brand-maroon/5 text-brand-maroon rounded-full flex items-center justify-center">
                                <Scale size={24} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h3 className="font-serif text-xl text-brand-black mb-3">Ordering Process</h3>
                                <p className="text-brand-charcoal leading-relaxed text-sm md:text-base">
                                    Orders are confirmed personally via WhatsApp. Payment details and final pricing (including shipping) will be communicated directly to you to ensure transparency.
                                </p>
                            </div>
                        </div>

                        {/* Section 3 */}
                        <div className="flex gap-6">
                            <div className="shrink-0 w-12 h-12 bg-brand-maroon/5 text-brand-maroon rounded-full flex items-center justify-center">
                                <Truck size={24} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h3 className="font-serif text-xl text-brand-black mb-3">Pricing Policy</h3>
                                <p className="text-brand-charcoal leading-relaxed text-sm md:text-base">
                                    Prices are subject to change based on raw material costs, but confirmed order prices will solely honor the agreement made at the time of booking.
                                </p>
                            </div>
                        </div>

                        {/* Section 4 */}
                        <div className="flex gap-6">
                            <div className="shrink-0 w-12 h-12 bg-brand-maroon/5 text-brand-maroon rounded-full flex items-center justify-center">
                                <Gavel size={24} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h3 className="font-serif text-xl text-brand-black mb-3">Governing Law</h3>
                                <p className="text-brand-charcoal leading-relaxed text-sm md:text-base">
                                    These terms are governed by the laws of India, and any disputes are subject to the jurisdiction of courts in Gadwal, Telangana.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 pt-12 border-t border-brand-cream text-center">
                        <p className="text-sm text-gray-500 mb-6">Need clarification on any term?</p>
                        <WhatsAppButton variant="text" label="Contact Legal Support" />
                    </div>

                </div>
            </div>
            <Footer />
            <WhatsAppButton variant="floating" />
        </main>
    );
}
