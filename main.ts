// news-image-20261117 — v1 entry (Node 22, standard library only).
// The finished front page for Tuesday 17 November 2026 lives in this
// repository as entry.png; this program places a copy at /output/entry.png.
// It runs twice with byte-identical output: a plain file copy, no clock,
// no network, no randomness.

import { fileURLToPath } from "node:url";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const targetPath = join(targetDir, "entry.png");

mkdirSync(targetDir, { recursive: true });
writeFileSync(targetPath, readFileSync(source));
