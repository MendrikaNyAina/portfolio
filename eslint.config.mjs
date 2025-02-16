import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import tailwindcss from "eslint-plugin-tailwindcss";
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      tailwindcss,
    },
    rules: {
      "tailwindcss/classnames-order": "warn", // Vérifie l'ordre des classes
      "tailwindcss/no-custom-classname": "off", // Désactive l'interdiction des classes non Tailwind
    },
    settings: {
      tailwindcss: {
        callees: ["cn", "clsx", "classnames"], // Ajoute les helpers de className si utilisés
      },
    },
  },
];