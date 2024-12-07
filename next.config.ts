import createMDX from '@next/mdx';

const withMDX = createMDX();

const nextConfig = {
  output: "export" as const,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

export default withMDX(nextConfig);