import { Box } from '@mui/material';

import {
  ACTIVE_EQUATION_COLOR,
  DEFAULT_EQUATION_COLOR,
  INACTIVE_EQUATION_COLOR,
} from '@/constants/side-menu';

const container = {
  display: 'flex',
  alignItems: 'flex-end',
  width: 'max-content',
};

const horizontalLine = {
  height: '2px',
  width: 20,
};

const rightArrow = {
  width: 0,
  height: 0,
  borderTop: '5px solid transparent',
  borderLeft: '5px solid',
};

interface Props {
  rightArrowActive: boolean;
  leftArrowActive: boolean;
  isInactive: boolean;
}

const RightArrow = ({
  rightArrowActive,
  leftArrowActive,
  isInactive,
}: Props): JSX.Element => {
  let color = DEFAULT_EQUATION_COLOR;
  if (rightArrowActive) {
    color = ACTIVE_EQUATION_COLOR;
  } else if (leftArrowActive || isInactive) {
    color = INACTIVE_EQUATION_COLOR;
  }

  return (
    <Box sx={container}>
      <Box sx={horizontalLine} style={{ background: color }} />
      <Box sx={rightArrow} style={{ borderLeftColor: color }} />
    </Box>
  );
};

export default RightArrow;
