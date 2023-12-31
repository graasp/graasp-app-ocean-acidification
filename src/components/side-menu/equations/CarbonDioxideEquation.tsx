import { useContext } from 'react';

import { Box } from '@mui/material';

import { MOTION_INTERVALS } from '@/constants/motion/intervals';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

import Arrows from './Arrows';
import CustomTypography from './CustomTypography';

const containerStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '50%',
  margin: '1em auto',
};

const CarbonDioxideEquation = (): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { intervalCount } = state;
  const rightArrowActive =
    intervalCount > 0 && intervalCount < MOTION_INTERVALS[0];
  const leftArrowActive =
    intervalCount > MOTION_INTERVALS[4] && intervalCount < MOTION_INTERVALS[5];
  const isActive = rightArrowActive || leftArrowActive;

  return (
    <Box sx={containerStyles}>
      <CustomTypography isActive={isActive}>
        CO<sub>2(g)</sub>
      </CustomTypography>
      <Arrows
        rightArrowActive={rightArrowActive}
        leftArrowActive={leftArrowActive}
      />
      <CustomTypography isActive={isActive}>
        CO<sub>2(aq)</sub>
      </CustomTypography>
    </Box>
  );
};

export default CarbonDioxideEquation;
