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

  server: {
    host: "localhost",
  },
  // server: {
  //   host: "192.168.1.75",
  // },
  //  server: {
  //   host: "192.168.1.100",
  // },
});
