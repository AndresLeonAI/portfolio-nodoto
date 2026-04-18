import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import sitemap from 'vite-plugin-sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  build: {
    sourcemap: true,
    chunkSizeWarningLimit: 1600,
  },
  plugins: [
    tailwindcss(),
    vue(),
    sitemap({
      hostname: 'https://nodoto.agency',
      dynamicRoutes: ['/discovery'],
      changefreq: 'weekly',
      priority: 1,
      generateRobotsTxt: false,
    }),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    // watch: {
    //   usePolling: true,
    //   interval: 1000,
    //   ignored: ['!**/src/**/*.{js,ts,jsx,tsx}'],
    // },
  },
  optimizeDeps: {
    exclude: ['@tailwindcss/vite'],
    force: true,
  },
});
