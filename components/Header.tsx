
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteContent } from "@/data/siteContent";
import { Menu, X, ShoppingBag } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

interface HeaderProps {
    theme?: "transparent-dark" | "transparent-light";
}

export default function Header({ theme = "transparent-dark" }: HeaderProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Collections", href: "/collections" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    // Determine text color based on scroll state and theme
    // Scrolled: Always dark text (on ivory bg)
    // Not Scrolled: Dark text if transparent-dark (default), Light text if transparent-light
    const isLightText = !isScrolled && theme === "transparent-light";

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? "bg-brand-ivory/95 backdrop-blur-md shadow-sm py-2"
                : "bg-transparent py-4"
                }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="group">
                        <h1 className={`font-serif text-2xl md:text-3xl font-bold tracking-tight transition-colors ${isLightText ? "text-white drop-shadow-md" : (isScrolled ? "text-brand-maroon" : "text-brand-maroon drop-shadow-sm")
                            }`}>
                            SGSH
                        </h1>
                        <span className={`text-[10px] tracking-widest uppercase block opacity-0 group-hover:opacity-100 transition-opacity -mt-1 ${isLightText ? "text-brand-gold" : "text-brand-gold"
                            }`}>
                            Gadwal Sarees
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`font-serif text-sm uppercase tracking-widest transition-colors font-medium relative group ${isLightText ? "text-white/90 hover:text-white" : "text-brand-black hover:text-brand-maroon"
                                    }`}
                            >
                                {link.name}
                                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full ${isLightText ? "bg-white" : "bg-brand-maroon"
                                    }`} />
                            </Link>
                        ))}
                    </nav>

                    {/* CTA & Mobile Menu Toggle */}
                    <div className="flex items-center gap-4">
                        <div className="hidden md:block">
                            <WhatsAppButton
                                variant="primary"
                                label="Inquire"
                                className="!py-2 !px-6 !text-xs !bg-brand-maroon !text-white hover:!bg-brand-maroon/90 border-none shadow-md"
                            />
                        </div>

                        <button
                            className={`md:hidden p-2 ${isLightText ? "text-white" : "text-brand-black"}`}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X className="text-brand-black" /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden fixed inset-0 z-40 bg-brand-ivory transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                style={{ top: "60px" }} // Below header approx
            >
                <nav className="flex flex-col items-center justify-center p-8 space-y-8 h-full">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-2xl font-serif text-brand-black hover:text-brand-maroon transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <WhatsAppButton variant="primary" label="Get Price on WhatsApp" />
                </nav>
            </div>
        </header>
    );
}
