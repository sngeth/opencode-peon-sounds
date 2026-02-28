# opencode-peon-sounds

An [OpenCode](https://opencode.ai) plugin that plays a random Warcraft 3 Peon sound effect whenever a session goes idle (task completes).

## Install

Clone this repo into your OpenCode config directory:

```bash
git clone https://github.com/sngeth/opencode-peon-sounds.git ~/.config/opencode/opencode-peon-sounds
```

Then add it to your `~/.config/opencode/opencode.json`:

```json
{
  "plugin": ["./opencode-peon-sounds"]
}
```

## How it works

1. OpenCode emits a `session.idle` event each time an agent finishes work and is waiting for input.
2. This plugin picks a random sound file from its bundled `sounds/` directory and plays it using macOS `afplay`.

## Bundled sounds

| File | Quote |
|------|-------|
| `peon-okie-dokie.mp3` | "Okie dokie." |
| `ready-to-work.mp3` | "Ready to work." |
| `something-need-doing.mp3` | "Something need doing?" |
| `warcraft-3-peon.mp3` | Peon acknowledgment |

## Adding your own sounds

Drop any `.wav`, `.mp3`, `.aiff`, `.ogg`, or `.m4a` files into the plugin's `sounds/` directory and they will be picked up automatically.

Some classic Peon lines to look for:

| File | Quote |
|------|-------|
| `peon-work-complete.wav` | "Work complete." |
| `peon-zug-zug.wav` | "Zug zug." |
| `peon-dabu.wav` | "Dabu." |
| `peon-work-work.wav` | "Work, work." |
| `peon-yes-milord.wav` | "Yes, me lord?" |
| `peon-what-you-want.wav` | "Whaddya want?" |
| `peon-say-the-word.wav` | "Say the word." |
| `peon-me-not-that-kind-of-orc.wav` | "Me not that kind of orc!" |

## Platform support

Currently macOS only (`afplay`). To support Linux, swap `afplay` for `paplay` or `aplay` in `index.js`.

## License

MIT
