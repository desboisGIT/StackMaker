import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    // Enable Brotli compression for better performance
    compression({
      algorithm: 'brotliCompress', // Use Brotli for better compression
      ext: '.br', // Append .br to compressed files
      threshold: 1024, // Only compress files larger than 1 KB
    }),
    // Visualizer plugin for analyzing bundle sizes
    visualizer({
      filename: './dist/bundle-analysis.html', // Output file for bundle analysis
      open: true, // Automatically open the analysis file in the browser
    }),
  ],
  build: {
    // Optimize JavaScript minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log statements
        drop_debugger: true, // Remove debugger statements
      },
      format: {
        comments: false, // Remove comments in production
      },
    },
    // Enable manual code splitting for better performance
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'], // Separate React and ReactDOM into their own chunk
        },
      },
    },
    // Generate smaller files with gzip in addition to Brotli
    assetsInlineLimit: 0, // Ensure all assets are served as files, not inlined
  },
  server: {
    // Ensure hot module replacement and local performance
    port: 3000,
    open: true, // Automatically open the app in the browser
  },
});
