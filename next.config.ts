import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,

  images: {
    imageSizes: [16, 32, 48, 64, 96, 128],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self "https://www.google.com" "https://maps.google.com" "https://*.googleapis.com")',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google.com https://maps.google.com https://*.googleapis.com https://*.google.com https://*.gstatic.com https://www.googletagmanager.com https://*.googletagmanager.com https://link.msgsndr.com https://widgets.leadconnectorhq.com https://api.leadconnectorhq.com https://services.leadconnectorhq.com https://stcdn.leadconnectorhq.com https://cdn.socket.io",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.bunny.net https://www.google.com https://*.google.com https://*.gstatic.com https://link.msgsndr.com https://widgets.leadconnectorhq.com https://services.leadconnectorhq.com https://stcdn.leadconnectorhq.com",
              "img-src 'self' data: https: blob: https://*.google.com https://*.gstatic.com https://*.googleapis.com https://widgets.leadconnectorhq.com https://api.leadconnectorhq.com https://services.leadconnectorhq.com https://stcdn.leadconnectorhq.com",
              "connect-src 'self' wss: https://www.google.com https://maps.google.com https://*.googleapis.com https://*.google.com https://*.gstatic.com https://www.googletagmanager.com https://*.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://api.leadconnectorhq.com https://widgets.leadconnectorhq.com https://link.msgsndr.com https://services.msgsndr.com https://services.leadconnectorhq.com https://stcdn.leadconnectorhq.com https://cdn.socket.io https://server-side-tagging-5ip45j4adq-uc.a.run.app",
              "font-src 'self' https://fonts.gstatic.com https://fonts.bunny.net https://*.google.com https://stcdn.leadconnectorhq.com",
              "frame-src 'self' https: data: https://api.leadconnectorhq.com https://widgets.leadconnectorhq.com https://services.leadconnectorhq.com"
            ].join('; ')
          },
        ],
      },
    ];
  },
};

export default nextConfig;
