
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import { getStoredProducts } from "@/lib/blob-store";

// Product data can change at any time via the seller dashboard, so pages
// re-fetch it periodically rather than baking a stale copy in at build time.
export const revalidate = 60;

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
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
};

import Providers from "@/components/Providers";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialProducts = await getStoredProducts();

  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-brand-ivory text-brand-black font-sans`}
      >
        <JsonLd />
        <Providers initialProducts={initialProducts}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
