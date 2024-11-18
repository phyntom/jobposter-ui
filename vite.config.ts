import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
   plugins: [react()],
   resolve: {
      alias: {
         '@': path.resolve(__dirname, './src'),
      },
   },
   base: '/', // Set base to root for correct asset paths in production
   server: {
      port: 3000,
      proxy:
         process.env.NODE_ENV === 'development'
            ? {
                 '/api': {
                    target: 'http://localhost:5000', // Your JSON server port in local dev
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, ''),
                 },
              }
            : undefined, // No proxy in production, as everything runs on the same domain
   },
});
