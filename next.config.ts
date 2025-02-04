import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    experimental: {
        optimizePackageImports: ["@chakra-ui/react"],
    },
    reactStrictMode: false,
    async redirects() {
        return [
            {
                source: "/",
                destination: "/main",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
