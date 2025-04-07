import { useContext } from 'react';
import { Group } from 'react-konva';

import {
  BACKGROUND_CO2_DISTRIBUTION,
  STATIC_CO2_DISTRIBUTION,
} from '@/constants/slider-molecules/static-carbon-dioxides';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { computeStaticDistribution } from '@/utils/molecules';

import CarbonDioxide from '../molecules/CarbonDioxide';

const StaticCarbonDioxides = (): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { dimensions, sliderCarbonDioxide } = state;
  const { width, height } = dimensions;

  const currentDistribution = computeStaticDistribution(
    STATIC_CO2_DISTRIBUTION,
    sliderCarbonDioxide,
    BACKGROUND_CO2_DISTRIBUTION,
  );

  return (
    <Group>
      {currentDistribution.map(({ coordinates, show }, index) =>
        show ? (
          <CarbonDioxide
            x={coordinates.x * width}
            y={coordinates.y * height}
            rotation={coordinates.rotation}
            key={index}
          />
        ) : null,
      )}
    </Group>
  );
};

export default StaticCarbonDioxides;
