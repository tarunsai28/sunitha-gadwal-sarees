
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteContent } from "@/data/siteContent";
import { Globe, Truck, PackageCheck, AlertCircle } from "lucide-react";

export default function ShippingPolicy() {
    return (
        <main className="min-h-screen bg-brand-ivory">
            <Header />

            {/* Hero Section */}
            <div className="pt-32 pb-16 bg-brand-cream/30 text-center px-4">
                <span className="text-brand-gold uppercase tracking-[0.2em] text-xs font-bold mb-3 block animate-fade-in">Global Delivery</span>
                <h1 className="font-serif text-4xl md:text-5xl text-brand-black mb-6">Shipping Policy</h1>
                <div className="w-24 h-1 bg-brand-maroon/20 mx-auto rounded-full"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 border border-brand-cream shadow-sm hover:shadow-md transition-shadow">

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-brand-ivory p-6 border border-brand-cream/50 text-center">
                            <Truck className="w-10 h-10 text-brand-maroon mx-auto mb-4" strokeWidth={1.5} />
                            <h3 className="font-serif text-lg font-bold mb-2">Domestic Shipping</h3>
                            <p className="text-sm text-brand-charcoal">5-7 Business Days</p>
                            <p className="text-xs text-gray-400 mt-1">Across all Indian states</p>
                        </div>
                        <div className="bg-brand-ivory p-6 border border-brand-cream/50 text-center">
                            <Globe className="w-10 h-10 text-brand-maroon mx-auto mb-4" strokeWidth={1.5} />
                            <h3 className="font-serif text-lg font-bold mb-2">International Shipping</h3>
                            <p className="text-sm text-brand-charcoal">Varies by Country</p>
                            <p className="text-xs text-gray-400 mt-1">Customs duties borne by customer</p>
                        </div>
                    </div>

                    <div className="space-y-10">
                        <div className="flex gap-5">
                            <PackageCheck className="shrink-0 w-6 h-6 text-brand-gold mt-1" />
                            <div>
                                <h3 className="font-serif text-lg text-brand-black mb-2">Order Tracking</h3>
                                <p className="text-brand-charcoal text-sm leading-relaxed">
                                    Once your authentic saree is dispatched from our Gadwal center, we will personally share the live tracking number via WhatsApp. You can monitor the journey of your heritage piece until it reaches your doorstep.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-5">
                            <AlertCircle className="shrink-0 w-6 h-6 text-brand-gold mt-1" />
                            <div>
                                <h3 className="font-serif text-lg text-brand-black mb-2">Returns & Exchanges</h3>
                                <p className="text-brand-charcoal text-sm leading-relaxed">
                                    Due to the sensitive nature of pure handloom silk, we do not accept returns. However, in the rare case of a manufacturing defect, please report it within 24 hours of delivery with an unboxing video, and we will honor a replacement.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 pt-12 border-t border-brand-cream text-center">
                        <p className="text-sm text-gray-500 mb-6">Waiting for a shipment?</p>
                        <WhatsAppButton variant="ghost" label="Track My Order" />
                    </div>

                </div>
            </div>
            <Footer />
            <WhatsAppButton variant="floating" />
        </main>
    );
}
