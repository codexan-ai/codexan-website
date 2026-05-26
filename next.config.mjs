/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Fully static export — no Next.js runtime needed on Netlify.
  // Every route in this site is prerendered, so we get the simplest,
  // fastest possible deploy: pure static HTML/JS/CSS served from a CDN.
  output: "export",
  // next/image optimization requires a server; disable it for static export.
  images: { unoptimized: true },
  // Emits /admin/index.html, /thanks/index.html etc. so the static host
  // can serve them at /admin and /thanks without rewrites.
  trailingSlash: true,
};

export default nextConfig;
