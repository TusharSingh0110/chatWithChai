import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Frontend will run on port 3000
    proxy: {
      "/api": {
        target: "https://your-backend-service.onrender.com", // Replace with your actual backend URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
