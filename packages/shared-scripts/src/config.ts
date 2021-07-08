import type { config } from "shared-scripts";

import { fix, lint } from "./concurrently";
import { eslintLint, eslintFix } from "./eslint";
import { prettierLint, prettierFix } from "./prettier";

const scriptsConfig: config = {
  scripts: {
    "eslint:lint": eslintLint,
    "eslint:fix": eslintFix,
    "prettier:lint": prettierLint,
    "prettier:fix": prettierFix,
    fix: fix,
    lint: lint,
  },
};

export default scriptsConfig;
