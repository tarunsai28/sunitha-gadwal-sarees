
import { siteContent } from "@/data/siteContent";
import Link from "next/link";
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-brand-black text-brand-cream py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <h2 className="font-serif text-2xl font-bold text-white tracking-wide">
                            {siteContent.brandName}
                        </h2>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            {siteContent.tagline} We represent the true art of Gadwal, weaving heritage since decades.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href={siteContent.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href={siteContent.socials.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href={siteContent.socials.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h3 className="font-serif text-lg text-brand-gold tracking-widest uppercase">Explore</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="/collections" className="hover:text-white transition-colors">New Arrivals</Link></li>
                            <li><Link href="/collections?category=Handloom" className="hover:text-white transition-colors">Handloom Sarees</Link></li>
                            <li><Link href="/about" className="hover:text-white transition-colors">Our Heritage</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div className="space-y-6">
                        <h3 className="font-serif text-lg text-brand-gold tracking-widest uppercase">Contact</h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="mt-1 text-brand-gold shrink-0" />
                                <a href={siteContent.contact.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                    {siteContent.contact.address.full}
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-brand-gold shrink-0" />
                                <div className="flex flex-col">
                                    {siteContent.contact.phones.map(phone => (
                                        <a key={phone} href={`tel:${phone}`} className="hover:text-white transition-colors">{phone}</a>
                                    ))}
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-brand-gold shrink-0" />
                                <a href={`mailto:${siteContent.contact.email}`} className="hover:text-white transition-colors">
                                    {siteContent.contact.email}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal / Map Preview (Optional) */}
                    <div className="space-y-6">
                        <h3 className="font-serif text-lg text-brand-gold tracking-widest uppercase">Legal</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
                            <li><Link href="/shipping-policy" className="hover:text-white transition-colors">Shipping Policy</Link></li>
                        </ul>
                        <p className="text-xs text-gray-500 pt-8">
                            © {new Date().getFullYear()} {siteContent.brandName}. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
