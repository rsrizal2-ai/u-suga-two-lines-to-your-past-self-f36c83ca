// Two Lines to Your Past Self — make.fun entry.
//
// Writes the two-line warning to /output/entry.txt.
// The sealed gate this program mirrors, and nothing more: the file must be
// UTF-8 text of 1 to 280 characters, and not only white space.
//
// The entry itself: one specific moment, warned about in a single sentence,
// and one sentence tracing what that moment cost and what changed because
// of it. The warning names the night, the place, and the man; the reason
// lands the twist — the scholarship was already won, and it was the
// apology never made, not the benching, that threw it away.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE_1 =
  "Don't storm out of the gym the night Coach Reyes benches you in the district final.";
const LINE_2 =
  "The scholarship letter was already in his desk drawer, and the apology you never made is why you spent the next four years paying for college yourself.";

const entry = `${LINE_1}\n${LINE_2}`;

// Sealed gate only: 1-280 characters, not only white space. No other guards.
if (entry.length < 1 || entry.length > 280 || entry.trim().length === 0) {
  throw new Error(
    `entry must be 1-280 characters and not only white space, got ${entry.length} characters`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote /output/entry.txt (${entry.length} characters, 2 lines)`);
