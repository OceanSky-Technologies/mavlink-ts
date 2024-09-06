/* eslint-disable no-underscore-dangle */
import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    globals: true,
    exclude: ["node_modules"],
    coverage: {
      provider: "istanbul",
      reporter: ["text", "json", "html"],
      enabled: true,
      exclude: [
        "**/__tests__/**",
        "**/__x00__*",
        "**/.{eslint,mocha,prettier}rc.{?(c|m)js,yml}",
        "**/[.]**",
        "**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,eslint,prettier}.config.*",
        "**/*.d.ts",
        "**/*{.,-}{test,spec,bench,benchmark}?(-d).?(c|m)[jt]s?(x)",
        "**/\x00*",
        "**/coverage/**",
        "**/cypress/**",
        "**/dev-dist/**",
        "**/dist/**",
        "**/forge.config.js",
        "**/node_modules/**",
        "**/packages/*/test?(s)/**",
        "**/postcss.config.js",
        "**/presets/*",
        "**/tailwind.config.js",
        "**/test?(-*).?(c|m)[jt]s?(x)",
        "**/test?(s)/**",
        "**/virtual:*",
        "**/vitest.{workspace,projects}.[jt]s?(on)",
        "protobuf-gen/**",
        "examples/**",
      ],
      thresholds: {
        lines: 100,
        functions: 100,
        branches: 100,
        statements: 100,
      },
    },
  },
});
