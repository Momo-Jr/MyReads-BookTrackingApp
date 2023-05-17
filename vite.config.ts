import react from '@vitejs/plugin-react';
import { InlineConfig, UserConfig, defineConfig } from 'vite';

interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./setupTest.ts'],
  },
} as VitestConfigExport);
