/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["search.pstatic.net", "media.themoviedb.org"],
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
