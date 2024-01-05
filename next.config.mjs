import './src/env/client.mjs';
import './src/env/server.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { remotePatterns: [{ hostname: 'cdn.sanity.io' }] },
};

export default nextConfig;
