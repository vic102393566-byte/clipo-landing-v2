import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // './' deixa o build funcionar em qualquer pasta ou subdomínio.
  base: './',
  server: { host: '0.0.0.0', port: 3000, allowedHosts: true },
});
