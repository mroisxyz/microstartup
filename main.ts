// hello: a tiny pitch can still describe a very real product.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Another batch of commentary, revised once more; the code never budges.
// The orders of operations remain: ensure the folder, then write the file.
// That one slot in the output directory receives the finished entry.txt.
const here = fileURLToPath(new URL('.', import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const pitch = 'A service that renames your 47 open tabs into a neat to-do list, then charges you $5 a month to ignore it.';

void here;
mkdirSync(outputDir, { recursive: true });
const target = join(outputDir, 'entry.txt');
writeFileSync(target, pitch, 'utf8');
console.log(`wrote ${Buffer.byteLength(pitch, 'utf8')} bytes to ${target}`);
