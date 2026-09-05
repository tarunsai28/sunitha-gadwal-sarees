import { put, list } from "@vercel/blob";
import { products as seedProducts, Product } from "@/data/products";
import { blogPosts as seedBlogPosts, BlogPost } from "@/data/blogPosts";

const PRODUCTS_PATHNAME = "store/products.json";
const BLOG_POSTS_PATHNAME = "store/blog-posts.json";

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

export async function getStoredBlogPosts(): Promise<BlogPost[]> {
    try {
        const { blobs } = await list({ prefix: BLOG_POSTS_PATHNAME, limit: 1 });
        const match = blobs.find((b) => b.pathname === BLOG_POSTS_PATHNAME);
        if (!match) return seedBlogPosts;

        const res = await fetch(match.url, { cache: "no-store" });
        if (!res.ok) return seedBlogPosts;
        return res.json();
    } catch (error) {
        console.error("getStoredBlogPosts: falling back to seed posts", error);
        return seedBlogPosts;
    }
}

export async function saveStoredBlogPosts(posts: BlogPost[]): Promise<void> {
    await put(BLOG_POSTS_PATHNAME, JSON.stringify(posts), {
        access: "public",
        addRandomSuffix: false,
        allowOverwrite: true,
        contentType: "application/json",
    });
}
