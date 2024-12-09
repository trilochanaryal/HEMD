const nextConfig = {
  output: "export" as const,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  pageExtensions: ["js", "jsx", "ts", "tsx"],
};

export default nextConfig;