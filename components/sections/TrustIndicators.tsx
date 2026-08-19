
import { Fragment } from "react";
import { Globe, ShieldCheck, Star } from "lucide-react";

const indicators = [
    { icon: Globe, title: "Worldwide Shipping", subtitle: "We deliver heritage globally" },
    { icon: ShieldCheck, title: "Quality Guarantee", subtitle: "Verified authentic handloom" },
    { icon: Star, title: "50+ Years Legacy", subtitle: "Trusted by generations" },
];

export default function TrustIndicators() {
    return (
        <section className="py-2 md:py-12 border-t border-brand-cream bg-brand-ivory">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-center items-stretch md:items-center gap-0 md:gap-12">
                    {indicators.map((item, index) => (
                        <Fragment key={item.title}>
                            {index > 0 && (
                                <div className="border-t border-brand-cream md:border-t-0 md:border-l md:w-px md:h-12"></div>
                            )}
                            <div className="flex items-center gap-4 py-4 md:py-0">
                                <div className="w-11 h-11 shrink-0 rounded-full bg-brand-cream ring-4 ring-brand-gold/15 flex items-center justify-center text-brand-maroon">
                                    <item.icon size={22} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h4 className="font-serif text-base md:text-lg font-bold">{item.title}</h4>
                                    <p className="text-xs text-brand-charcoal">{item.subtitle}</p>
                                </div>
                            </div>
                        </Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
}
