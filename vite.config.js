import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: "true",
    setupFiles: "/Users/albertolarochelle/Desktop/Epicode/Progetti/Epicode-W10D4/src/tests/setup.js"
  }
});
