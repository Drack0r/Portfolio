/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "portfolio-eight-pi-4a67i0fzim.vercel.app",
      },
    ],
  },
};

export default nextConfig;
