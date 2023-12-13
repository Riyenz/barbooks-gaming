import react from '@vitejs/plugin-react-swc';

import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    proxy: {
      '/api': process.env.VITE_BASE_URL + '/api',
    },
  },
});
