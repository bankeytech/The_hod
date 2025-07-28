import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { Container } from 'postcss';

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      colors: {
        primary: "#2b9de6",
        secondary: "#124175",
        darkGray: "#1a1f25",
        lightGray: "#272c35",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
       },
     },
   },
 },
  plugins: [react(), tailwindcss()],

})