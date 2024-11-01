/** @type {import('jest').Config} */
const config = {
  testEnvironment: "jsdom",
  collectCoverage: true,
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "src/**/*.ts(x)",
    "!src/app/**",
    "!src/lib/registry.tsx",
    "!src/types/**",
    "!src/styles/**"
  ],
  preset: "ts-jest",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],

  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "babel-jest", // Altere para babel-jest para JSX e TSX
  },

  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],

  moduleNameMapper: {
    "^styled-components":
      "styled-components/dist/styled-components.browser.cjs.js",
  },
};

module.exports = config;
