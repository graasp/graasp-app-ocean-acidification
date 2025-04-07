import { useContext } from 'react';
import { Group } from 'react-konva';

import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { createCarbonicAcid } from '@/utils/molecules/';

import Carbon from './atoms/Carbon';
import Hydrogen from './atoms/Hydrogen';
import Oxygen from './atoms/Oxygen';

interface Props {
  x: number;
  y: number;
  rotation?: number;
}

const CarbonicAcid = ({ x, y, rotation = 0 }: Props): JSX.Element | null => {
  const { state } = useContext(AppSettingsContext);
  const { dimensions, mode } = state;
  const { height } = dimensions;
  const { topOxygen, leftOxygen, bottomOxygen, topHydrogen, leftHydrogen } =
    createCarbonicAcid({ x, y }, height, mode);

  return (
    <Group x={x} y={y} rotation={rotation}>
      <Oxygen x={topOxygen.x - x} y={topOxygen.y - y} />
      <Carbon />
      <Oxygen x={leftOxygen.x - x} y={leftOxygen.y - y} />
      <Oxygen x={bottomOxygen.x - x} y={bottomOxygen.y - y} />
      <Hydrogen x={topHydrogen.x - x} y={topHydrogen.y - y} />
      <Hydrogen x={leftHydrogen.x - x} y={leftHydrogen.y - y} />
    </Group>
  );
};

export default CarbonicAcid;
