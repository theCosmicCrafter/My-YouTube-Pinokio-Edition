import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: true,
    allowedHosts: [
      'dtc-1r',
      'localhost',
      '127.0.0.1',
      '0.0.0.0'
    ]
  }
})
