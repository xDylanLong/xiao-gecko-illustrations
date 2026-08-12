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
