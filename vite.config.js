import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/newsletter-sign-up-with-success-message-main/",
  plugins: [react()],
})
