import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Forward api requests to the Express backend during development
    proxy: {
      '/api': 'http://localhost:3001'
    }
  }
})
