import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  experimental: {
    // Tree-shake large packages — only imports what's used
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },
};

export default nextConfig;
