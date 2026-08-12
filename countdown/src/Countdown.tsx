import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

const pad = (value: number) => String(value).padStart(2, '0');

export const Countdown = () => {
  const frame = useCurrentFrame();
  const {fps, durationInFrames} = useVideoConfig();
  const finalFrame = durationInFrames - 1;
  const remainingSeconds =
    frame >= finalFrame ? 0 : Math.max(0, 120 - Math.floor(frame / fps));
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;
  const pulse = interpolate(
    frame % fps,
    [0, 1, 4],
    [1.045, 1, 1],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    },
  );

  return (
    <AbsoluteFill
      style={{
        alignItems: 'center',
        backgroundColor: '#0a0a0a',
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'SFMono-Regular, Menlo, Monaco, Consolas, monospace',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          color: '#8b8b8b',
          fontSize: 24,
          fontWeight: 600,
          letterSpacing: 10,
          marginBottom: 28,
          textTransform: 'uppercase',
        }}
      >
        Countdown
      </div>
      <div
        style={{
          fontSize: 240,
          fontVariantNumeric: 'tabular-nums',
          fontWeight: 500,
          letterSpacing: 8,
          lineHeight: 1,
          transform: `scale(${pulse})`,
        }}
      >
        {pad(minutes)}:{pad(seconds)}
      </div>
    </AbsoluteFill>
  );
};
