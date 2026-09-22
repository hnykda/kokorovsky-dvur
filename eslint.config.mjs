import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import unusedImports from "eslint-plugin-unused-imports";

// eslint-config-next 16 ships flat configs, so these are spread directly —
// FlatCompat.extends() on them throws "Converting circular structure to JSON".
const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    plugins: {
      "unused-imports": unusedImports,
    },
    rules: {
      "no-unused-vars": "off",
      "react/no-unescaped-entities": "off",
      "react-hooks/exhaustive-deps": "error",
      // New in eslint-plugin-react-hooks 7. Nav, UpcomingEvents and
      // PasswordProtection all set state from an effect on purpose: this is a
      // static export, so "now" and localStorage only exist after mount and
      // reading them during render would desync the prerendered HTML. Warn
      // rather than error until those three are moved to useSyncExternalStore.
      "react-hooks/set-state-in-effect": "warn",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "unused-imports/no-unused-imports": "warn",
      "unused-imports/no-unused-vars": [
        "error",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
  },
  eslintPluginPrettierRecommended,
];

export default eslintConfig;
