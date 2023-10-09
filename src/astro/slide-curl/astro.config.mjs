import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
    build: {
      rollupOptions: {
        output: {
          entryFileNames: `assets/scripts/[name].js`,
          chunkFileNames: `assets/scripts/[name].js`,
          assetFileNames: asset => {
            if (/\.css$/.test(asset.name ?? '')) {
              return 'assets/styles/global.css';
            } else if (/\.(jpe?g|png|svg)$/.test(asset.name)) {
              return 'assets/images/[name].[ext]';
            }
            return 'assets/[name].[ext]';
          }
        }
      }
    }
  },
  integrations: [react()]
});
