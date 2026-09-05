
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";
import Logo from "./Logo";

interface HeaderProps {
    /** @deprecated The header now always has a solid background, so this no
     * longer changes anything. Kept so existing call sites don't break. */
    theme?: "transparent-dark" | "transparent-light";
}

export default function Header({}: HeaderProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.classList.toggle("mobile-menu-open", isMobileMenuOpen);

        if (isMobileMenuOpen) {
            // Pin the page in place while the menu is open. overflow:hidden
            // alone doesn't reliably block scroll on mobile browsers (the
            // scroll root is <html>, and iOS Safari ignores it outright) -
            // this is what actually stops the page scrolling behind the
            // menu and letting the footer show through.
            const scrollY = window.scrollY;
            document.body.style.position = "fixed";
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = "100%";
        } else {
            const scrollY = document.body.style.top;
            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.width = "";
            if (scrollY) {
                window.scrollTo(0, parseInt(scrollY, 10) * -1);
            }
        }

        // No cleanup here: the if/else above already applies or releases the
        // lock on every change. A cleanup fn would run before the next
        // effect body on each transition and wipe body.style.top before the
        // close-branch gets to read it back for scroll restoration.
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Collections", href: "/collections" },
        { name: "Journal", href: "/blog" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 bg-brand-ivory/95 backdrop-blur-md border-b border-brand-cream transition-all duration-300 ${isScrolled ? "shadow-md py-2" : "shadow-sm py-4"
                }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" aria-label="Sunitha Gadwal Saree House — home">
                        <Logo variant="horizontal" tone="dark" priority />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => {
                            const isActive = link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    aria-current={isActive ? "page" : undefined}
                                    className={`font-serif text-sm uppercase tracking-widest transition-colors font-medium relative group ${isActive ? "text-brand-maroon" : "text-brand-black hover:text-brand-maroon"
                                        }`}
                                >
                                    {link.name}
                                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-maroon transition-all ${isActive ? "w-full" : "w-0 group-hover:w-full"
                                        }`} />
                                </Link>
                            );
                        })}
                    </nav>

                    {/* CTA & Mobile Menu Toggle */}
                    <div className="flex items-center gap-4">
                        <div className="hidden md:block">
                            <WhatsAppButton
                                variant="primary"
                                label="Inquire"
                                className="!py-2 !px-6 !text-xs border-none shadow-md !bg-brand-maroon !text-white hover:!bg-brand-maroon/90"
                            />
                        </div>

                        <button
                            className="md:hidden p-2 text-brand-black"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X className="text-brand-black" /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu — a self-contained full-screen overlay with its own
                close control, so it never depends on the header underneath
                staying at a predictable height. */}
            <div
                className={`md:hidden fixed inset-0 z-[60] bg-brand-ivory overflow-y-auto transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
                    }`}
            >
                <div className="flex items-center justify-between px-4 py-4 border-b border-brand-cream">
                    <Logo variant="horizontal" tone="dark" />

                    <button
                        className="p-2 text-brand-black"
                        onClick={() => setIsMobileMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        <X />
                    </button>
                </div>
                <nav className="flex flex-col items-center justify-center gap-8 px-8 py-16">
                    {navLinks.map((link) => {
                        const isActive = link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                aria-current={isActive ? "page" : undefined}
                                className={`text-2xl font-serif transition-colors ${isActive ? "text-brand-maroon" : "text-brand-black hover:text-brand-maroon"}`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                    <WhatsAppButton variant="primary" label="Get Price on WhatsApp" />
                </nav>
            </div>
        </header>
    );
}
