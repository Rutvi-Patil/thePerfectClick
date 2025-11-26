import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  
  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  trailingSlash: true,
  
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
};

export default nextConfig;
