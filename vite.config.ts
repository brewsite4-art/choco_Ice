import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import viteCompression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    // Compression gzip (supporté par tous les navigateurs)
    viteCompression({
      algorithm: "gzip",
      ext: ".gz",
      threshold: 1024, // Compresser les fichiers > 1KB
    }),
    // Compression brotli (plus performant, supporté par les navigateurs modernes)
    viteCompression({
      algorithm: "brotliCompress",
      ext: ".br",
      threshold: 1024,
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Optimisation du bundle : sépare les dépendances lourdes en chunks séparés
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          animations: ["framer-motion"],
        },
      },
    },
    // Avertir si un chunk dépasse 500KB
    chunkSizeWarningLimit: 500,
  },
}));
