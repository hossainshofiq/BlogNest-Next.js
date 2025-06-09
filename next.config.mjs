/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'www.dxomark.com'
        }
    ],
  },
};

export default nextConfig;
