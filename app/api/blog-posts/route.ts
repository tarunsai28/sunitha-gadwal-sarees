import { NextResponse } from "next/server";
import { getStoredBlogPosts, saveStoredBlogPosts } from "@/lib/blob-store";
import { isAuthenticated } from "@/lib/auth";
import { BlogPost } from "@/data/blogPosts";

export const dynamic = "force-dynamic";

function slugify(title: string): string {
    return title
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
}

export async function GET() {
    const posts = await getStoredBlogPosts();
    return NextResponse.json(posts);
}

type MutationBody =
    | { action: "add"; post: BlogPost }
    | { action: "update"; post: BlogPost }
    | { action: "delete"; id: string };

export async function POST(request: Request) {
    if (!(await isAuthenticated())) {
        return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const body = (await request.json()) as MutationBody;
    const current = await getStoredBlogPosts();
    let next: BlogPost[];

    if (body.action === "add") {
        const slug = body.post.slug?.trim() || slugify(body.post.title);
        if (current.some((p) => p.slug === slug)) {
            return NextResponse.json({ error: "A post with that URL slug already exists." }, { status: 400 });
        }
        const post: BlogPost = {
            ...body.post,
            id: body.post.id || Date.now().toString(),
            slug,
            publishedAt: body.post.publishedAt || new Date().toISOString().slice(0, 10),
        };
        next = [post, ...current];
    } else if (body.action === "update") {
        const slug = body.post.slug?.trim() || slugify(body.post.title);
        if (current.some((p) => p.slug === slug && p.id !== body.post.id)) {
            return NextResponse.json({ error: "A post with that URL slug already exists." }, { status: 400 });
        }
        next = current.map((p) => (p.id === body.post.id ? { ...body.post, slug } : p));
    } else if (body.action === "delete") {
        next = current.filter((p) => p.id !== body.id);
    } else {
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    try {
        await saveStoredBlogPosts(next);
    } catch (error) {
        console.error("Failed to save blog posts", error);
        return NextResponse.json(
            { error: "Couldn't save — storage isn't configured yet. Check BLOB_READ_WRITE_TOKEN." },
            { status: 502 }
        );
    }

    return NextResponse.json(next);
}
