import { useContext } from 'react';
import { Group } from 'react-konva';

import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { createWater } from '@/utils/molecules/';

import Hydrogen from './atoms/Hydrogen';
import Oxygen from './atoms/Oxygen';

interface Props {
  x: number;
  y: number;
  rotation?: number;
}

const Water = ({ x, y, rotation = 0 }: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { dimensions, mode } = state;
  const { height } = dimensions;
  const { topLeft, center, topRight } = createWater({ x, y }, height, mode);

  return (
    <Group x={center.x} y={center.y} rotation={rotation}>
      <Hydrogen x={topLeft.x - center.x} y={topLeft.y - center.y} />
      <Oxygen />
      <Hydrogen x={topRight.x - center.x} y={topRight.y - center.y} />
    </Group>
  );
};

export default Water;
