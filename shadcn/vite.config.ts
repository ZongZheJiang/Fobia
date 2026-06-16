// vite.config.ts

import { defineConfig } from 'vite'

import { vercelPreset } from '@vercel/react-router/vite';

import { reactRouter } from "@react-router/dev/vite"
import path from "path"
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [reactRouter(), tailwindcss(), vercelPreset()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./app"),
    },
  },
})
