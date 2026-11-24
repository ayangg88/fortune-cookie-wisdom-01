// Fortune Cookie Wisdom for Developers
// make.fun bounty: u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44
//
// The entry is a single original line of fortune-cookie wisdom for a
// software developer. The program writes it to /output/entry.txt,
// where the sealed gate scorer checks it is 1-120 characters of UTF-8.

import { mkdirSync, writeFileSync } from "node:fs";

// The fortune, in the cookie's own voice: a prophecy, not advice.
// The bug you chose to ignore does not stay ignored — it returns to
// you, only now it arrives as a customer complaint, wearing a face.
const FORTUNE =
  "You will meet the bug you ignored, wearing the face of a customer.";

const OUTPUT_PATH = "/output/entry.txt";

function main(): void {
  const line = FORTUNE.trim();
  if (line.length === 0 || line.length > 120) {
    throw new Error(`fortune must be 1-120 characters, got ${line.length}`);
  }
  mkdirSync("/output", { recursive: true });
  // Write the line exactly, with no trailing newline, so the file
  // holds the fortune and nothing else for the gate scorer to count.
  writeFileSync(OUTPUT_PATH, line, "utf8");
}

main();
