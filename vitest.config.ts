import { defineConfig } from 'vitest/config'
import NuxtVitest from 'vite-plugin-nuxt-test'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [NuxtVitest()],
  test: {
    // Your own configuration
    coverage: {
      reporter: ['text']
    },
    reporters: ['verbose'],
    environment: 'happy-dom'
  }
})
