import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteContent } from "@/data/siteContent";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-brand-ivory selection:bg-brand-maroon selection:text-white">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-24 pb-8 md:pt-32 md:pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-brand-cream/30 -skew-y-3 origin-top-left transform scale-110"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="text-brand-gold uppercase tracking-[0.2em] text-xs font-bold mb-3 md:mb-4 block animate-fade-in">Get in Touch</span>
                        <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl text-brand-black mb-3 md:mb-6 leading-tight">
                            Let's Weave a <span className="italic text-brand-maroon">Conversation</span>
                        </h1>
                        <p className="text-brand-charcoal/80 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed">
                            Whether you have a question about a specific weave, want to visit our store, or simply wish to say hello, we are here for you.
                        </p>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-24">
                <div className="bg-white rounded-lg shadow-xl shadow-brand-maroon/5 overflow-hidden border border-brand-cream/50">
                    <div className="grid lg:grid-cols-2">

                        {/* Contact Information Column */}
                        <div className="p-6 sm:p-8 md:p-12 lg:p-16 bg-brand-maroon-deep text-brand-ivory relative overflow-hidden">
                            {/* Decorative background elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-maroon/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-gold-bright/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>

                            <div className="relative z-10 space-y-6 md:space-y-12">
                                <div>
                                    <h2 className="font-serif text-2xl md:text-3xl text-white mb-2">Visit Our Store</h2>
                                    <p className="text-brand-cream/60 text-sm">Experience the elegance of Gadwal firsthand.</p>
                                </div>

                                <div className="space-y-6 md:space-y-10">
                                    <div className="flex gap-4 md:gap-6 group">
                                        <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-brand-gold-bright/10 group-hover:border-brand-gold-bright/30 transition-all duration-300">
                                            <MapPin size={20} className="text-brand-gold-bright" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white mb-1 md:mb-2 tracking-wide uppercase text-xs">Address</h3>
                                            <p className="text-brand-cream/80 leading-relaxed max-w-xs font-light text-sm md:text-base">{siteContent.contact.address.full}</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 md:gap-6 group">
                                        <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-brand-gold-bright/10 group-hover:border-brand-gold-bright/30 transition-all duration-300">
                                            <Phone size={20} className="text-brand-gold-bright" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white mb-1 md:mb-2 tracking-wide uppercase text-xs">Call or Text</h3>
                                            <div className="flex flex-col gap-1">
                                                {siteContent.contact.phones.map(phone => (
                                                    <a key={phone} href={`tel:${phone}`} className="text-brand-cream/80 hover:text-brand-gold-bright transition-colors font-light decoration-brand-gold/30 underline-offset-4 hover:underline text-sm md:text-base">
                                                        {phone}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 md:gap-6 group">
                                        <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-brand-gold-bright/10 group-hover:border-brand-gold-bright/30 transition-all duration-300">
                                            <Mail size={20} className="text-brand-gold-bright" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white mb-1 md:mb-2 tracking-wide uppercase text-xs">Email Us</h3>
                                            <a href={`mailto:${siteContent.contact.email}`} className="text-brand-cream/80 hover:text-brand-gold-bright transition-colors font-light text-sm md:text-base">
                                                {siteContent.contact.email}
                                            </a>
                                        </div>
                                    </div>

                                    {/* Shown here only on the smallest screens — sm+ already sees
                                        this via the floating card on the map. */}
                                    <div className="flex gap-4 group sm:hidden">
                                        <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-brand-gold-bright/10 group-hover:border-brand-gold-bright/30 transition-all duration-300">
                                            <Clock size={20} className="text-brand-gold-bright" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white mb-1 tracking-wide uppercase text-xs">Opening Hours</h3>
                                            <p className="text-brand-cream/80 font-light text-sm">Monday - Sunday, 10:00 AM - 8:00 PM</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-6 md:pt-8 border-t border-white/10">
                                    <h3 className="font-serif text-lg md:text-xl text-white mb-3 md:mb-4">Quick Chat</h3>
                                    <p className="text-brand-cream/60 text-sm mb-4 md:mb-6 max-w-xs">Have a quick question? Chat with us directly on WhatsApp for instant support.</p>
                                    <WhatsAppButton
                                        variant="primary"
                                        label="Open WhatsApp Chat"
                                        className="w-full sm:w-auto !bg-brand-gold hover:!bg-brand-gold/90 !text-brand-black"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Map or Second Column - Visual */}
                        <div className="relative h-[300px] sm:h-[400px] lg:h-auto bg-brand-cream/20">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3466.5136202824424!2d77.78961867460339!3d16.239848734848792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc9fdbb8c76c10b%3A0x4ae8c9370bfda749!2sSunitha%20Gadwal%20Saree%20House!5e1!3m2!1sen!2sus!4v1787112780387!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                title="Google Maps Location"
                                className="absolute inset-0 w-full h-full grayscale-[0.5] contrast-[1.1] opacity-90 hover:grayscale-0 transition-all duration-700"
                            ></iframe>

                            {/* Overlay Card for Map */}
                            <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 shadow-lg border-l-4 border-brand-maroon max-w-sm hidden sm:block">
                                <div className="flex items-start gap-3">
                                    <Clock size={20} className="text-brand-maroon mt-1 shrink-0" />
                                    <div>
                                        <h4 className="font-serif text-lg text-brand-black">Opening Hours</h4>
                                        <p className="text-sm text-brand-charcoal mt-1">
                                            Monday - Sunday<br />
                                            10:00 AM - 8:00 PM
                                        </p>
                                    </div>
                                </div>
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
