import type { config } from "shared-scripts";

import { lint } from "./lint";

const scriptsConfig: config = {
  scripts: {
    lint: lint,
  },
};

export default scriptsConfig;
