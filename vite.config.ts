import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      devOptions: {
        enabled: true, // 允许在 npm run dev 的时候测试 PWA
      },
      manifest: {
        name: 'couple-flight-chess',
        short_name: 'couple-flight-chess',
        description: 'Interactive couple game to spice up your relationship',
        theme_color: '#f43f5e',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: 'icon.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icon.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  server: {
    host: '0.0.0.0',
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
