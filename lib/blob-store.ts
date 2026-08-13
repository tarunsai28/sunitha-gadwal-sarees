import { put, list } from "@vercel/blob";
import { products as seedProducts, Product } from "@/data/products";

const PRODUCTS_PATHNAME = "store/products.json";

export async function getStoredProducts(): Promise<Product[]> {
    try {
        const { blobs } = await list({ prefix: PRODUCTS_PATHNAME, limit: 1 });
        const match = blobs.find((b) => b.pathname === PRODUCTS_PATHNAME);
        if (!match) return seedProducts;

        const res = await fetch(match.url, { cache: "no-store" });
        if (!res.ok) return seedProducts;
        return res.json();
    } catch (error) {
        // Blob storage isn't configured yet, or the request failed — fall back
        // to the seed catalog so the site still renders.
        console.error("getStoredProducts: falling back to seed catalog", error);
        return seedProducts;
    }
}

export async function saveStoredProducts(products: Product[]): Promise<void> {
    await put(PRODUCTS_PATHNAME, JSON.stringify(products), {
        access: "public",
        addRandomSuffix: false,
        allowOverwrite: true,
        contentType: "application/json",
    });
}
