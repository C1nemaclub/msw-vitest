import { playwright } from '@vitest/browser-playwright';
import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      setupFiles: './tests/setup.ts',
      browser: {
        enabled: true,
        headless: false,
        provider: playwright(),
        instances: [{ browser: 'chromium' }],
      },
    },
  }),
);
