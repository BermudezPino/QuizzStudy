import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: [path.resolve(root, 'src/setupTests.js')],
    css: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(root, 'src'),
      '@components': path.resolve(root, 'src/components'),
      '@context': path.resolve(root, 'src/context'),
      '@services': path.resolve(root, 'src/services'),
      '@utils': path.resolve(root, 'src/utils'),
      '@hooks': path.resolve(root, 'src/hooks'),
      '@pages': path.resolve(root, 'src/pages'),
      '@styles': path.resolve(root, 'src/styles'),
      '@data': path.resolve(root, 'src/data'),
    },
  },
});
