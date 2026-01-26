
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sunitha Gadwal Saree House | Authentic Handloom Sarees",
  description: "Manufacturer of authentic Gadwal handloom & semi-gadwal sarees. Direct from weavers in Gadwal, Telangana.",
  openGraph: {
    title: "Sunitha Gadwal Saree House",
    description: "Authentic Gadwal Handloom Sarees directly from the manufacturer.",
    type: "website",
  },
};

import Providers from "@/components/Providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-brand-ivory text-brand-black font-sans`}
      >
        <JsonLd />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
