/// <reference types="vitest" />
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      enabled: true,
      exclude: [
        ".protobuf/**",
        "**/.{eslint,mocha,prettier}rc.{?(c|m)js,yml}",
        "**/[.]**",
        "**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,eslint,prettier}.config.*",
        "**/*.d.ts",
        "**/*{.,-}{test,spec,bench,benchmark}?(-d).?(c|m)[jt]s?(x)",
        "**/coverage/**",
        "**/dist/**",
        "**/node_modules/**",
        "**/test?(-*).?(c|m)[jt]s?(x)",
        "**/test?(s)/**",
        "MAVSDK-Proto/**",
        "protobuf-gen/**",
      ],
      provider: "istanbul",
      reporter: ["text", "json", "html"],
      thresholds: {
        branches: 60,
        functions: 80,
        lines: 75,
        statements: 70,
      },
    },
    environment: "node",
    exclude: ["node_modules"],
    globals: true,
    include: ["**/*.test.js"],
  },
});
