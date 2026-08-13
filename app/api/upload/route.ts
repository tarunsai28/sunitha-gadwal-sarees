import { NextResponse } from "next/server";
import { put } from "@vercel/blob";
import sharp from "sharp";
import { isAuthenticated } from "@/lib/auth";

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif"];
const MAX_SIZE_BYTES = 5 * 1024 * 1024;

export async function POST(request: Request) {
    if (!(await isAuthenticated())) {
        return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const form = await request.formData();
    const file = form.get("file");

    if (!(file instanceof File)) {
        return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }
    if (!ALLOWED_TYPES.includes(file.type)) {
        return NextResponse.json({ error: "Unsupported file type. Use JPG, PNG, WEBP or GIF." }, { status: 400 });
    }
    if (file.size > MAX_SIZE_BYTES) {
        return NextResponse.json({ error: "File exceeds the 5MB limit." }, { status: 400 });
    }

    let uploadBody: Buffer | File = file;

    // Strip metadata before this becomes a public file — phone photos routinely
    // embed the exact GPS coordinates of where they were taken. sharp() drops
    // all metadata by default; rotate() bakes in the visual orientation first
    // so the photo doesn't end up sideways once that EXIF tag is gone.
    // GIFs don't carry EXIF the same way, so they're left as-is.
    if (file.type !== "image/gif") {
        try {
            const bytes = Buffer.from(await file.arrayBuffer());
            uploadBody = await sharp(bytes).rotate().toBuffer();
        } catch (error) {
            console.error("Failed to process image", error);
            return NextResponse.json(
                { error: "Couldn't process that image. Please try a different file." },
                { status: 400 }
            );
        }
    }

    const ext = file.name.split(".").pop() || "jpg";
    const pathname = `store/products/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;

    try {
        const blob = await put(pathname, uploadBody, {
            access: "public",
            addRandomSuffix: false,
            contentType: file.type,
        });
        return NextResponse.json({ url: blob.url });
    } catch (error) {
        console.error("Failed to upload image", error);
        return NextResponse.json(
            { error: "Upload failed — storage isn't configured yet. Check BLOB_READ_WRITE_TOKEN." },
            { status: 502 }
        );
    }
}
