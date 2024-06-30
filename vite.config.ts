import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:
    'https://hannah-robinson.github.io/hitchhikers-guide-random-quote-machine/',
})
