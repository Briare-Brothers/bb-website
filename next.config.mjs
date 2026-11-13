/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  transpilePackages: ['three'],
  images: {
    unoptimized: true,
  },
  // Gangsters Paradise moved from /gangstersparadise to /gangsters-paradise, and app
  // builds up to version code 5 link to the old URLs, so they redirect to the new ones.
  // `next dev` applies this rule itself; the production build is a static export,
  // where Netlify applies the same rule from public/_redirects.
  async redirects() {
    return [
      {
        source: '/gangstersparadise/:path*',
        destination: '/gangsters-paradise/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
