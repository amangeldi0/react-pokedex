import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@types': path.resolve(__dirname, './src/@types'),
      '@hooks': path.resolve(__dirname, './src/utils/hooks'),
      '@helpers': path.resolve(__dirname, './src/utils/helpers'),
      '@constants': path.resolve(__dirname, './src/utils/constants'),
      '@firebaseApp': path.resolve(__dirname, './src/utils/firebase'),
    }
  }
});
