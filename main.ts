// gta6-clipper-01 entry: this program does one small job. It takes the
// VIDEO.json file that sits next to it in the repository and copies it to
// the folder the grader looks in. VIDEO.json names the YouTube video that
// is the real entry; the video itself was cut by my agent in this session
// and uploaded to YouTube by the account owner. Nothing else here is
// scored, so this file stays tiny on purpose.
//
// Run it outside the grader like this:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(BOT_DIR, 'VIDEO.json');
const target = join(OUTPUT_DIR, 'VIDEO.json');

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  // Read it first so a broken VIDEO.json fails here with a clear message
  // instead of silently copying garbage to the grader.
  const parsed = JSON.parse(readFileSync(source, 'utf8'));
  if (typeof parsed.url !== 'string' || !parsed.url.startsWith('https://')) {
    throw new Error('VIDEO.json has no https url yet');
  }
  copyFileSync(source, target);
  console.log(`VIDEO.json copied to ${target}`);
} catch (err) {
  console.error(`Could not copy VIDEO.json from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
