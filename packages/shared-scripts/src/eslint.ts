import type { script } from "shared-scripts";

import { exec } from "./utils";

export const eslintString =
  "eslint --config .eslintrc.js --ext .js,.ts,.tsx --cache --cache-location node_modules/.cache/eslint";

export const eslintLintString: string = eslintString + " .";
export const eslintLint: script = {
  run: () => {
    exec(eslintLintString);
  },
};

export const eslintFixString: string = eslintString + " --fix .";
export const eslintFix: script = {
  run: () => {
    exec(eslintFixString);
  },
};
