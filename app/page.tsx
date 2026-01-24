
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SignatureCraft from "@/components/sections/SignatureCraft";
import NewArrivals from "@/components/sections/NewArrivals";
import HowToOrder from "@/components/sections/HowToOrder";
import TrustIndicators from "@/components/sections/TrustIndicators";
import CTABanner from "@/components/sections/CTABanner";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Header />

      <HeroSection />
      <SignatureCraft />
      <NewArrivals />
      <HowToOrder />
      <TrustIndicators />
      <CTABanner />

      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton variant="floating" />
    </main>
  );
}
