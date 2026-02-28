import { readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SOUNDS_DIR = join(__dirname, "sounds");
const SOUND_EXTENSIONS = /\.(wav|mp3|aiff|ogg|m4a)$/i;

function getRandomSound() {
  try {
    const files = readdirSync(SOUNDS_DIR).filter((f) =>
      SOUND_EXTENSIONS.test(f)
    );
    if (files.length === 0) return null;
    return join(SOUNDS_DIR, files[Math.floor(Math.random() * files.length)]);
  } catch {
    return null;
  }
}

/** @type {import("@opencode-ai/plugin").Plugin} */
export default async (input) => {
  return {
    event: async ({ event }) => {
      if (event.type !== "session.idle" && event.type !== "question.asked") return;

      const soundFile = getRandomSound();
      if (!soundFile) return;

      try {
        await input.$`afplay ${soundFile}`.quiet().nothrow();
      } catch {
        // silently fail - never interrupt the session
      }
    },
  };
};
