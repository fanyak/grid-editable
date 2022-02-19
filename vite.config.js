import { defineConfig } from 'vite'

export default defineConfig({
    server: {
      watch: {
        // ignored: ['!**/node_modules/your-package-name/**'],
        usePolling: true,
      },
    },
    // The watched package must be excluded from optimization,
    // so that it can appear in the dependency graph and trigger hot reload.
    optimizeDeps: {
      // exclude: ['your-package-name']
    }
  })
