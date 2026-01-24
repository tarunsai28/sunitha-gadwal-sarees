
"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
    images: string[];
    title: string;
}

export default function ProductGallery({ images, title }: ProductGalleryProps) {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <div className="flex flex-col gap-4">
            {/* Main Image */}
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-brand-cream/20 border border-brand-cream rounded-sm">
                <Image
                    src={selectedImage}
                    alt={title}
                    fill
                    className="object-cover transition-all duration-500 hover:scale-105 cursor-zoom-in"
                    priority
                />
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                    {images.map((img, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedImage(img)}
                            className={cn(
                                "relative w-20 aspect-[3/4] flex-shrink-0 overflow-hidden border transition-all",
                                selectedImage === img ? "border-brand-maroon ring-1 ring-brand-maroon" : "border-transparent hover:border-brand-gold"
                            )}
                        >
                            <Image
                                src={img}
                                alt={`${title} thumbnail ${index + 1}`}
                                fill
                                className="object-cover"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
