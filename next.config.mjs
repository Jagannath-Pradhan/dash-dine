/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: ['images.unsplash.com'],
    // Add your API domain when ready:
    // domains: ['images.unsplash.com', 'your-api-domain.com'],
  },
};

export default nextConfig;