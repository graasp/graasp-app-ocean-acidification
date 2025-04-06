import { Box } from '@mui/material';

import {
  ACTIVE_EQUATION_COLOR,
  DEFAULT_EQUATION_COLOR,
  INACTIVE_EQUATION_COLOR,
} from '@/constants/side-menu';

const container = {
  display: 'flex',
  alignItems: 'flex-start',
  width: 'max-content',
};

const horizontalLine = {
  height: '2px',
  width: 20,
};

const leftArrow = {
  width: 0,
  height: 0,
  borderBottom: '5px solid transparent',
  borderRight: '5px solid',
};

interface Props {
  rightArrowActive: boolean;
  leftArrowActive: boolean;
  isInactive: boolean;
}

const LeftArrow = ({
  rightArrowActive,
  leftArrowActive,
  isInactive,
}: Props): JSX.Element => {
  let color = DEFAULT_EQUATION_COLOR;
  if (leftArrowActive) {
    color = ACTIVE_EQUATION_COLOR;
  } else if (rightArrowActive || isInactive) {
    color = INACTIVE_EQUATION_COLOR;
  }

  return (
    <Box sx={container}>
      <Box sx={leftArrow} style={{ borderRightColor: color }} />
      <Box sx={horizontalLine} style={{ background: color }} />
    </Box>
  );
};

export default LeftArrow;
