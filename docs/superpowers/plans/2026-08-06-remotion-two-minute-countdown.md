# Remotion Two-Minute Countdown Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build and render a deterministic 120-second, 1920×1080 Remotion countdown MP4.

**Architecture:** Add a minimal standalone Remotion entrypoint under `countdown/` so the existing illustration repository remains untouched. The React composition derives `MM:SS` from `useCurrentFrame`, and the Remotion CLI renders the registered composition to `out/countdown-2m.mp4`.

**Tech Stack:** Node.js, TypeScript, React, Remotion, FFmpeg via Remotion CLI.

## Global Constraints

- Canvas is exactly 1920×1080 at 30 fps.
- Duration is exactly 120 seconds / 3600 frames.
- The video has no audio track or external media.
- Existing untracked illustration assets must remain untouched.
- The rendered MP4 is a local artifact and is not committed.

---

### Task 1: Scaffold the isolated Remotion project

**Files:**
- Create: `countdown/package.json`
- Create: `countdown/tsconfig.json`
- Create: `countdown/src/index.ts`
- Create: `countdown/src/Root.tsx`
- Create: `countdown/src/Countdown.tsx`

**Interfaces:**
- `src/index.ts` registers the default export from `src/Root.tsx` with `registerRoot`.
- `src/Root.tsx` registers composition ID `TwoMinuteCountdown` with `width=1920`, `height=1080`, `fps=30`, and `durationInFrames=3600`.
- `src/Countdown.tsx` default-exports a React component that accepts no required props and renders from the current frame.

- [ ] **Step 1: Add package metadata and TypeScript configuration**

Use Remotion's standard local scripts and pin compatible runtime dependencies:

```json
{
  "name": "two-minute-countdown",
  "private": true,
  "scripts": {
    "start": "remotion studio src/index.ts",
    "render": "remotion render src/index.ts TwoMinuteCountdown ../out/countdown-2m.mp4",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "@remotion/cli": "latest",
    "@remotion/bundler": "latest",
    "@remotion/renderer": "latest",
    "react": "latest",
    "react-dom": "latest",
    "remotion": "latest"
  },
  "devDependencies": {
    "@types/react": "latest",
    "@types/react-dom": "latest",
    "typescript": "latest"
  }
}
```

`tsconfig.json` must enable JSX with `react-jsx`, target ES2022, use Node module resolution, and include `src/**/*.ts` and `src/**/*.tsx`.

- [ ] **Step 2: Register the composition**

Implement the entrypoint and root with these exact contracts:

```tsx
// src/index.ts
import {registerRoot} from 'remotion';
import {Root} from './Root';

registerRoot(Root);
```

```tsx
// src/Root.tsx
import {Composition} from 'remotion';
import {Countdown} from './Countdown';

export const Root = () => (
  <Composition
    id="TwoMinuteCountdown"
    component={Countdown}
    durationInFrames={3600}
    fps={30}
    width={1920}
    height={1080}
  />
);
```

- [ ] **Step 3: Implement frame-derived countdown display**

In `src/Countdown.tsx`, compute `remainingSeconds = Math.max(0, 120 - Math.floor(frame / fps))`, derive minutes and seconds, and format each unit with `padStart(2, '0')`. Use a near-black `AbsoluteFill`, centered flex layout, white monospace timer text, a small `COUNTDOWN` label, and a one-frame-per-second pulse using `interpolate` with `Extrapolate.CLAMP`. Keep all styles inline and deterministic.

- [ ] **Step 4: Install dependencies and typecheck**

Run:

```bash
cd countdown
npm install
npm run typecheck
```

Expected: dependency installation succeeds and TypeScript exits with code 0.

- [ ] **Step 5: Commit the isolated source**

```bash
git add countdown/package.json countdown/tsconfig.json countdown/src
git commit -m "feat: add Remotion two-minute countdown"
```

### Task 2: Render and verify the MP4

**Files:**
- Create: `out/countdown-2m.mp4`

**Interfaces:**
- Consumes the `TwoMinuteCountdown` composition from Task 1.
- Produces a local MP4 with 120 seconds of video at 1920×1080 and no audio stream.

- [ ] **Step 1: Render the composition**

Run:

```bash
cd countdown
npm run render
```

Expected: Remotion writes `/Users/thawingx/Documents/xiao-gecko-illustrations/out/countdown-2m.mp4`.

- [ ] **Step 2: Verify file metadata**

Run:

```bash
ffprobe -v error -show_entries format=duration:stream=codec_type,width,height,r_frame_rate -of json ../out/countdown-2m.mp4
```

Expected: one video stream with width `1920`, height `1080`, frame rate `30/1`, and duration approximately `120.000000`; no audio stream is present.

- [ ] **Step 3: Inspect representative frames**

Extract frames around 0 seconds, 60 seconds, and 119.9 seconds with FFmpeg and inspect them. Expected text is `02:00`, `01:00`, and `00:00`, respectively, with centered white text on a dark background.

- [ ] **Step 4: Report the local artifact**

Confirm the output path and summarize the verified dimensions, frame rate, duration, and audio state. Do not add the MP4 to git.
