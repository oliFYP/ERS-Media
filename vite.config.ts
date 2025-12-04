import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // or svelte/vue if you use them

export default defineConfig({
  plugins: [react()],
  base: "/ERS-Media/",
});
