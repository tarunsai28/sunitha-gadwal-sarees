
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteContent } from "@/data/siteContent";
import { Shield, Lock, Eye, Mail } from "lucide-react";

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-brand-ivory">
            <Header />

            {/* Hero Section */}
            <div className="pt-32 pb-16 bg-brand-cream/30 text-center px-4">
                <span className="text-brand-gold uppercase tracking-[0.2em] text-xs font-bold mb-3 block animate-fade-in">Your Trust</span>
                <h1 className="font-serif text-4xl md:text-5xl text-brand-black mb-6">Privacy Policy</h1>
                <div className="w-24 h-1 bg-brand-maroon/20 mx-auto rounded-full"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 border border-brand-cream shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-center mb-12">
                        <Shield className="w-16 h-16 text-brand-maroon mx-auto mb-6 opacity-80" strokeWidth={1} />
                        <p className="text-brand-charcoal text-lg leading-relaxed italic">
                            "At {siteContent.brandName}, we value the trust you place in our family brand. Protecting your personal information is our commitment."
                        </p>
                    </div>

                    <div className="space-y-12">
                        {/* Section 1 */}
                        <div className="group">
                            <div className="flex items-center gap-3 mb-4">
                                <Eye className="w-5 h-5 text-brand-gold" />
                                <h3 className="font-serif text-xl text-brand-black">Information We Collect</h3>
                            </div>
                            <div className="pl-8 border-l-2 border-brand-cream group-hover:border-brand-maroon transition-colors py-1">
                                <p className="text-brand-charcoal leading-relaxed text-sm md:text-base">
                                    We may collect basic personal information—such as your name, phone number, and shipping address—strictly when you communicate with us via WhatsApp for inquiries or to finalize a purchase.
                                </p>
                            </div>
                        </div>

                        {/* Section 2 */}
                        <div className="group">
                            <div className="flex items-center gap-3 mb-4">
                                <Lock className="w-5 h-5 text-brand-gold" />
                                <h3 className="font-serif text-xl text-brand-black">Data Security</h3>
                            </div>
                            <div className="pl-8 border-l-2 border-brand-cream group-hover:border-brand-maroon transition-colors py-1">
                                <p className="text-brand-charcoal leading-relaxed text-sm md:text-base">
                                    Your data is sacred. We do not share, sell, or disclose your personal information to third parties, agencies, or marketers. It is shared strictly with our trusted shipping partners solely to deliver your saree.
                                </p>
                            </div>
                        </div>

                        {/* Section 3 */}
                        <div className="group">
                            <div className="flex items-center gap-3 mb-4">
                                <Mail className="w-5 h-5 text-brand-gold" />
                                <h3 className="font-serif text-xl text-brand-black">Contact Us</h3>
                            </div>
                            <div className="pl-8 border-l-2 border-brand-cream group-hover:border-brand-maroon transition-colors py-1">
                                <p className="text-brand-charcoal leading-relaxed text-sm md:text-base">
                                    If you have specific questions about how we handle your data, please reach out to us directly at <a href={`mailto:${siteContent.contact.email}`} className="text-brand-maroon underline">{siteContent.contact.email}</a>.
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
