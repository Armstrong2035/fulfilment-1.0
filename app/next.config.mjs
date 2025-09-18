/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ["@shopify/polaris"],
  output: "standalone",
  trailingSlash: false,
};

export default nextConfig;
