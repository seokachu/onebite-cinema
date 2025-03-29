/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["media.themoviedb.org", "search.pstatic.net"],
  },
};

export default nextConfig;
