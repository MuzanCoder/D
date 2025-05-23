import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  // Add these for better Vercel deployment
  build: {
    outDir: 'dist', // Explicitly set output directory
    emptyOutDir: true, // Clear the directory before build
    sourcemap: process.env.NODE_ENV !== 'production' // Enable sourcemaps in dev
  },
  server: {
    open: true // Optional: open browser on dev server start
  },
  preview: {
    port: 3000 // Preview port for 'vite preview' command
  }
});