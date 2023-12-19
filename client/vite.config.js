import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
import jsconfigPaths from "vite-jsconfig-paths";
import { fileURLToPath } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), jsconfigPaths()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(
          fileURLToPath(new URL(".", import.meta.url)),
          "src"
        ),
      },
    ],
  },
});
