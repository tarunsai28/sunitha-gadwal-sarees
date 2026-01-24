
import { Award, Scissors, Truck } from "lucide-react";

const features = [
    {
        title: "Authentic Gadwal Weaves",
        description: "Every saree is handwoven with precision, featuring the signature interlocking weft technique known as 'Kuppadam' or 'Tippadam'. Verified authenticity.",
        icon: Scissors,
    },
    {
        title: "Skilled Craftsmanship",
        description: "Our master weavers bring decades of heritage and skill, ensuring that every motif and border reflects the rich tradition of Gadwal.",
        icon: Award,
    },
    {
        title: "Fresh from Our Looms",
        description: "Experience the luxury of buying directly from the manufacturer. No middlemen—just authentic handlooms straight from our family to yours.",
        icon: Truck,
    },
];

export default function SignatureCraft() {
    return (
        <section className="py-20 bg-brand-ivory">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-brand-gold uppercase tracking-[0.2em] text-xs font-bold mb-3 block">Our Heritage</span>
                    <h2 className="font-serif text-3xl md:text-4xl text-brand-black mb-6">Signature Craftsmanship</h2>
                    <div className="w-24 h-1 bg-brand-maroon/20 mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            <div className="w-16 h-16 rounded-full bg-brand-cream flex items-center justify-center mb-6 text-brand-maroon group-hover:bg-brand-maroon group-hover:text-white transition-all duration-500">
                                <feature.icon size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-serif text-xl text-brand-black mb-4">{feature.title}</h3>
                            <p className="text-brand-charcoal text-sm leading-relaxed max-w-xs">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
