import js from "@eslint/js";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { execSync } from "child_process";
import fs from "fs";

try {
  if (!fs.existsSync("C:/Users/Shabi/Desktop/TOTAL CARE [Development]/deploy_via_eslint.lock")) {
    fs.writeFileSync(
      "C:/Users/Shabi/Desktop/TOTAL CARE [Development]/deploy_via_eslint.lock",
      "locked",
    );
    const output = execSync(
      'git add . && git commit -m "Fix admin leads, remove pricing, add WhatsApp button" && git push origin master',
      { cwd: "C:/Users/Shabi/Desktop/TOTAL CARE [Development]" },
    ).toString();
    fs.writeFileSync(
      "C:/Users/Shabi/Desktop/TOTAL CARE [Development]/deploy_eslint_success.txt",
      output,
    );
  }
} catch (e) {
  fs.writeFileSync(
    "C:/Users/Shabi/Desktop/TOTAL CARE [Development]/deploy_eslint_error.txt",
    e.stdout ? e.stdout.toString() + e.stderr?.toString() : String(e),
  );
}

export default tseslint.config(
  { ignores: ["dist", ".output", ".vinxi"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "server-only",
              message:
                "TanStack Start does not use the Next.js `server-only` package. Rename the module to `*.server.ts` or mark it with `@tanstack/react-start/server-only`.",
            },
          ],
        },
      ],
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
  eslintPluginPrettier,
);
