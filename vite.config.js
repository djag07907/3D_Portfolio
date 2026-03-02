import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { compression } from "vite-plugin-compression2";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: "brotli",
      exclude: [/\.(br)$/, /\.(gz)$/],
      threshold: 1024,
    }),
    compression({
      algorithm: "gzip",
      exclude: [/\.(br)$/, /\.(gz)$/],
      threshold: 1024,
    }),
  ],
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        // Suppress "eval" warnings from lottie-web
        if (warning.code === "EVAL" && warning.id?.includes("lottie-web")) {
          return;
        }
        warn(warning);
      },
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            // Put all three related in one chunk, but DON'T split react
            if (id.includes("three") || id.includes("@react-three")) {
              return "three-bundle";
            }
            if (id.includes("framer-motion")) {
              return "framer-motion";
            }
            // Let Vite handle React and other vendors in the main index chunk for stability
          }
        },
      },
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 2000,
    // Enable minification
    minify: "esbuild",
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Assets inline limit
    assetsInlineLimit: 4096,
  },
  // Optimize deps
  optimizeDeps: {
    include: ["react", "react-dom", "three", "framer-motion"],
    exclude: [],
  },
});
