/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel deploys Next.js apps as fully-managed Next.js (server + static
  // chunks). `output: 'export'` is intentionally NOT set — it produces a
  // static /out folder that Vercel routes incorrectly, causing 404s.
  //
  // If you ever need a portable static build for another host (S3, Netlify
  // static, GitHub Pages), add `output: 'export'` back AND set
  // `images.unoptimized = true`.
  reactStrictMode: true,
};

export default nextConfig;
