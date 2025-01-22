import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];

/**
 * Below code has been suggested by `ChatGPT` and it looks he has suggested some outdated syntax.
 * 
 * For now i will go with initial settings and will come up with any further observations.
 * 
 * **Keeping below code as backup here, for future reference.**
 * 
*/

// import globals from "globals";
// import jsPlugin from "@eslint/js";
// import tsPlugin from "@typescript-eslint/eslint-plugin";
// import tsParser from "@typescript-eslint/parser";
// import reactPlugin from "eslint-plugin-react";
// import prettierPlugin from "eslint-plugin-prettier";

// /** @type {import('eslint').Linter.FlatConfig[]} */
// export default [
//   {
//     files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], // Ensure coverage for all relevant files
//     languageOptions: {
//       globals: globals.browser,
//       parser: tsParser,
//       parserOptions: {
//         ecmaVersion: "latest",
//         sourceType: "module",
//         ecmaFeatures: { jsx: true },
//         project: "./tsconfig.json", // Ensures TypeScript type checking
//       },
//     },
//     plugins: {
//       "@typescript-eslint": tsPlugin,
//       react: reactPlugin,
//       prettier: prettierPlugin,
//     },
//     settings: {
//       react: {
//         version: "detect", // Automatically detect React version
//       },
//     },
//     rules: {
//       // Core ESLint Rules
//       "no-unused-vars": "off", // Handled by TypeScript
//       "no-undef": "off", // Handled by TypeScript

//       // TypeScript Rules
//       "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
//       "@typescript-eslint/no-explicit-any": "warn",
//       "@typescript-eslint/explicit-function-return-type": "off", // Adjust based on team preference
//       "@typescript-eslint/no-empty-function": "warn",

//       // React Rules
//       "react/react-in-jsx-scope": "off", // Not needed with modern React
//       "react/prop-types": "off", // Not relevant with TypeScript
//       "react/jsx-uses-react": "off", // Deprecated in modern React
//       "react/jsx-uses-vars": "warn",

//       // Prettier Integration
//       "prettier/prettier": "error",
//     },
//   },
//   jsPlugin.configs.recommended,
//   tsPlugin.configs.recommended,
//   tsPlugin.configs["eslint-recommended"], // Provides better compatibility with base rules
//   reactPlugin.configs.flat.recommended,
// ];
