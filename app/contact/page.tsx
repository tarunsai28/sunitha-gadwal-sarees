
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteContent } from "@/data/siteContent";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-brand-ivory">
            <Header />

            <div className="pt-32 pb-12 text-center px-4 bg-brand-cream/30">
                <h1 className="font-serif text-4xl md:text-5xl text-brand-black mb-4">Contact Us</h1>
                <p className="text-brand-charcoal max-w-2xl mx-auto">
                    Have a question about a saree? Want to visit our store? We’d love to hear from you.
                </p>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid lg:grid-cols-2 gap-16">

                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="font-serif text-2xl text-brand-black mb-6">Get in Touch</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-brand-maroon/10 text-brand-maroon flex items-center justify-center rounded-full shrink-0">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-brand-black mb-1">Our Location</h3>
                                        <p className="text-brand-charcoal text-sm leading-relaxed max-w-xs">{siteContent.contact.address.full}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-brand-maroon/10 text-brand-maroon flex items-center justify-center rounded-full shrink-0">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-brand-black mb-1">Phone / WhatsApp</h3>
                                        <div className="flex flex-col text-brand-charcoal text-sm">
                                            {siteContent.contact.phones.map(phone => (
                                                <a key={phone} href={`tel:${phone}`} className="hover:text-brand-maroon transition-colors">{phone}</a>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-brand-maroon/10 text-brand-maroon flex items-center justify-center rounded-full shrink-0">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-brand-black mb-1">Email</h3>
                                        <a href={`mailto:${siteContent.contact.email}`} className="text-brand-charcoal text-sm hover:text-brand-maroon transition-colors">
                                            {siteContent.contact.email}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="font-serif text-2xl text-brand-black mb-6">Direct Message</h2>
                            <p className="text-brand-charcoal mb-6 text-sm">The fastest way to reach us is via WhatsApp.</p>
                            <WhatsAppButton variant="primary" label="Chat on WhatsApp" className="w-full sm:w-auto" />
                        </div>
                    </div>

                    {/* Map Embed */}
                    <div className="h-[400px] lg:h-auto bg-gray-100 rounded-sm overflow-hidden border border-brand-cream relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15258.981804797079!2d77.7997!3d16.2333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcae6e1adce5b3b%3A0x1d6c8b0b8c6b8c6b!2sGadwal%2C%20Telangana%20509125!5e0!3m2!1sen!2sin!4v1625637282828!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            title="Google Maps Location"
                            className="absolute inset-0 w-full h-full"
                        ></iframe>
                    </div>
                </div>
            </div>

            <Footer />
            <WhatsAppButton variant="floating" />
        </main>
    );
}
