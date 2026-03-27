import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  compressHTML: true,
  image: {
    service: {
      config: {
        limitInputPixels: false
      }
    }
  }
});
