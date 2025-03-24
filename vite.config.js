import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  build: {
    minify: false,
    commonjsOptions: {
      include: [/node_modules/],
    },
    rollupOptions: {
      output: {
        manualChunks: {
          gsap: ['gsap'],
        }
      }
    },
    sourcemap: true,
    css: {
      devSourcemap: true,
    }
  },
  optimizeDeps: {
    include: ['gsap', 'swiper'],
  },
  assetsInclude: ['**/*.gltf', '**/*.glb'],
  plugins: [react()],
})
