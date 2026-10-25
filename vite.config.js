import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  // Uncomment for custom base path
  // base: '/your-project/',

  // Optimize build
  // The SSR build (used only for prerendering) leaves dependencies external,
  // so vendor chunk splitting applies to the client build only.
  build: {
    rollupOptions: {
      output: isSsrBuild ? {} : {
        manualChunks: {
          // Split vendor code for better caching
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['@headlessui/react', '@heroicons/react'],
        },
      },
    },
  },

  // Development server configuration
  server: {
    port: 5173,
    open: true,
  },
}))
