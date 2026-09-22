import type { KnipConfig } from "knip";

const config: KnipConfig = {
  // Aktuality are MDX, which knip can't parse on its own. This used to be
  // handled by ignoring content/aktuality/*.mdx — which made every Event*.tsx
  // component those files import look like an unused file. Compiling each MDX
  // down to its import statements is enough for knip to follow the graph.
  entry: ["content/aktuality/*.mdx"],
  compilers: {
    mdx: (text: string) =>
      text
        .split("\n")
        .filter((line) => line.startsWith("import "))
        .join("\n"),
  },
  ignore: [
    // Pre-launch password gate. Unwired by "feat: remove password protection,
    // go live" but kept in case the site ever needs a closed preview again.
    "src/components/PasswordProtection.tsx",
    // Frontmatter parser from the starter template. Superseded by
    // src/lib/aktuality.ts, which reads `export const metadata` instead.
    "src/lib/mdx-utils.ts",
  ],
};

export default config;
