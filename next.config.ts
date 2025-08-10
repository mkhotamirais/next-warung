import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        // port: "",
        // pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ibptdmtsqmv84lph.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
