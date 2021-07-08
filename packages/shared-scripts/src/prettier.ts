import type { script } from "shared-scripts";

import { exec } from "./utils";

export const prettierString = "prettier --ignore-unknown";

export const prettierLintString: string = prettierString + "  --check .";
export const prettierLint: script = {
  run: () => {
    exec(prettierLintString);
  },
};

export const prettierFixString: string = prettierString + " --write .";
export const prettierFix: script = {
  run: () => {
    exec(prettierFixString);
  },
};
