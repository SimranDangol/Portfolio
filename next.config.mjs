/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/:section(experience|projects|skills|education|contact)",
        destination: "/",
      },
    ];
  },
};

export default nextConfig;
