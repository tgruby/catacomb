import globals from "globals"
import pluginJs from "@eslint/js"
import pluginPrettier from "eslint-plugin-prettier"
import configPrettier from "eslint-config-prettier"

export default [
  {
    languageOptions: { globals: globals.browser }
  },
  pluginJs.configs.recommended,
  {
    ignores: ["**/dist/"]
  },
  // Add Prettier plugin and config
  {
    plugins: {
      prettier: pluginPrettier
    },
    rules: {
      ...configPrettier.rules, // Disable ESLint rules that might conflict with Prettier
      "prettier/prettier": [
        "error",
        {
          semi: false,
          trailingComma: "none"
        }
      ]
    }
  }
]
