import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: 'https://maximilianodavini.github.io/app-TalentoTech/',
  base: '/app-TalentoTech/', // asi va para produccion en github pages
})
