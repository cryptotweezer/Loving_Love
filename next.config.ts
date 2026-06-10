import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Dev-only: silences the cross-origin warning when opening the dev server
  // from another device on the LAN (e.g. testing on a phone). Add your
  // machine's LAN IP/hostname here if you do that. Ignored in production.
  // allowedDevOrigins: ["192.168.1.50"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
};

export default nextConfig;
