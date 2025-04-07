import {
  CARBON_PLUS_OXYGEN_CONT,
  CARBON_PLUS_OXYGEN_SEQ,
  HYDROGEN_X_OFFSET_CONT,
} from '@/constants/canvas';
import {
  ACTIVE_CO2_ADDED_PER_INCREMENT,
  CO2_SLIDER_MIN,
  CO2_SLIDER_STEP,
  STATIC_CO2_ADDED_PER_INCREMENT,
} from '@/constants/side-menu';
import { SEQUENTIAL } from '@/constants/strings';

import {
  ActiveMoleculesType,
  MoleculeCenter,
  Point,
  PointWithoutRotation,
  StaticCarbonDioxidesType,
} from './molecules/types';

export const generateRandomNum = (min: number, max: number): number =>
  Math.random() * (max - min) + min;

const generateRandomSign = (): number => (Math.random() < 0.5 ? -1 : 1);

export const generateRandomRotation = (): number => generateRandomNum(0, 360);

export const generateRandomCoordinates = (
  count: number,
  yStart: number,
  yEnd: number,
): MoleculeCenter[] => {
  const centers = [];
  for (let i = 1; i <= count; i += 1) {
    centers.push({
      x: generateRandomNum(0, 1),
      y: generateRandomNum(yStart, yEnd),
    });
  }
  return centers;
};

export const findCarbonicAcidCoordinates = (
  co2Begins: Point,
  waterBegins: Point,
  height: number,
  width: number,
  mode: string,
): PointWithoutRotation => {
  const xOffset = HYDROGEN_X_OFFSET_CONT * (height / width);
  const horizontalMotion = (co2Begins.x - (waterBegins.x + xOffset)) / 2;
  const co2EndsX = co2Begins.x - horizontalMotion;
  const carbonOxygenRadii =
    mode === SEQUENTIAL ? CARBON_PLUS_OXYGEN_SEQ : CARBON_PLUS_OXYGEN_CONT;
  const co2EndsY = waterBegins.y + carbonOxygenRadii;
  return { x: co2EndsX, y: co2EndsY };
};

export const distributeMoleculesOnRow = (
  numMolecules: number,
  numRows: number,
  minY: number,
  maxY: number,
  rowIndex: number,
): Point[] => {
  const xIndent = generateRandomNum(0.02, 0.1);
  const row = new Array(numMolecules).fill(null).map((emptyElement, index) => ({
    x: xIndent + (1 / numMolecules) * index,
    y: generateRandomNum(
      minY + (maxY - minY) * (rowIndex / numRows),
      minY + (maxY - minY) * ((rowIndex + 1) / numRows),
    ),
    rotation: generateRandomRotation(),
  }));
  return row;
};

const CO2_MIN_MOVE_X = 0.2;
const CO2_MAX_MOVE_X = 0.3;
export const determineCo2EndX = (xStart: number): number => {
  const distanceMoved = generateRandomNum(CO2_MIN_MOVE_X, CO2_MAX_MOVE_X);
  if (xStart <= 0.35) return xStart + distanceMoved;
  if (xStart <= 0.65) return xStart + generateRandomSign() * distanceMoved;
  return xStart - distanceMoved;
};

const CO2_MIN_MOVE_Y = 0.3;
const CO2_MAX_MOVE_Y = 0.4;
export const determineCo2EndY = (startY: number): number => {
  const distanceMoved = generateRandomNum(CO2_MIN_MOVE_Y, CO2_MAX_MOVE_Y);
  return startY + distanceMoved;
};

export const computeStaticDistribution = (
  distribution: StaticCarbonDioxidesType[],
  sliderValue: number,
  backgroundDistribution: StaticCarbonDioxidesType[],
): StaticCarbonDioxidesType[] => {
  const newIndex =
    ((sliderValue - CO2_SLIDER_MIN) / CO2_SLIDER_STEP) *
    STATIC_CO2_ADDED_PER_INCREMENT;
  const updatedDistribution = distribution.map(({ coordinates }, index) => {
    if (index < newIndex) return { coordinates, show: true };
    return { coordinates, show: false };
  });
  return [...updatedDistribution, ...backgroundDistribution];
};

export const computeEquilibriumDistribution = (
  distribution: ActiveMoleculesType[],
  sliderValue: number,
): ActiveMoleculesType[] => {
  const numMoleculesToActivate =
    ((sliderValue - CO2_SLIDER_MIN) / CO2_SLIDER_STEP) *
    ACTIVE_CO2_ADDED_PER_INCREMENT;

  return distribution.map(({ molecules, properties }, index) => ({
    molecules,
    properties: {
      ...properties,
      reverse: index < numMoleculesToActivate,
      showCycle: index < numMoleculesToActivate,
    },
  }));
};

export const updateDistribution = (
  distribution: ActiveMoleculesType[],
  sliderValue: number,
  intervalCount: number,
): ActiveMoleculesType[] => {
  const numMoleculesToActivate =
    ((sliderValue - CO2_SLIDER_MIN) / CO2_SLIDER_STEP) *
    ACTIVE_CO2_ADDED_PER_INCREMENT;
  return distribution.map(({ molecules, properties }, index) => {
    const newProperties = { ...properties };
    if (index < numMoleculesToActivate) {
      newProperties.showCycle = true;
      if (!properties.reverse) {
        newProperties.beginsAt = intervalCount;
      } else {
        newProperties.beginsAt = Infinity;
      }
    } else if (!properties.reverse) {
      newProperties.showCycle = false;
      newProperties.beginsAt = Infinity;
    } else {
      newProperties.beginsAt = intervalCount;
    }
    return {
      molecules,
      properties: newProperties,
    };
  });
};

const CO2_WATER_DISTANCE_X = 0.45;
const CO2_WATER_DISTANCE_Y = 0.1;
export const determineWaterCoordinates = (
  co2Ends: PointWithoutRotation,
): Point => {
  const waterBegins = {
    x: 0,
    y: co2Ends.y + CO2_WATER_DISTANCE_Y,
    rotation: generateRandomRotation(),
  };

  if (co2Ends.x <= 0.5) waterBegins.x = co2Ends.x + CO2_WATER_DISTANCE_X;
  else waterBegins.x = co2Ends.x - CO2_WATER_DISTANCE_X;

  return waterBegins;
};

const CARBONIC_ACID_MOVES_X = 0.45;
const CARBONIC_ACID_MOVES_Y = 0.15;
export const determineCarbonicAcidEnds = (
  co2Ends: PointWithoutRotation,
): PointWithoutRotation => {
  const carbonicAcidEnds = { x: 0, y: co2Ends.y + CARBONIC_ACID_MOVES_Y };

  if (co2Ends.x <= 0.5) carbonicAcidEnds.x = co2Ends.x + CARBONIC_ACID_MOVES_X;
  else carbonicAcidEnds.x = co2Ends.x - CARBONIC_ACID_MOVES_X;

  return carbonicAcidEnds;
};

const HYDROGEN_MOVES_X = 0.05;
const HYDROGEN_ENDS_MIN_Y = 0.8;
const HYDROGEN_ENDS_MAX_Y = 0.85;
export const determineHydrogenEnds = (
  carbonicAcidEnds: PointWithoutRotation,
): PointWithoutRotation => ({
  x: carbonicAcidEnds.x + HYDROGEN_MOVES_X,
  y: generateRandomNum(HYDROGEN_ENDS_MIN_Y, HYDROGEN_ENDS_MAX_Y),
});
