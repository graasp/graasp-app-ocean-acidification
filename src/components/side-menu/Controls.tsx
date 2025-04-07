import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

import { Box } from '@mui/material';

import { incrementIntervalCount } from '@/actions/app-settings';
import { INTERVAL_COUNT_INCREMENTED_EVERY } from '@/constants/canvas';
import { SEQUENTIAL } from '@/constants/strings';

import { AppSettingsContext } from '../../contexts/AppSettingsProvider';
import Tours from './Tours';
import CloseMenu from './controls/CloseMenu';
import Pause from './controls/Pause';
import Play from './controls/Play';
import Reset from './controls/Reset';
import Rewind from './controls/Rewind';
import SlowMotion from './controls/SlowMotion';
import Stop from './controls/Stop';

interface Props {
  setShowSideMenu: Dispatch<SetStateAction<boolean>>;
}

const container = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '0.5em',
};
const leftContainer = {
  width: '20%',
  display: 'flex',
  alignItems: 'center',
};
const centerContainer = {
  width: '60%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const Controls = ({ setShowSideMenu }: Props): JSX.Element => {
  const [canRewind, setCanRewind] = useState(false);
  const [stopDisabled, setStopDisabled] = useState(false);
  const applicationInterval = useRef<ReturnType<typeof setInterval>>();
  const { dispatch, state } = useContext(AppSettingsContext);
  const { isPlaying, mode } = state;
  const modeSequential = mode === SEQUENTIAL;

  useEffect(() => {
    const startInterval = (): void => {
      applicationInterval.current = setInterval(() => {
        dispatch(incrementIntervalCount());
      }, INTERVAL_COUNT_INCREMENTED_EVERY);
    };
    if (!isPlaying) {
      clearInterval(applicationInterval.current);
    } else if (isPlaying) {
      startInterval();
    }

    return () => {
      clearInterval(applicationInterval.current);
    };
  }, [isPlaying, dispatch]);

  return (
    <Box sx={container}>
      <Box sx={leftContainer}>
        <CloseMenu setShowSideMenu={setShowSideMenu} />
      </Box>
      <Box sx={centerContainer}>
        {modeSequential && (
          <Rewind canRewind={canRewind} setCanRewind={setCanRewind} />
        )}
        {modeSequential && <SlowMotion setCanRewind={setCanRewind} />}
        {!modeSequential &&
          (!isPlaying ? (
            <Play />
          ) : (
            <Stop
              stopDisabled={stopDisabled}
              setStopDisabled={setStopDisabled}
            />
          ))}
        {!modeSequential && <Pause stopDisabled={stopDisabled} />}
        <Reset />
      </Box>
      <Tours modeSequential={modeSequential} />
    </Box>
  );
};

export default Controls;
