import shuffle from 'lodash.shuffle';

import { distributeMoleculesOnRow } from '@/utils/molecules';

import {
  CO2_SLIDER_NUM_INCREMENTS,
  STATIC_CO2_ADDED_PER_INCREMENT,
} from '../side-menu';

const MAX_STATIC_CO2 =
  CO2_SLIDER_NUM_INCREMENTS * STATIC_CO2_ADDED_PER_INCREMENT;
const STATIC_CO2_NUM_ROWS = 4;
const STATIC_CO2_PER_ROW = MAX_STATIC_CO2 / STATIC_CO2_NUM_ROWS;
const STATIC_CO2_MIN_Y = 0.01;
const STATIC_CO2_MAX_Y = 0.325;

const INITIAL_DISTRIBUTION = new Array(STATIC_CO2_NUM_ROWS)
  .fill(null)
  .map((emptyElement, index) =>
    distributeMoleculesOnRow(
      STATIC_CO2_PER_ROW,
      STATIC_CO2_NUM_ROWS,
      STATIC_CO2_MIN_Y,
      STATIC_CO2_MAX_Y,
      index,
    ),
  )
  .flat();

const SHUFFLED_DISTRIBUTION = shuffle(INITIAL_DISTRIBUTION);

export const STATIC_CO2_DISTRIBUTION = SHUFFLED_DISTRIBUTION.map(
  (coordinates) => ({ coordinates, show: false }),
);

const BACKGROUND_CO2_NUM_ROWS = 4;
const TOTAL_BACKGROUND_CO2 = 12;
const BACKGROUND_CO2_PER_ROW = TOTAL_BACKGROUND_CO2 / BACKGROUND_CO2_NUM_ROWS;

const BACKGROUND_DISTRIBUTION = new Array(BACKGROUND_CO2_NUM_ROWS)
  .fill(null)
  .map((emptyElement, index) =>
    distributeMoleculesOnRow(
      BACKGROUND_CO2_PER_ROW,
      BACKGROUND_CO2_NUM_ROWS,
      STATIC_CO2_MIN_Y,
      STATIC_CO2_MAX_Y,
      index,
    ),
  )
  .flat();

const SHUFFLED_BACKGROUND_DISTRIBUTION = shuffle(BACKGROUND_DISTRIBUTION);
export const BACKGROUND_CO2_DISTRIBUTION = SHUFFLED_BACKGROUND_DISTRIBUTION.map(
  (coordinates) => ({ coordinates, show: true }),
);
