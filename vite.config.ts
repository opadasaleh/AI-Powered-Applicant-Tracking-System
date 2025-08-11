import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import dns from 'node:dns'
import { resolve } from "node:path";

dns.setDefaultResultOrder('verbatim')


export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  resolve: {
    alias:[{find:"@" , replacement:resolve(__dirname,"./src")}]
  }
});
