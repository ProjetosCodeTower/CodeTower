/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'media2.dev.to',
            },
            {
                protocol: 'https',
                hostname: 'sa-east-1.graphassets.com',
            },
        ],
    },
};

module.exports = nextConfig;