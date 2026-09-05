import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Brand logo for Sunitha Gadwal Saree House.
 *
 * A prominent maroon-and-gold "SG" monogram, with the name beside it:
 * "Sunitha" in Cormorant Garamond italic, "Gadwal Saree House" beneath in
 * Marcellus small caps. Refined and personal rather than corporate.
 *
 * `tone` only affects the wordmark colours:
 *   "dark"  — for light backgrounds (ivory / white)
 *   "light" — for dark backgrounds (brand-black / maroon)
 */

type Tone = "dark" | "light";
type Variant = "mark" | "horizontal" | "stacked";

interface LogoProps {
    variant?: Variant;
    tone?: Tone;
    className?: string;
    /** Extra classes for the mark <img> wrapper (size lives here). */
    markClassName?: string;
    /** Render the mark at higher priority (above-the-fold header). */
    priority?: boolean;
}

// Intrinsic size of /public/logo.png — pre-sharpened for display at small
// sizes (the source art's fine linework goes soft under a generic resize
// once it's down around header/footer height).
const MARK_W = 411;
const MARK_H = 480;

function LogoMark({ className, priority }: { className?: string; priority?: boolean }) {
    return (
        <Image
            src="/logo.png"
            alt=""
            width={MARK_W}
            height={MARK_H}
            priority={priority}
            quality={95}
            sizes="120px"
            aria-hidden="true"
            className={cn("h-full w-auto object-contain", className)}
        />
    );
}

export default function Logo({
    variant = "horizontal",
    tone = "dark",
    className,
    markClassName,
    priority,
}: LogoProps) {
    const label = "Sunitha Gadwal Saree House";

    if (variant === "mark") {
        return (
            <span
                className={cn("inline-flex h-12", markClassName, className)}
                aria-label={label}
                role="img"
            >
                <LogoMark priority={priority} />
            </span>
        );
    }

    const stacked = variant === "stacked";
    // "Sunitha" is matched to the deep maroon of the monogram art, not the
    // site accent — the lockup should stay stable if the palette shifts.
    const scriptColor = tone === "light" ? "text-brand-ivory" : "text-[#6E1620]";
    const capsColor = tone === "light" ? "text-brand-gold-bright" : "text-brand-gold";
    const cormorant = { fontFamily: "var(--font-cormorant), Georgia, 'Times New Roman', serif" };
    const marcellus = { fontFamily: "var(--font-marcellus), Georgia, 'Times New Roman', serif" };

    return (
        <span
            className={cn(
                "inline-flex select-none",
                stacked ? "flex-col items-center gap-2.5" : "flex-row items-center gap-3",
                className,
            )}
            aria-label={label}
            role="img"
        >
            <span
                className={cn(
                    "inline-flex shrink-0",
                    stacked ? "h-[5rem]" : "h-14 md:h-16",
                    markClassName,
                )}
            >
                <LogoMark priority={priority} />
            </span>

            <span className={cn("flex flex-col", stacked ? "items-center text-center" : "items-start")}>
                <span
                    style={cormorant}
                    className={cn(
                        // Cormorant italic reserves a lot of space below the
                        // baseline; the negative margin pulls the caps line up
                        // so the two sit as one lockup.
                        "-mb-[0.22em] whitespace-nowrap italic font-semibold leading-none",
                        scriptColor,
                        stacked ? "text-[2.4rem]" : "text-[2rem] md:text-[2.2rem] lg:text-[2.4rem]",
                    )}
                >
                    Sunitha
                </span>

                <span
                    style={marcellus}
                    className={cn(
                        "whitespace-nowrap uppercase leading-none",
                        capsColor,
                        stacked
                            ? "text-[10px] tracking-[0.3em]"
                            : "text-[8.5px] tracking-[0.2em] md:text-[10px] md:tracking-[0.24em]",
                    )}
                >
                    <span className="-mr-[0.24em] inline-block">Gadwal Saree House</span>
                </span>
            </span>
        </span>
    );
}
