import { useContext } from 'react';
import { Circle } from 'react-konva';

import {
  CARBON_FILL,
  CARBON_RADIUS_CONT,
  CARBON_RADIUS_SEQ,
} from '@/constants/canvas';
import { SEQUENTIAL } from '@/constants/strings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

interface Props {
  x?: number;
  y?: number;
}

const Carbon = ({ x = 0, y = 0 }: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { dimensions, mode } = state;
  const { height } = dimensions;

  const radius = mode === SEQUENTIAL ? CARBON_RADIUS_SEQ : CARBON_RADIUS_CONT;

  return <Circle fill={CARBON_FILL} radius={radius * height} x={x} y={y} />;
};

export default Carbon;
