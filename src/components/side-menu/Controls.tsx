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
import CloseMenu from './controls/CloseMenu';
import Pause from './controls/Pause';
import Play from './controls/Play';
import Reset from './controls/Reset';
import SlowMotion from './controls/SlowMotion';
import StartTour from './controls/StartTour';

interface Props {
  setShowSideMenu: Dispatch<SetStateAction<boolean>>;
}

const containerStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '1em',
};
const leftContainerStyles = {
  width: '20%',
  display: 'flex',
  alignItems: 'center',
};
const rightContainerStyles = {
  width: '20%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
};
const centerContainerStyles = {
  width: '60%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const Controls = ({ setShowSideMenu }: Props): JSX.Element => {
  const [currentLimitIndex, setCurrentLimitIndex] = useState(0);
  const [inMotion, setInMotion] = useState(false);
  const applicationInterval = useRef<ReturnType<typeof setInterval>>();
  const { dispatch, state } = useContext(AppSettingsContext);
  const { isPaused, mode } = state;
  const modeSequential = mode === SEQUENTIAL;

  useEffect(() => {
    const startInterval = (): void => {
      applicationInterval.current = setInterval(() => {
        dispatch(incrementIntervalCount());
      }, INTERVAL_COUNT_INCREMENTED_EVERY);
    };
    if (isPaused) {
      clearInterval(applicationInterval.current);
    } else if (!isPaused) {
      startInterval();
    }
  }, [isPaused, dispatch]);

  return (
    <Box sx={containerStyles}>
      <Box sx={leftContainerStyles}>
        <CloseMenu setShowSideMenu={setShowSideMenu} />
      </Box>
      <Box sx={centerContainerStyles}>
        <SlowMotion
          inMotion={inMotion}
          setInMotion={setInMotion}
          currentLimitIndex={currentLimitIndex}
          setCurrentLimitIndex={setCurrentLimitIndex}
        />
        {isPaused ? <Play disabled={modeSequential} /> : <Pause />}
        <Reset
          setCurrentLimitIndex={setCurrentLimitIndex}
          inMotion={inMotion}
        />
      </Box>
      <Box sx={rightContainerStyles}>
        <StartTour />
      </Box>
    </Box>
  );
};

export default Controls;
