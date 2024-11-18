import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
   const env = loadEnv(mode, process.cwd(), '');

   // Check if the necessary environment variables are set for both dev and prod
   console.log('API_URL:', env.API_URL); // Debugging to check API_URL value
   console.log('PORT:', env.PORT); // Debugging to check PORT value

   return {
      plugins: [react()],
      resolve: {
         alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
      },
      base: '/', // Set base to root for correct asset paths in production
      server: {
         host: true,
         port: env.PORT || 3000, // Default to 3000 if PORT is not set
      },
   };
});
