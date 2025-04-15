import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

// Allowing unsplash
module.exports = {
  images: {
    domains: ['images.unsplash.com'], // Add your domain here
  },
}
