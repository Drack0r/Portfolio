import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import importPlugin from "eslint-plugin-import";
import simpleImportSort from "eslint-plugin-simple-import-sort";

const eslintConfig = defineConfig([
  ...nextVitals,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "simple-import-sort": simpleImportSort,
      import: importPlugin,
    },
    rules: {
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            // Node.js builtins prefixed with `node:`.
            ["^node:"],
            // Packages. Things that start with a letter (or digit or underscore), or `@` followed by a letter.
            ["^@?\\w"],
            // React and Next.js imports
            ["^(react|next)(/.*)?$"],
            // Internal packages (adjust the pattern to match your project structure)
            ["^@/"],
            // Side effect imports.
            ["^\\u0000"],
            // Parent imports. Put `..` last.
            ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
            // Other relative imports. Put same-folder imports and `.` last.
            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
            // Style imports (CSS, SCSS, etc.)
            ["^.+\\.(css|scss|sass|less|styl)$"],
          ],
        },
      ],
      "simple-import-sort/exports": [
        "error",
        {
          groups: [
            // Named exports
            ["^(?!.*default).*$"],
            // Default exports
            ["^.*default.*$"],
          ],
        },
      ],
      "simple-import-sort/exports": "error",
      "import/first": "error",
      "import/newline-after-import": "error",
      "import/no-duplicates": "error",
      "import/order": "off",
    },
  },
]);

export default eslintConfig;
