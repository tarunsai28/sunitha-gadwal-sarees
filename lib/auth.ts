import { cookies } from "next/headers";
import crypto from "crypto";

const COOKIE_NAME = "sgsh_seller_session";
const MAX_AGE_SECONDS = 60 * 60 * 8; // 8 hours

function getSecret(): string {
    const secret = process.env.SELLER_SECRET;
    if (!secret) {
        throw new Error("SELLER_SECRET environment variable is not set");
    }
    return secret;
}

function sign(value: string): string {
    return crypto.createHmac("sha256", getSecret()).update(value).digest("hex");
}

function safeEqual(a: string, b: string): boolean {
    const bufA = Buffer.from(a);
    const bufB = Buffer.from(b);
    if (bufA.length !== bufB.length) return false;
    return crypto.timingSafeEqual(bufA, bufB);
}

export async function createSession(): Promise<void> {
    const expires = Date.now() + MAX_AGE_SECONDS * 1000;
    const payload = String(expires);
    const token = `${payload}.${sign(payload)}`;

    const store = await cookies();
    store.set(COOKIE_NAME, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: MAX_AGE_SECONDS,
        path: "/",
    });
}

export async function destroySession(): Promise<void> {
    const store = await cookies();
    store.delete(COOKIE_NAME);
}

export async function isAuthenticated(): Promise<boolean> {
    const store = await cookies();
    const token = store.get(COOKIE_NAME)?.value;
    if (!token) return false;

    const [payload, signature] = token.split(".");
    if (!payload || !signature) return false;
    if (!safeEqual(sign(payload), signature)) return false;
    if (Date.now() > Number(payload)) return false;

    return true;
}

export function verifyPin(candidate: string): boolean {
    const expected = process.env.SELLER_PIN;
    if (!expected) return false;
    return safeEqual(candidate, expected);
}
