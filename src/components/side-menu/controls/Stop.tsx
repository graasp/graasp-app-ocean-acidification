import { useContext, useEffect, useState } from 'react';

import { StopCircleOutlined } from '@mui/icons-material';
import { Box, IconButton, Tooltip } from '@mui/material';
import { red } from '@mui/material/colors';

import {
  setDisequilibriumCyclesBeginAt,
  setDistribution,
  setEquilibriumCarbonDioxide,
  togglePlay,
} from '@/actions/app-settings';
import { MOTION_INTERVAL } from '@/constants/motion/motion-intervals';
import { REACTIVE_CO2_DISTRIBUTION } from '@/constants/slider-molecules/reactive-slider-molecules';
import { EMPTY_STRING } from '@/constants/strings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { computeEquilibriumDistribution } from '@/utils/molecules';

import ProgressBar from './ProgressBar';

const container = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const Stop = (): JSX.Element => {
  const [disabled, setDisabled] = useState(false);
  const [stopAtInterval, setStopAtInterval] = useState(0);
  const { state, dispatch } = useContext(AppSettingsContext);
  const {
    intervalCount,
    sliderCarbonDioxide,
    equilibriumCarbonDioxide,
    disequilibriumCyclesBeginAt,
  } = state;
  const inEquilibrium = sliderCarbonDioxide === equilibriumCarbonDioxide;

  const styles = {
    fontSize: '2em',
    color: disabled ? EMPTY_STRING : red[800],
  };

  const onStop = (): void => {
    setDisabled(true);
    let stopAt =
      MOTION_INTERVAL * (Math.floor(intervalCount / MOTION_INTERVAL) + 1);
    const disequilibriumCyclesStopAt =
      disequilibriumCyclesBeginAt + MOTION_INTERVAL * 3;
    if (!inEquilibrium && intervalCount < disequilibriumCyclesStopAt) {
      stopAt = disequilibriumCyclesStopAt;
    }
    setStopAtInterval(stopAt);
  };

  useEffect(() => {
    if (intervalCount === stopAtInterval && intervalCount > 0) {
      setDisabled(false);
      dispatch(togglePlay());
      dispatch(setDisequilibriumCyclesBeginAt(stopAtInterval));
      dispatch(setEquilibriumCarbonDioxide(sliderCarbonDioxide));
      const equilibriumDistribution = computeEquilibriumDistribution(
        REACTIVE_CO2_DISTRIBUTION,
        sliderCarbonDioxide,
      );
      dispatch(setDistribution(equilibriumDistribution));
    }
  }, [intervalCount, stopAtInterval, dispatch, sliderCarbonDioxide]);

  return (
    <Box sx={container}>
      <Tooltip title="Stop">
        <IconButton onClick={onStop} disabled={disabled}>
          <StopCircleOutlined sx={styles} />
        </IconButton>
      </Tooltip>
      {disabled && <ProgressBar />}
    </Box>
  );
};

export default Stop;
