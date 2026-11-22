import type { NextConfig } from "next";

/**
 * Security headers on every page: no framing by other sites, no plugins, no
 * hijacked <base>, forms only to this site. Script restrictions need
 * per-request nonces and are left for their own change.
 */
const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: "frame-ancestors 'none'; object-src 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests",
  },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Images are served as they are. Deployed as Vercel services, the site's
  // /_next/image optimiser answered 404, so the logo never loaded; the only
  // image is a 60 KB logo, which needs no resizing service.
  images: { unoptimized: true },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
