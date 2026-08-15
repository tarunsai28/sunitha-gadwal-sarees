
import { MessageCircle, CreditCard, Truck } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Explore & Select",
        description: "Browse our exclusive collections of authentic Gadwal sarees. Choose your favorite designs and note the product code.",
        icon: MessageCircle
    },
    {
        number: "02",
        title: "Connect on WhatsApp",
        description: "Click 'Get Price' to chat directly with us. We'll confirm availability, share price, and provide blouse details.",
        icon: MessageCircle
    },
    {
        number: "03",
        title: "Secure & Ship",
        description: "Complete payment via secure bank transfer or UPI. We ship your saree immediately with tracking.",
        icon: Truck
    }
];

export default function HowToOrder() {
    return (
        <section className="py-12 md:py-20 bg-brand-cream/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-8 md:mb-16">
                    <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-brand-black mb-3 md:mb-6">How to Order</h2>
                    <p className="text-brand-charcoal text-sm sm:text-base">Simple, personal, and secure. We believe in direct conversation.</p>
                </div>

                <div className="flex flex-col gap-3 md:grid md:grid-cols-3 md:gap-8 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-brand-gold/20 -z-10"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-row items-center gap-4 text-left bg-white p-4 md:flex-col md:items-center md:text-center md:p-8 border border-brand-cream relative shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 bg-brand-maroon text-white rounded-full flex items-center justify-center text-base md:text-lg font-bold font-serif md:mx-auto md:mb-6 relative z-10">
                                {step.number}
                            </div>
                            <div>
                                <h3 className="font-serif text-base md:text-xl text-brand-black mb-1 md:mb-4">{step.title}</h3>
                                <p className="text-brand-charcoal text-sm leading-relaxed">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
