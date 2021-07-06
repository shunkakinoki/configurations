import process from "process";

import { sync } from "cross-spawn";

export function exec(args: string[]): void {
  const child = sync("yarn", args);

  process.stdout.write(child.stdout);
  process.stderr.write(child.stderr);

  if (child.status) {
    process.exit(1);
  }
}
