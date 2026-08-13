import { NextResponse } from "next/server";
import { createSession, verifyPin } from "@/lib/auth";

export async function POST(request: Request) {
    const { pin } = (await request.json()) as { pin?: string };

    if (!process.env.SELLER_PIN) {
        return NextResponse.json(
            { error: "Seller login isn't configured yet. Set SELLER_PIN and SELLER_SECRET." },
            { status: 500 }
        );
    }

    if (!pin || !verifyPin(pin)) {
        // Slow down scripted PIN-guessing. Not a substitute for a long PIN,
        // but it turns a 10,000-guess brute force from seconds into hours.
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return NextResponse.json({ error: "Invalid PIN" }, { status: 401 });
    }

    await createSession();
    return NextResponse.json({ ok: true });
}
