import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';

import { StopCircleOutlined } from '@mui/icons-material';
import { Box, IconButton, Tooltip } from '@mui/material';
import { red } from '@mui/material/colors';

import {
  setAllowVariableChange,
  setDisequilibriumCyclesBeginAt,
  setDistribution,
  setEquilibriumCarbonDioxide,
  setPHCarbonDioxide,
  setSliderCarbonDioxide,
  stopAnimation,
} from '@/actions/app-settings';
import { RESPONSIVE_BUTTON_STYLES } from '@/constants/css';
import { MOTION_INTERVAL } from '@/constants/motion/motion-intervals';
import { DEFAULT_CO2, PERIODS } from '@/constants/side-menu';
import { ACTIVE_CO2_DISTRIBUTION } from '@/constants/slider-molecules/active-molecules';
import { EMPTY_STRING } from '@/constants/strings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { computeEquilibriumDistribution } from '@/utils/molecules';

import ProgressBar from './ProgressBar';

const container = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

interface Props {
  stopDisabled: boolean;
  setStopDisabled: Dispatch<SetStateAction<boolean>>;
}

const Stop = ({ stopDisabled, setStopDisabled }: Props): JSX.Element => {
  const [stopAtInterval, setStopAtInterval] = useState(0);
  const { state, dispatch } = useContext(AppSettingsContext);
  const {
    intervalCount,
    sliderCarbonDioxide,
    equilibriumCarbonDioxide,
    disequilibriumCyclesBeginAt,
    year,
  } = state;
  const inEquilibrium = sliderCarbonDioxide === equilibriumCarbonDioxide;

  const styles = { color: stopDisabled ? EMPTY_STRING : red[800] };

  const onStop = (): void => {
    setStopDisabled(true);
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
      const initialCarbonDioxide =
        PERIODS.find((period) => period.year === year)?.co2 || DEFAULT_CO2;

      setStopDisabled(false);
      dispatch(stopAnimation());
      dispatch(setDisequilibriumCyclesBeginAt(stopAtInterval));
      dispatch(setEquilibriumCarbonDioxide(initialCarbonDioxide));
      dispatch(setSliderCarbonDioxide(initialCarbonDioxide));
      dispatch(setPHCarbonDioxide(initialCarbonDioxide));
      dispatch(setAllowVariableChange(true));
      const equilibriumDistribution = computeEquilibriumDistribution(
        ACTIVE_CO2_DISTRIBUTION,
        initialCarbonDioxide,
      );
      dispatch(setDistribution(equilibriumDistribution));
    }
  }, [
    intervalCount,
    stopAtInterval,
    dispatch,
    sliderCarbonDioxide,
    year,
    setStopDisabled,
  ]);

  return (
    <Box sx={container}>
      <Tooltip title="Stop">
        <span>
          <IconButton onClick={onStop} disabled={stopDisabled}>
            <StopCircleOutlined
              sx={{ ...styles, ...RESPONSIVE_BUTTON_STYLES }}
            />
          </IconButton>
        </span>
      </Tooltip>
      {stopDisabled && <ProgressBar />}
    </Box>
  );
};

export default Stop;
