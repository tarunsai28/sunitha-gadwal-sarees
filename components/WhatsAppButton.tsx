
"use client";

import { siteContent } from "@/data/siteContent";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils"; // We might need to create this utility or just use template literals if simple

interface WhatsAppButtonProps {
    productCode?: string;
    className?: string;
    variant?: "primary" | "floating" | "text" | "ghost";
    label?: string;
}

export default function WhatsAppButton({
    productCode,
    className = "",
    variant = "primary",
    label = siteContent.cta.whatsapp,
}: WhatsAppButtonProps) {
    // Construct message
    const message = productCode
        ? `Hi ${siteContent.brandName}, I’m interested in (Saree Code: ${productCode}). Please share price, blouse details, and available colors.`
        : `Hi ${siteContent.brandName}, I would like to know more about your collections.`;

    const encodedMessage = encodeURIComponent(message);
    // Using the first phone number for WhatsApp
    const phoneNumber = siteContent.contact.phones[0].replace(/[^0-9]/g, "");
    const href = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    const baseStyles = "inline-flex items-center justify-center transition-all duration-300 font-medium tracking-wide";

    const variants = {
        primary: "bg-brand-maroon/90 hover:bg-brand-maroon text-white px-6 py-3 rounded-none uppercase text-sm shadow-md hover:shadow-lg gap-2",
        floating: "fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-xl hover:shadow-2xl animate-in fade-in slide-in-from-bottom-4",
        text: "text-brand-maroon hover:text-brand-maroon/80 underline underline-offset-4 gap-1",
        ghost: "bg-transparent border border-brand-maroon text-brand-maroon hover:bg-brand-maroon hover:text-white px-6 py-3 rounded-none uppercase text-sm transition-colors duration-300 gap-2"
    };

    if (variant === "floating") {
        return (
            <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${baseStyles} ${variants.floating} ${className}`}
                aria-label="Chat on WhatsApp"
            >
                <MessageCircle className="w-8 h-8" strokeWidth={1.5} />
            </Link>
        );
    }

    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            <MessageCircle className="w-5 h-5" />
            <span>{label}</span>
        </Link>
    );
}
