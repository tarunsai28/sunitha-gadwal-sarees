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
        id: "1",
        slug: "the-art-of-gadwal-weaving",
        title: "The Art of Gadwal Weaving",
        excerpt: "A look at the interlocked weft technique — 'Kuppadam' or 'Tippadam' — that makes an authentic Gadwal saree unmistakable.",
        content: "Every Gadwal saree begins on the loom, where the body and the border are woven separately and then interlocked together by hand. This technique, known as Kuppadam or Tippadam, is what gives a genuine Gadwal saree its signature contrast between a light, breathable cotton-silk body and a heavier, richly patterned silk border.\n\nIt takes days of careful, patient work at the loom to complete a single saree. Every motif and border reflects generations of skill passed down through our family of weavers in Gadwal, Telangana.\n\nWhen you choose an authentic handloom Gadwal saree, you're choosing a piece of living heritage — woven by hand, not mass-produced.",
        publishedAt: "2026-08-01",
    },
];
