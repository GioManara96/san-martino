import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/san-martino/",
  plugins: [react()],
  // se si usa WSL2
  server:{
    watch:{
      usePolling:true
    }
  }
})
