/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "search.pstatic.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media.themoviedb.org",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
