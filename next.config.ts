import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'flowbite.s3.amazonaws.com',
        port: '',
        pathname: '/blocks/marketing-ui/hero/**',
      },
      {
        protocol: 'https',
        hostname: 'flowbite.s3.amazonaws.com',
        port: '',
        pathname: '/blocks/marketing-ui/cta/**',
      },
      {
        protocol: 'https',
        hostname: 'd33wubrfki0l68.cloudfront.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'pagedone.io',
        port: '',
        pathname: '/asset/uploads/**',
      },


    ],
  }
};

export default nextConfig;
