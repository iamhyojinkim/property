/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    domains: [
      "eu-west-2.graphassets.com",
      "m.media-amazon.com",
      "vercel.com",
      "hygraph.com",
      "netlify.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
      {
        protocol: "https",
        hostname: "vercel.com",
      },
      {
        protocol: "https",
        hostname: "hygraph.com",
      },
      {
        protocol: "https",
        hostname: "netlify.com",
      },
      {
        protocol: "https",
        hostname: "eu-west-2.graphassets.com",
      },
    ],
  },
};

export default nextConfig;
