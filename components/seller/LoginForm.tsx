"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SellerLoginForm() {
    const router = useRouter();
    const [pin, setPin] = useState("");
    const [error, setError] = useState("");
    const [submitting, setSubmitting] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        setError("");

        try {
            const res = await fetch("/api/seller/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ pin }),
            });

            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                setError(data.error || "Invalid PIN");
                return;
            }

            router.refresh();
        } catch {
            setError("Something went wrong. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-brand-ivory flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl shadow-brand-maroon/5 border border-brand-cream text-center">
                <div className="w-16 h-16 bg-brand-black text-white rounded-full flex items-center justify-center text-3xl font-serif font-bold mx-auto mb-6">
                    S
                </div>
                <h1 className="font-serif text-2xl text-brand-black mb-2">Seller Login</h1>
                <p className="text-gray-500 mb-8">Enter your access PIN to continue</p>

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <input
                            type="password"
                            value={pin}
                            onChange={(e) => setPin(e.target.value)}
                            placeholder="Enter PIN"
                            className="w-full text-center text-2xl tracking-[0.5em] p-4 border border-brand-cream rounded-xl focus:border-brand-maroon focus:outline-none focus:ring-1 focus:ring-brand-maroon transition-all"
                            autoFocus
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
                    <button
                        type="submit"
                        disabled={submitting}
                        className="w-full bg-brand-maroon text-white font-bold uppercase tracking-widest py-4 rounded-xl hover:bg-brand-maroon/90 transition-colors shadow-lg shadow-brand-maroon/20 disabled:opacity-60"
                    >
                        {submitting ? "Checking..." : "Access Dashboard"}
                    </button>
                </form>
            </div>
        </div>
    );
}
