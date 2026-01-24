
export interface Product {
    id: string;
    code: string;
    title: string;
    category: "Handloom" | "Semi-Gadwal";
    color: string;
    borderType: string;
    weave: string;
    material: string;
    description: string;
    tags: string[];
    images: string[];
    price?: string;
    isNew: boolean;
}

export const products: Product[] = [
    {
        id: "1",
        code: "SGSH-001",
        title: "Royal Crimson Gadwal Handloom Saree",
        category: "Handloom",
        color: "Crimson Red",
        borderType: "Kutu Border",
        weave: "Interlocked Weft (Kuppadam)",
        material: "Pure Silk Cotton",
        description: "A masterpiece of Gadwal craftsmanship, this crimson red saree features an intricate gold zari Kutu border. Woven using the traditional interlocked weft technique.",
        tags: ["wedding", "traditional", "red", "gold-zari"],
        images: ["/placeholder.jpg", "/placeholder.jpg"],
        isNew: true
    },
    {
        id: "2",
        code: "SGSH-002",
        title: "Emerald Green Silk Gadwal",
        category: "Handloom",
        color: "Emerald Green",
        borderType: "Temple Border",
        weave: "Traditional Gadwal",
        material: "Pure Silk",
        description: "Lustrous emerald green body with a contrasting rich maroon temple border. Perfect for festive occasions.",
        tags: ["festive", "green", "silk"],
        images: ["/placeholder.jpg"],
        isNew: true
    },
    {
        id: "3",
        code: "SGSH-003",
        title: "Midnight Blue & Gold Zari",
        category: "Handloom",
        color: "Midnight Blue",
        borderType: "Broad Zari Border",
        weave: "Jacquard Pallu",
        material: "Silk Cotton Blend",
        description: "Deep midnight blue saree adorned with a heavy gold zari border and elaborate jacquard pallu.",
        tags: ["party-wear", "blue", "grand"],
        images: ["/placeholder.jpg"],
        isNew: true
    },
    {
        id: "4",
        code: "SGSH-004",
        title: "Mustard Yellow Semi-Gadwal",
        category: "Semi-Gadwal",
        color: "Mustard Yellow",
        borderType: "Contrast Border",
        weave: "Powerloom Blend",
        material: "Art Silk",
        description: "Elegant and lightweight mustard yellow saree with a pink contrast border. Ideal for daily wear or light functions.",
        tags: ["daily-wear", "yellow", "affordable"],
        images: ["/placeholder.jpg"],
        isNew: false
    },
    {
        id: "5",
        code: "SGSH-005",
        title: "Violet & Silver Zari Handloom",
        category: "Handloom",
        color: "Violet",
        borderType: "Silver Zari",
        weave: "Hand Woven",
        material: "Pure Silk",
        description: "Striking violet saree featuring rare silver zari work on the border and pallu.",
        tags: ["unique", "violet", "silver-zari"],
        images: ["/placeholder.jpg"],
        isNew: true
    },
    {
        id: "6",
        code: "SGSH-006",
        title: "Classic Ivory & Maroon Gadwal",
        category: "Handloom",
        color: "Ivory",
        borderType: "Maroon Border",
        weave: "Traditional",
        material: "Cotton Silk",
        description: "Timeless combination of ivory body with a deep maroon border. A symbol of elegance.",
        tags: ["classic", "ivory", "traditional"],
        images: ["/placeholder.jpg"],
        isNew: false
    },
    {
        id: "7",
        code: "SGSH-007",
        title: "Peacock Blue Semi-Gadwal",
        category: "Semi-Gadwal",
        color: "Peacock Blue",
        borderType: "Small Border",
        weave: "Machine Weave",
        material: "Poly Silk",
        description: "Vibrant peacock blue saree with subtle golden motifs. Easy to drape and maintain.",
        tags: ["modern", "blue", "lightweight"],
        images: ["/placeholder.jpg"],
        isNew: true
    },
    {
        id: "8",
        code: "SGSH-008",
        title: "Rani Pink Celebration Saree",
        category: "Handloom",
        color: "Rani Pink",
        borderType: "Gold Tissue Border",
        weave: "Kuppadam",
        material: "Pure Silk",
        description: "Radiant Rani Pink saree with a shimmering gold tissue border. The ultimate choice for weddings.",
        tags: ["bridal", "pink", "tissue"],
        images: ["/placeholder.jpg"],
        isNew: true
    },
    {
        id: "9",
        code: "SGSH-009",
        title: "Parrot Green Cotton Gadwal",
        category: "Handloom",
        color: "Parrot Green",
        borderType: "Thread Work Border",
        weave: "Cotton Weave",
        material: "Pure Cotton",
        description: "Cool and comfortable parrot green cotton saree with intricate thread work on the border.",
        tags: ["summer", "cotton", "green"],
        images: ["/placeholder.jpg"],
        isNew: true
    },
    {
        id: "10",
        code: "SGSH-010",
        title: "Black & Gold Night",
        category: "Semi-Gadwal",
        color: "Black",
        borderType: "Zari Checks",
        weave: "Soft Silk Blend",
        material: "Blended Silk",
        description: "Sophisticated black saree with gold zari checks throughout the body.",
        tags: ["evening-wear", "black", "stylish"],
        images: ["/placeholder.jpg"],
        isNew: false
    },
    {
        id: "11",
        code: "SGSH-011",
        title: "Mango Yellow Silk Gadwal",
        category: "Handloom",
        color: "Mango Yellow",
        borderType: "Green Contrast",
        weave: "Traditional",
        material: "Silk",
        description: "Bright mango yellow saree paired with a bottle green border. A classic South Indian combination.",
        tags: ["traditional", "yellow", "silk"],
        images: ["/placeholder.jpg"],
        isNew: true
    },
    {
        id: "12",
        code: "SGSH-012",
        title: "Sandalwood Cream Handloom",
        category: "Handloom",
        color: "Sandalwood Cream",
        borderType: "Red Zari",
        weave: "Fine Weave",
        material: "Sico (Silk Cotton)",
        description: "Subtle sandalwood cream shade with a striking red zari border.",
        tags: ["elegant", "cream", "office-wear"],
        images: ["/placeholder.jpg"],
        isNew: false
    },
    {
        id: "13",
        code: "SGSH-013",
        title: "Teal Blue Fancy Gadwal",
        category: "Semi-Gadwal",
        color: "Teal Blue",
        borderType: "Fancy Border",
        weave: "Modern Weave",
        material: "Art Silk",
        description: "Trendy teal blue saree with a contemporary border design.",
        tags: ["trendy", "teal", "modern"],
        images: ["/placeholder.jpg"],
        isNew: true
    },
    {
        id: "14",
        code: "SGSH-014",
        title: "Orange & Pink Dual Tone",
        category: "Handloom",
        color: "Orange-Pink",
        borderType: "Kanjivaram Style",
        weave: "Heavy Weave",
        material: "Pure Silk",
        description: "Mesmerizing dual tone of orange and pink with a heavy Kanjivaram style border.",
        tags: ["grand", "dual-tone", "silk"],
        images: ["/placeholder.jpg"],
        isNew: false
    },
    {
        id: "15",
        code: "SGSH-015",
        title: "Sky Blue Lightweight",
        category: "Semi-Gadwal",
        color: "Sky Blue",
        borderType: "Simple Zari",
        weave: "Airy Weave",
        material: "Chiffon Blend",
        description: "Breezy sky blue saree, extremely lightweight and perfect for day events.",
        tags: ["summer", "blue", "light"],
        images: ["/placeholder.jpg"],
        isNew: false
    },
    {
        id: "16",
        code: "SGSH-016",
        title: "Wine Red Velvet Border",
        category: "Handloom",
        color: "Wine Red",
        borderType: "Velvet Finish",
        weave: "Experimental",
        material: "Silk",
        description: "Rich wine red saree with a unique velvet finish feel on the border.",
        tags: ["unique", "red", "premium"],
        images: ["/placeholder.jpg"],
        isNew: true
    },
    {
        id: "17",
        code: "SGSH-017",
        title: "Graphite Grey Corporate",
        category: "Handloom",
        color: "Graphite Grey",
        borderType: "Geometric",
        weave: "Matte Finish",
        material: "Linen Silk",
        description: "Professional graphite grey saree with geometric border patterns.",
        tags: ["corporate", "grey", "modern"],
        images: ["/placeholder.jpg"],
        isNew: false
    },
    {
        id: "18",
        code: "SGSH-018",
        title: "Pastel Peach Semi-Gadwal",
        category: "Semi-Gadwal",
        color: "Pastel Peach",
        borderType: "Floral",
        weave: "Jacquard",
        material: "Soft Silk",
        description: "Delicate pastel peach saree with woven floral motifs.",
        tags: ["pastel", "peach", "feminine"],
        images: ["/placeholder.jpg"],
        isNew: true
    }
];
