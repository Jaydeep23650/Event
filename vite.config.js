import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: "/Event-management/", // Use your GitHub repository name
  plugins: [react()],
});
