import { useContext } from 'react';

import { Box } from '@mui/material';

import {
  setCarbonDioxideChange,
  setDistribution,
  setSliderCarbonDioxide,
} from '@/actions/app-settings';
import {
  CO2_SLIDER_MARKS,
  CO2_SLIDER_MAX,
  CO2_SLIDER_MIN,
  CO2_SLIDER_STEP,
} from '@/constants/side-menu';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { updateDistribution } from '@/utils/molecules';

import CustomSlider from '../common/CustomSlider';
import SideMenuHeader from '../common/SideMenuHeader';

const container = {
  width: '90%',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'center',
};

const CarbonDioxideSlider = (): JSX.Element => {
  const { state, dispatch } = useContext(AppSettingsContext);
  const {
    isPlaying,
    allowVariableChange,
    sliderCarbonDioxide,
    equilibriumCarbonDioxide,
    activeMoleculeDistribution,
    intervalCount,
  } = state;

  const label = (
    <>
      CO<sub>2</sub> (ppm)
    </>
  );

  const onChange = (event: Event, value: number | number[]): void => {
    const sliderValue = value as number;
    const updatedDistribution = updateDistribution(
      activeMoleculeDistribution,
      sliderValue,
      intervalCount,
    );
    dispatch(setDistribution(updatedDistribution));
    dispatch(setSliderCarbonDioxide(sliderValue));
    dispatch(setCarbonDioxideChange(sliderValue - equilibriumCarbonDioxide));
  };

  return (
    <Box className="continuous-mode-5">
      <SideMenuHeader label={label} showTooltip />
      <Box sx={container}>
        <CustomSlider
          min={CO2_SLIDER_MIN}
          max={CO2_SLIDER_MAX}
          marks={CO2_SLIDER_MARKS}
          disabled={isPlaying || !allowVariableChange}
          step={CO2_SLIDER_STEP}
          onChange={onChange}
          value={sliderCarbonDioxide}
        />
      </Box>
    </Box>
  );
};

export default CarbonDioxideSlider;
