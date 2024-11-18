import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
   const env = loadEnv(mode, process.cwd(), '');
   return {
      plugins: [react()],
      resolve: {
         alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
      },
      base: '/', // Set base to root for correct asset paths in production
      server: {
         host: true,
         port: env.PORT,
         proxy:
            env.NODE_ENV === 'development'
               ? {
                    '/api': {
                       target: 'https://jobposter-api.onrender.com',
                       changeOrigin: true, // Adjust the origin of the host header to the target
                       rewrite: (path) => path.replace(/^\/api/, '/api'), // Ensure the /api path is preserved
                    },
                 }
               : {
                    '/api': {
                       target: 'https://jobposter-api.onrender.com', // Your JSON server port in local dev
                       changeOrigin: true,
                       rewrite: function (path) {
                          return path.replace(/^\/api/, '/api');
                       },
                    },
                 }, // No proxy in production, as everything runs on the same domain
      },
   };
});
