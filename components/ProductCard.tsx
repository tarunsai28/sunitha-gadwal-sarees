
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import WhatsAppButton from "./WhatsAppButton";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="group relative flex flex-col bg-white border border-brand-cream hover:border-brand-gold/30 transition-all duration-300 hover:shadow-lg">
            <div className="relative aspect-[3/4] overflow-hidden bg-brand-cream/20">
                <Image
                    src={product.images[0]}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
                />
                {product.isNew && (
                    <span className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-brand-maroon text-white text-[8px] sm:text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 sm:px-3 sm:py-1">
                        New Arrival
                    </span>
                )}
            </div>

            <div className="p-3 sm:p-6 flex flex-col flex-grow text-center">
                <div className="mb-1 sm:mb-2 text-[8px] sm:text-[10px] uppercase tracking-widest text-brand-gold font-medium">
                    {product.category}
                </div>
                <h3 className="font-serif text-sm sm:text-lg text-brand-black mb-1 group-hover:text-brand-maroon transition-colors line-clamp-2">
                    <Link href={`/product/${product.code}`}>
                        {product.title}
                    </Link>
                </h3>
                <div className="text-[10px] sm:text-xs text-brand-charcoal mb-2 sm:mb-4">Code: {product.code}</div>

                <div className="mt-auto space-y-3">
                    <WhatsAppButton
                        productCode={product.code}
                        variant="primary"
                        label="Get Price"
                        className="w-full !px-2 !py-2 !text-[10px] !gap-1 sm:!px-6 sm:!py-3 sm:!text-sm sm:!gap-2"
                    />

                </div>
            </div>
        </div>
    );
}
