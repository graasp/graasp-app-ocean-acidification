import { useContext } from 'react';

import { Box } from '@mui/material';

import { PH_SCALE_MAX, PH_SCALE_RANGE } from '@/constants/canvas';
import {
  CO2_SLIDER_MAX,
  CO2_SLIDER_MIN,
  TABLE_EXTRA_LABEL_COLOR,
} from '@/constants/side-menu';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

const styles = {
  width: '50%',
  float: 'right',
  fontSize: '12.5px',
  fontWeight: 600,
  color: TABLE_EXTRA_LABEL_COLOR,
};

const ExtraLabel = (): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { pHCarbonDioxide } = state;

  const co2OnScale =
    (pHCarbonDioxide - CO2_SLIDER_MIN) / (CO2_SLIDER_MAX - CO2_SLIDER_MIN);
  const correspondingPh = PH_SCALE_MAX - co2OnScale * PH_SCALE_RANGE;
  const roundedPh = (
    Math.round((correspondingPh + Number.EPSILON) * 100) / 100
  ).toFixed(2);

  return <Box sx={styles}>pH (={roundedPh})</Box>;
};

export default ExtraLabel;
