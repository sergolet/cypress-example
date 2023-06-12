import { defineConfig } from "cypress";

export default defineConfig({
  video: false,
  videosFolder: './videos',
  screenshotsFolder: './screenshots',
  chromeWebSecurity: false,
  videoUploadOnPasses: false,
  viewportHeight: 1080,
  viewportWidth: 1920,
  defaultCommandTimeout: 10000,
  responseTimeout: 30000,
  retries: {
    runMode: 1,
    openMode: 0,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://google.com',
    specPattern: './cypress/tests/**/*.spec.ts',
  },
});
