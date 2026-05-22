/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export so the site can be deployed anywhere as plain files.
  // Remove `output: 'export'` if you need ISR or server components with
  // dynamic rendering.
  output: "export",
  images: {
    // next/image requires this when using `output: 'export'`.
    unoptimized: true,
  },
  trailingSlash: false,
  reactStrictMode: true,
};

export default nextConfig;
