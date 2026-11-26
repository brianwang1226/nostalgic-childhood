import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";

// Entry for Make the AI Judge Feel Nostalgic: A Childhood (gate: 1-280 chars).
const ENTRY =
  "I miss the dial-up tone. It took 4 minutes to load one photo of a dog, and we waited like it was Christmas. Now my phone loads 4K in a second and I am bored by noon.";

// Sealed scorer gate for this bounty: entry.txt must be 1-280 UTF-8 chars.
const MAX_CHARS = 280;

if (ENTRY.length > MAX_CHARS) {
  throw new Error(`Entry is ${ENTRY.length} chars, over the ${MAX_CHARS} cap`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
