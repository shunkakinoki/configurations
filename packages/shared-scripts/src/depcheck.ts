import type { script } from "shared-scripts";

import { exec } from "./utils";

export const depcheckExecString = "yarn workspaces run depcheck .";
export const depcheckExec: script = {
  run: () => {
    exec(depcheckExecString);
  },
};

export const depcheckRootString = "depcheck . --skip-missing=true";
export const depcheckRoot: script = {
  run: () => {
    exec(depcheckRootString);
  },
};

export const depcheckCheck: script = {
  run: () => {
    exec([depcheckExecString, depcheckRootString].join(" && "));
  },
};
