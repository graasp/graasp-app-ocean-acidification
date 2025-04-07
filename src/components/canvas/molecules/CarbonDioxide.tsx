import { useContext } from 'react';
import { Group } from 'react-konva';

import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { createCarbonDioxide } from '@/utils/molecules/';

import Carbon from './atoms/Carbon';
import Oxygen from './atoms/Oxygen';

interface Props {
  x: number;
  y: number;
  rotation?: number;
}

const CarbonDioxide = ({ x, y, rotation = 0 }: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { dimensions, mode } = state;
  const { height } = dimensions;
  const { top, center, bottom } = createCarbonDioxide({ x, y }, height, mode);

  return (
    <Group rotation={rotation} x={center.x} y={center.y}>
      <Oxygen x={top.x - center.x} y={top.y - center.y} />
      <Carbon />
      <Oxygen x={bottom.x - center.x} y={bottom.y - center.y} />
    </Group>
  );
};

export default CarbonDioxide;
