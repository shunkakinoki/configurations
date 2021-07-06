import type { script } from "shared-scripts";

import { exec } from "./utils";

export const lint: script = {
  run: () => {
    exec(["concurrently", "'yarn:*:lint'"]);
  },
};
