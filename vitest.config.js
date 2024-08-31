/* eslint-disable no-underscore-dangle */
import { defineConfig } from "vitest/config";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(__filename);
const __filename = fileURLToPath(import.meta.url);

export default defineConfig({
  resolve: {
    alias: {
      "@mavlink-ts": path.resolve(__dirname, "./src"),
      "@protobuf-gen": path.resolve(__dirname, "./protobuf-gen"),
    },
  },
  test: {
    globals: true,
  },
});
