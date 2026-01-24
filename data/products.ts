
export interface Product {
    id: string;
    code: string;
    title: string;
    category: "Pure Handloom pattu" | "Powerloom pattu" | "Semi-Gadwal pattu";
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
    // --- 1. Pure Handloom (saree 1) ---
    {
        id: "1",
        code: "SGSH-001",
        title: "Royal Crimson Gadwal Handloom Saree",
        category: "Pure Handloom pattu",
        color: "Crimson Red",
        borderType: "Kutu Border",
        weave: "Interlocked Weft (Kuppadam)",
        material: "Pure Silk Cotton",
        description: "A masterpiece of Gadwal craftsmanship, this crimson red saree features an intricate gold zari Kutu border. Woven using the traditional interlocked weft technique.",
        tags: ["wedding", "traditional", "red", "gold-zari"],
        images: ["/products/saree (1).jpg"],
        isNew: true
    },
    // --- 2. Pure Handloom (saree 2) ---
    {
        id: "2",
        code: "SGSH-002",
        title: "Emerald Green Silk Gadwal",
        category: "Pure Handloom pattu",
        color: "Emerald Green",
        borderType: "Temple Border",
        weave: "Traditional Gadwal",
        material: "Pure Silk",
        description: "Lustrous emerald green body with a contrasting rich maroon temple border. Perfect for festive occasions.",
        tags: ["festive", "green", "silk"],
        images: ["/products/saree (2).jpg"],
        isNew: true
    },
    // --- 3. Pure Handloom (saree 3) ---
    {
        id: "3",
        code: "SGSH-003",
        title: "Midnight Blue & Gold Zari",
        category: "Pure Handloom pattu",
        color: "Midnight Blue",
        borderType: "Broad Zari Border",
        weave: "Jacquard Pallu",
        material: "Silk Cotton Blend",
        description: "Deep midnight blue saree adorned with a heavy gold zari border and elaborate jacquard pallu.",
        tags: ["party-wear", "blue", "grand"],
        images: ["/products/saree (3).jpg"],
        isNew: true
    },
    // --- 4. Pure Handloom (saree 4) ---
    {
        id: "4",
        code: "SGSH-004",
        title: "Mustard Yellow Handloom Saree",
        category: "Pure Handloom pattu",
        color: "Mustard Yellow",
        borderType: "Contrast Border",
        weave: "Traditional Weave",
        material: "Pure Silk",
        description: "Elegant and lightweight mustard yellow handloom saree with a pink contrast border.",
        tags: ["daily-wear", "yellow", "traditional"],
        images: ["/products/saree (4).jpg"],
        isNew: false
    },
    // --- 5. Pure Handloom (saree 5) ---
    {
        id: "5",
        code: "SGSH-005",
        title: "Violet & Silver Zari Handloom",
        category: "Pure Handloom pattu",
        color: "Violet",
        borderType: "Silver Zari",
        weave: "Hand Woven",
        material: "Pure Silk",
        description: "Striking violet saree featuring rare silver zari work on the border and pallu.",
        tags: ["unique", "violet", "silver-zari"],
        images: ["/products/saree (5).jpg"],
        isNew: true
    },
    // --- 6. Pure Handloom (saree 6) ---
    {
        id: "6",
        code: "SGSH-006",
        title: "Classic Ivory & Maroon Gadwal",
        category: "Pure Handloom pattu",
        color: "Ivory",
        borderType: "Maroon Border",
        weave: "Traditional",
        material: "Cotton Silk",
        description: "Timeless combination of ivory body with a deep maroon border. A symbol of elegance.",
        tags: ["classic", "ivory", "traditional"],
        images: ["/products/saree (6).jpg"],
        isNew: false
    }
];
