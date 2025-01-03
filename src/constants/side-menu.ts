export const CO2_SLIDER_MIN = 200;
export const CO2_SLIDER_MAX = 600;
export const CO2_SLIDER_STEP = 50;
export const CO2_SLIDER_NUM_INCREMENTS =
  (CO2_SLIDER_MAX - CO2_SLIDER_MIN) / CO2_SLIDER_STEP;
const NUM_MARKS = (CO2_SLIDER_MAX - CO2_SLIDER_MIN) / CO2_SLIDER_STEP + 1;
export const CO2_SLIDER_MARKS = new Array(NUM_MARKS)
  .fill(null)
  .map((emptyElement, index) => ({
    value: CO2_SLIDER_MIN + index * CO2_SLIDER_STEP,
    label:
      index === 0 || index === NUM_MARKS - 1
        ? CO2_SLIDER_MIN + index * CO2_SLIDER_STEP
        : null,
  }));
export const STATIC_CO2_ADDED_PER_INCREMENT = 2;
export const ACTIVE_CO2_ADDED_PER_INCREMENT = 4;
export const CARBON_RADIUS = 12;
export const OXYGEN_RADIUS = 10;
export const NITROGEN_RADIUS = 10;
export const NITROGEN_FILL = '#7393B3';
export const HYDROGEN_RADIUS = 8;
export const ACTIVE_EQUATION_COLOR = 'green';
export const INACTIVE_EQUATION_COLOR = '#D3D3D3';
export const DEFAULT_EQUATION_COLOR = 'black';
export const ACTIVE_EQUATION_WEIGHT = '900';
export const DEFAULT_EQUATION_WEIGHT = '400';
export const ACTIVE_EQUATION_BACKGROUND = '#d6fed2';
export const PERIODS = [
  { year: '1900', co2: 300 },
  { year: '2015', co2: 400 },
  { year: '2050', co2: 500 },
];
export const DEFAULT_PERIOD = PERIODS[1];
export const DEFAULT_YEAR = DEFAULT_PERIOD.year;
export const DEFAULT_CO2 = DEFAULT_PERIOD.co2;

export const REG_ARROW_WIDTH = '5%';
export const LARGE_ARROW_WIDTH = '6%';

export const TABLE_ACTIVE_ANIMATION = {
  animation: 'blinker 2s linear infinite',
  '@keyframes blinker': { '50%': { opacity: 0.5 } },
};
export const DEFAULT_ARROWS = {
  top: { up: false, down: false },
  middle: { up: false, down: false },
  bottom: { up: false, down: false },
};

export const TABLE_EXTRA_LABEL_COLOR = '#D22B2B';
export const HYDROGEN_BOX_BORDER = `2px solid ${TABLE_EXTRA_LABEL_COLOR}`;

export const EQ_SCALE_COLOR_EQ = '#FFB302';
export const EQ_SCALE_COLOR_DISEQ = '#AA4A44';
export const EQ_SCALE_ROTATE_EQ = '0deg';
export const EQ_SCALE_ROTATE_DISEQ = '-10deg';
export const EQ_SCALE_EMOJI_EQ = '😎';
export const EQ_SCALE_EMOJI_DISEQ = '⛔';
