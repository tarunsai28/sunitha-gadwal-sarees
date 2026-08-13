import { NextResponse } from "next/server";
import { getStoredProducts, saveStoredProducts } from "@/lib/blob-store";
import { isAuthenticated } from "@/lib/auth";
import { Product } from "@/data/products";

export const dynamic = "force-dynamic";

export async function GET() {
    const products = await getStoredProducts();
    return NextResponse.json(products);
}

type MutationBody =
    | { action: "add"; product: Product }
    | { action: "update"; product: Product }
    | { action: "delete"; id: string };

export async function POST(request: Request) {
    if (!(await isAuthenticated())) {
        return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const body = (await request.json()) as MutationBody;
    const current = await getStoredProducts();
    let next: Product[];

    if (body.action === "add") {
        const product: Product = { ...body.product, id: body.product.id || Date.now().toString() };
        next = [product, ...current];
    } else if (body.action === "update") {
        next = current.map((p) => (p.id === body.product.id ? body.product : p));
    } else if (body.action === "delete") {
        next = current.filter((p) => p.id !== body.id);
    } else {
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    try {
        await saveStoredProducts(next);
    } catch (error) {
        console.error("Failed to save products", error);
        return NextResponse.json(
            { error: "Couldn't save — storage isn't configured yet. Check BLOB_READ_WRITE_TOKEN." },
            { status: 502 }
        );
    }

    return NextResponse.json(next);
}
