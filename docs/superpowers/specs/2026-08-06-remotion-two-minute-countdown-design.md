# Remotion Two-Minute Countdown Design

## Goal

Create a standalone 2-minute countdown video that can be rendered locally with Remotion and delivered as an MP4.

## Format

- Canvas: 1920×1080, 16:9 landscape
- Frame rate: 30 fps
- Duration: exactly 120 seconds / 3600 frames
- Output: MP4, no audio track

## Visual design

The composition uses a near-black background and a centered, high-contrast white `MM:SS` timer in a monospace font. A small neutral label above the timer identifies it as a countdown without competing with the time. Each second advances to the next displayed value; the last frame displays `00:00`.

The timer is driven directly from the current Remotion frame, so it remains deterministic at any render speed. The display value is clamped to zero and formatted with two digits per unit. A very short opacity/scale pulse at each second boundary gives the number change a clear visual rhythm without adding distracting scene changes.

## Architecture

- `src/Countdown.tsx`: pure Remotion composition using `useCurrentFrame` and `useVideoConfig`.
- `src/Root.tsx`: registers the fixed `Countdown` composition with its dimensions, fps, and duration.
- `src/index.ts`: Remotion entry point.
- `package.json` and `tsconfig.json`: minimal local render tooling only if the repository does not already provide it.
- `out/countdown-2m.mp4`: generated delivery artifact; kept out of source control unless the repository already tracks rendered media.

## Rendering and verification

Render the exact composition to MP4, then verify that the file exists, is non-empty, has a 120-second duration, and has 1920×1080 video dimensions. Inspect representative frames near the beginning, at a minute boundary, and at the end to catch formatting or timing errors.

## Scope

No external images, fonts, music, sound effects, platform-specific adaptations, or unrelated repository refactors are included.
