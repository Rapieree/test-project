const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: [`src`], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
    ignoreDuringBuilds: true,
  },
  pageExtensions: [`page.jsx`, `api.js`, `page.tsx`, `api.ts`],
};

module.exports = nextConfig;
