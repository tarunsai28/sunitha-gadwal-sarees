import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  // Lets the dev server be reached through a tunnel (e.g. localtunnel) for
  // mobile preview testing. Only affects `next dev` - has no effect on the
  // production build.
  allowedDevOrigins: ["*.loca.lt"],
  images: {
    // Next 16 defaults to serving only quality=75. The logo mark is fine
    // detail shrunk to header/footer size, so it needs a higher quality
    // to stay crisp instead of being coerced down to 75.
    qualities: [75, 95],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
