
import CollectionsClient from "@/components/CollectionsClient";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function CollectionsPage() {
    return (
        <main className="min-h-screen bg-brand-ivory">
            <Header theme="transparent-light" />

            {/* Page Header */}
            <div className="pt-32 pb-16 bg-brand-maroon text-center px-4">
                <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">Our Collections</h1>
                <p className="text-brand-cream/90 max-w-2xl mx-auto font-light text-lg">
                    Discover our exclusive range of Authentic Gadwal Handloom Sarees. Each piece is unique and woven with tradition.
                </p>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <CollectionsClient />
            </div>

            <Footer />
            <WhatsAppButton variant="floating" />
        </main>
    );
}
