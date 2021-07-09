import type { script } from "shared-scripts";

import { eslintLintString, eslintFix } from "./eslint";
import { prettierLintString, prettierFix } from "./prettier";
import { exec } from "./utils";

export const lintString = `concurrently ${eslintLintString} ${prettierLintString}`;
export const lint: script = {
  run: () => {
    exec(lintString);
  },
};

export const fix: script = {
  run: () => {
    exec("concurrently 'yarn:*:fix'");
  },
};
