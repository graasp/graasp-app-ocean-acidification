import { useContext } from 'react';

import { ROTATION, X, Y } from '@/constants/strings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { computePosition } from '@/utils/continuous-mode-motion';
import { Migration } from '@/utils/molecules/types';

import CarbonDioxide from '../molecules/CarbonDioxide';

interface Props {
  beginsAfter: number;
  molecules: Migration;
  reverse: boolean;
}

const CarbonDioxideMigration = ({
  beginsAfter,
  molecules,
  reverse,
}: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { intervalCount, dimensions } = state;
  const { width, height } = dimensions;
  const { co2 } = molecules;
  const netIntervals = intervalCount - beginsAfter;
  const reversedCo2 = { begins: { ...co2.ends }, ends: { ...co2.begins } };
  const activeCo2 = reverse ? reversedCo2 : co2;

  const currentX = computePosition(activeCo2, X, netIntervals);
  const currentY = computePosition(activeCo2, Y, netIntervals);
  const currentRotation = computePosition(activeCo2, ROTATION, netIntervals);

  return (
    <CarbonDioxide
      x={currentX * width}
      y={currentY * height}
      rotation={currentRotation}
    />
  );
};

export default CarbonDioxideMigration;
