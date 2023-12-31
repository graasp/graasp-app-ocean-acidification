import { useContext } from 'react';
import { Rect } from 'react-konva';

import { REEF_BLOCKER_GRADIENT, REEF_BLOCKER_HEIGHT } from '@/constants/canvas';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

const ReefBlocker = (): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { dimensions } = state;
  const { width, height } = dimensions;

  return (
    <Rect
      y={height * (1 - REEF_BLOCKER_HEIGHT)}
      width={width}
      height={height * REEF_BLOCKER_HEIGHT}
      fillLinearGradientEndPoint={{
        x: 0,
        y: height * REEF_BLOCKER_HEIGHT,
      }}
      fillLinearGradientColorStops={REEF_BLOCKER_GRADIENT}
    />
  );
};

export default ReefBlocker;
