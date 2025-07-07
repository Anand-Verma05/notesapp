import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/notesapp/', // 👈 MUST match your GitHub repo name exactly
  plugins: [
    react(),           // 👈 Needed for React support
    tailwindcss(),     // 👈 Tailwind support
  ],
})
