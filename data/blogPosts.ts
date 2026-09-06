export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    coverImage?: string;
    publishedAt: string; // ISO date string, e.g. "2026-08-27"
}

export const blogPosts: BlogPost[] = [
    {
        id: "2",
        slug: "caring-for-your-gadwal-handloom-saree",
        title: "Caring for Your Gadwal Handloom Saree",
        excerpt: "Tested advice for folding, storing and washing a handloom Gadwal saree so its silk border and real zari last for decades.",
        content: "A handloom Gadwal saree is woven to last a lifetime, and often longer — many are handed from mother to daughter. A little care is all it takes to keep the silk supple and the zari bright.\n\nFor the first wash, dry clean only. After that, a gentle hand wash in cold water with a mild detergent is fine for the cotton-bodied sarees, while the pure silk ones are always safest at the dry cleaner. Never wring the saree — press the water out gently between your palms and dry it in the shade. Direct sun fades the colour and weakens the zari.\n\nStore the saree folded inside a cotton cloth or an old cotton saree, never a plastic cover — handloom needs to breathe. Refold it along a slightly different line every few months so the same crease never wears through, and tuck a few cloves or a dried neem leaf into the fold to keep insects away.\n\nIf the zari darkens over the years, a soft, dry toothbrush worked lightly along the border lifts most of the tarnish. When ironing, use medium heat, press the body through a thin cotton cloth, and keep the iron off the zari altogether.\n\nCared for this way, a Gadwal saree only grows more beautiful with age — the drape softens and the border keeps its shine. If you are ever unsure about a particular piece, message us. We know how every saree in our collection was woven, and exactly how it should be looked after.",
        coverImage: "/heritage-loom.jpg",
        publishedAt: "2026-09-05",
    },
    {
        id: "1",
        slug: "the-art-of-gadwal-weaving",
        title: "The Art of Gadwal Weaving",
        excerpt: "A look at the interlocked weft technique — 'Kuppadam' or 'Tippadam' — that makes an authentic Gadwal saree unmistakable.",
        content: "Every Gadwal saree begins on the loom, where the body and the border are woven separately and then interlocked together by hand. This technique, known as Kuppadam or Tippadam, is what gives a genuine Gadwal saree its signature contrast between a light, breathable cotton-silk body and a heavier, richly patterned silk border.\n\nIt takes days of careful, patient work at the loom to complete a single saree. Every motif and border reflects generations of skill passed down through our family of weavers in Gadwal, Telangana.\n\nWhen you choose an authentic handloom Gadwal saree, you're choosing a piece of living heritage — woven by hand, not mass-produced.",
        publishedAt: "2026-08-01",
    },
];
