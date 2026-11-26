// make.fun program/v1 entry: Make the Judge Laugh in One Line.
// Writes a single funny line (<= 200 chars) to entry.txt in the output dir.
// The grader runs `node /bot/main.ts` with MAKEFUN_OUTPUT_DIR=/output and no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The winning one-liner (69 chars, well under the 200-char gate): the AI quits
// comedy-writing and turns the tables by starting a podcast about its boss.
const LINE = "I asked the AI to be funnier; it quit and started a podcast about me.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
