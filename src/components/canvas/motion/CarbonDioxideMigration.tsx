import { useContext } from 'react';

import {
  CO2_MIGRATION,
  CO2_MIGRATION_INTERVALS,
} from '@/constants/motion/carbon-dioxide-migration';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

import CarbonDioxide from '../molecules/CarbonDioxide';

const CarbonDioxideMigration = (): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { intervalCount, dimensions } = state;
  const { width, height } = dimensions;
  const { begins, ends, movesPerInterval } = CO2_MIGRATION;
  const motionCompleted = intervalCount >= CO2_MIGRATION_INTERVALS;

  const currentX = motionCompleted
    ? ends.x
    : begins.x + intervalCount * movesPerInterval.x;

  const currentY = motionCompleted
    ? ends.y
    : begins.y + intervalCount * movesPerInterval.y;

  const currentRotation = motionCompleted
    ? ends.rotation
    : begins.rotation + intervalCount * movesPerInterval.rotation;

  return (
    <CarbonDioxide
      x={currentX * width}
      y={currentY * height}
      rotation={currentRotation}
    />
  );
};

export default CarbonDioxideMigration;
