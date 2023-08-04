import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from "vite-plugin-svgr";


// https://vitejs.dev/config/
export default defineConfig({
  // base: "/phoenix24-2.github.io",
  plugins: [svgr(), react()],
})
