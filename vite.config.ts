import react from "@vitejs/plugin-react";
import path from "path";
import { AliasOptions, defineConfig } from "vite";
const root = path.resolve(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": root,
    } as AliasOptions,
  },
// <<<<<<< HEAD
//   server: {
//     host: "localhost",
//   },
// =======
//   // server: {
//   //   host: "192.168.1.75",
//   // },
// >>>>>>> c9de0b356b91e7fcb087fb4c7397d2e80ecdc8fc
// });
