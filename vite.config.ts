import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'pdf-assets',
      load(id) {
        if (id.endsWith('.pdf')) {
          return `export default new URL('${id}', import.meta.url).href`;
        }
      }
    }
  ],
  server: {
    port: 3000,
  },
});
