import { defineConfig } from 'core/node_modules/@playwright/test';

export default defineConfig({
  timeout: 30000,
  expect: { timeout: 5000 },
  reporter: [['list']],
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    trace: 'on-first-retry',
  },
});
