/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/admin", destination: "/admin/index.html", permanent: false },
    ];
  },
  async rewrites() {
    return [
      { source: "/admin/", destination: "/admin/index.html" },
    ];
  },
};

export default nextConfig;
