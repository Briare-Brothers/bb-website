/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  transpilePackages: ['three'],
  images: {
    unoptimized: true,
  },
  // The Android app links to the un-hyphenated /gangstersparadise URLs, so the
  // hyphenated spelling redirects there. `next dev` applies this rule itself; the
  // production build is a static export, where Netlify applies the same rule from
  // public/_redirects.
  async redirects() {
    return [
      {
        source: '/gangsters-paradise/:path*',
        destination: '/gangstersparadise/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
