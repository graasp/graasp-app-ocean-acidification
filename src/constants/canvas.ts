export const INTERVAL_COUNT_INCREMENTED_EVERY = 25;

export const CANVAS_WIDTH = 0.75;

export const SKY_HEIGHT = 0.35;
export const SEA_HEIGHT = 0.65;
export const REEF_BLOCKER_HEIGHT = 0.121;

export const SKY_GRADIENT_LIGHT_END = '#c8def2';
export const SKY_GRADIENT = [0, '#a4c8ea', 1, SKY_GRADIENT_LIGHT_END];
export const SEA_FILL = '#6ba5c9';
export const REEF_BLOCKER_GRADIENT = [0, '#6ba5c9', 1, '#6b91a0'];

export const CARBON_RADIUS_CONT = 0.0065;
export const OXYGEN_RADIUS_CONT = (15 / 17) * CARBON_RADIUS_CONT;
export const HYDROGEN_RADIUS_CONT = (10 / 13) * OXYGEN_RADIUS_CONT;
export const OXYGEN_PLUS_HYDROGEN_CONT =
  OXYGEN_RADIUS_CONT + HYDROGEN_RADIUS_CONT;
export const CARBON_PLUS_OXYGEN_CONT = CARBON_RADIUS_CONT + OXYGEN_RADIUS_CONT;
export const CARBON_RADIUS_SEQ = CARBON_RADIUS_CONT * 1.5;
export const OXYGEN_RADIUS_SEQ = (15 / 17) * CARBON_RADIUS_SEQ;
export const HYDROGEN_RADIUS_SEQ = (10 / 13) * OXYGEN_RADIUS_SEQ;
export const OXYGEN_PLUS_HYDROGEN_SEQ = OXYGEN_RADIUS_SEQ + HYDROGEN_RADIUS_SEQ;
export const CARBON_PLUS_OXYGEN_SEQ = CARBON_RADIUS_SEQ + OXYGEN_RADIUS_SEQ;
export const CARBON_FILL = 'black';
export const OXYGEN_FILL = 'indianred';
export const HYDROGEN_FILL = 'white';
export const HYDROGENS_ANGLE = 104.5 * (Math.PI / 180);
export const HYDROGEN_X_OFFSET_CONT =
  Math.sin(HYDROGENS_ANGLE / 2) * OXYGEN_PLUS_HYDROGEN_CONT;
export const HYDROGEN_Y_OFFSET_CONT =
  Math.cos(HYDROGENS_ANGLE / 2) * OXYGEN_PLUS_HYDROGEN_CONT;
export const HYDROGEN_X_OFFSET_SEQ =
  Math.sin(HYDROGENS_ANGLE / 2) * OXYGEN_PLUS_HYDROGEN_SEQ;
export const HYDROGEN_Y_OFFSET_SEQ =
  Math.cos(HYDROGENS_ANGLE / 2) * OXYGEN_PLUS_HYDROGEN_SEQ;
// Carbonic acid; angles derived from illustration by teachers
export const OXYGENS_ANGLE = 125.5 * (Math.PI / 180);
export const LEFT_OXYGEN_ANGLE = 8.25 * (Math.PI / 180);

export const PH_SCALE_BEGINS_X = 0.2;
export const PH_SCALE_BEGINS_Y = -0.11;
export const PH_SCALE_WIDTH = 0.6;
export const PH_SCALE_HEIGHT = 0.075;
export const PH_SCALE_FILL = '#ffd8a4';
export const MARKER_FILL = '#1a1a1b';
export const MARKER_BORDER_WIDTH = 6;
export const MARKER_WIDTH = 0.035;
export const PH_SCALE_POINTS = [
  { pH: 7.87, co2: 600 },
  { pH: 7.92, co2: 550 },
  { pH: 7.98, co2: 500 },
  { pH: 8.03, co2: 450 },
  { pH: 8.08, co2: 400 },
  { pH: 8.13, co2: 350 },
  { pH: 8.19, co2: 300 },
  { pH: 8.24, co2: 250 },
  { pH: 8.29, co2: 200 },
];
export const PH_SCALE_MIN = Math.min(...PH_SCALE_POINTS.map(({ pH }) => pH));
export const PH_SCALE_MAX = Math.max(...PH_SCALE_POINTS.map(({ pH }) => pH));
export const PH_SCALE_RANGE = PH_SCALE_MAX - PH_SCALE_MIN;
export const PH_SCALE_AXIS_COLOR = 'black';
export const PH_SCALE_AXIS_HEIGHT = 5;
export const PH_SCALE_AXIS_STROKE_WIDTH = 1;
export const PH_SCALE_AXIS_LABEL_MARGIN = 2;
const LARGE_HOLE_RADIUS = 0.0075;
const SMALL_HOLE_RADIUS = 0.004;
export const PH_SCALE_HOLES = [
  { x: 0.02, y: 0.5, radius: LARGE_HOLE_RADIUS },
  { x: 0.03, y: 0.8, radius: LARGE_HOLE_RADIUS },
  { x: 0.0325, y: 0.2, radius: LARGE_HOLE_RADIUS },
  { x: 0.045, y: 0.5, radius: LARGE_HOLE_RADIUS },
  { x: 0.055, y: 0.275, radius: SMALL_HOLE_RADIUS },
  { x: 0.075, y: 0.35, radius: LARGE_HOLE_RADIUS },
  { x: 0.065, y: 0.75, radius: LARGE_HOLE_RADIUS },
  { x: 0.0825, y: 0.625, radius: SMALL_HOLE_RADIUS },
  { x: 0.1, y: 0.6, radius: LARGE_HOLE_RADIUS },
  { x: 0.1075, y: 0.25, radius: LARGE_HOLE_RADIUS },
  { x: 0.115, y: 0.8, radius: LARGE_HOLE_RADIUS },
  { x: 0.13, y: 0.4, radius: LARGE_HOLE_RADIUS },
  { x: 0.14, y: 0.7, radius: LARGE_HOLE_RADIUS },
  { x: 0.15, y: 0.25, radius: SMALL_HOLE_RADIUS },
  { x: 0.16, y: 0.5, radius: LARGE_HOLE_RADIUS },
  { x: 0.17, y: 0.8, radius: SMALL_HOLE_RADIUS },
  { x: 0.18, y: 0.3, radius: LARGE_HOLE_RADIUS },
  { x: 0.19, y: 0.6, radius: LARGE_HOLE_RADIUS },
  { x: 0.205, y: 0.35, radius: SMALL_HOLE_RADIUS },
  { x: 0.22, y: 0.7, radius: LARGE_HOLE_RADIUS },
  { x: 0.225, y: 0.35, radius: LARGE_HOLE_RADIUS },
  { x: 0.25, y: 0.55, radius: LARGE_HOLE_RADIUS },
  { x: 0.265, y: 0.225, radius: LARGE_HOLE_RADIUS },
  { x: 0.275, y: 0.775, radius: LARGE_HOLE_RADIUS },
  { x: 0.29, y: 0.475, radius: LARGE_HOLE_RADIUS },
  { x: 0.31, y: 0.225, radius: SMALL_HOLE_RADIUS },
  { x: 0.32, y: 0.675, radius: LARGE_HOLE_RADIUS },
  { x: 0.345, y: 0.45, radius: LARGE_HOLE_RADIUS },
  { x: 0.37, y: 0.275, radius: LARGE_HOLE_RADIUS },
  { x: 0.375, y: 0.75, radius: SMALL_HOLE_RADIUS },
  { x: 0.395, y: 0.475, radius: LARGE_HOLE_RADIUS },
  { x: 0.425, y: 0.7, radius: LARGE_HOLE_RADIUS },
  { x: 0.425, y: 0.3, radius: SMALL_HOLE_RADIUS },
  { x: 0.455, y: 0.55, radius: LARGE_HOLE_RADIUS },
  { x: 0.47, y: 0.35, radius: SMALL_HOLE_RADIUS },
  { x: 0.495, y: 0.3, radius: LARGE_HOLE_RADIUS },
  { x: 0.505, y: 0.75, radius: LARGE_HOLE_RADIUS },
  { x: 0.605, y: 0.8, radius: SMALL_HOLE_RADIUS },
  { x: 0.53, y: 0.4, radius: LARGE_HOLE_RADIUS },
  { x: 0.565, y: 0.6, radius: LARGE_HOLE_RADIUS },
  { x: 0.6, y: 0.3, radius: LARGE_HOLE_RADIUS },
  { x: 0.64, y: 0.5, radius: LARGE_HOLE_RADIUS },
  { x: 0.68, y: 0.7, radius: LARGE_HOLE_RADIUS },
  { x: 0.695, y: 0.3, radius: SMALL_HOLE_RADIUS },
  { x: 0.73, y: 0.6, radius: LARGE_HOLE_RADIUS },
  { x: 0.765, y: 0.325, radius: LARGE_HOLE_RADIUS },
  { x: 0.805, y: 0.4, radius: SMALL_HOLE_RADIUS },
  { x: 0.84, y: 0.5, radius: LARGE_HOLE_RADIUS },
  { x: 0.88, y: 0.5, radius: SMALL_HOLE_RADIUS },
  { x: 0.94, y: 0.65, radius: SMALL_HOLE_RADIUS },
];

export const REEF_POINTS = [
  0, 0, 0.003, -0.029, -0.029, -0.059, -0.037, -0.074, -0.029, -0.088, -0.007,
  -0.074, -0.007, -0.11, -0.029, -0.14, -0.022, -0.154, -0.015, -0.154, 0,
  -0.14, 0.015, -0.125, 0.022, -0.103, 0.029, -0.103, 0.029, -0.147, 0, -0.176,
  -0.007, -0.191, 0, -0.199, 0.029, -0.176, 0.044, -0.176, 0.059, -0.191, 0.075,
  -0.206, 0.088, -0.213, 0.096, -0.206, 0.059, -0.147, 0.059, -0.118, 0.088,
  -0.147, 0.081, -0.169, 0.078, -0.176, 0.088, -0.191, 0.103, -0.176, 0.11,
  -0.162, 0.11, -0.132, 0.125, -0.14, 0.14, -0.154, 0.147, -0.147, 0.14, -0.14,
  0.11, -0.103, 0.132, -0.088, 0.132, -0.081, 0.103, -0.074, 0.088, -0.051,
  0.096, 0,
];
export const REEF_TENSION = 0.5;
export const REEF_COLOR = '#ffd8a4';
export const REEF_GROUP = [
  { x: 0.285, y: 0.91, rotation: 0 },
  { x: 0.36, y: 0.91, rotation: 40 },
  { x: 0.545, y: 0.94, rotation: -20 },
  { x: 0.59, y: 0.89, rotation: 60 },
];
const REEF_HEIGHT = Math.min(
  ...REEF_POINTS.filter((point, index) => index % 2 !== 0),
);

export const REEF_HOLES_BEGIN_X = PH_SCALE_BEGINS_X;
export const REEF_HOLES_END_X = PH_SCALE_BEGINS_X + PH_SCALE_WIDTH;
export const REEF_HOLES_BEGIN_Y =
  Math.max(...REEF_GROUP.map(({ y }) => y)) + REEF_HEIGHT;
export const REEF_HOLES_END_Y = Math.max(...REEF_GROUP.map(({ y }) => y));
export const REEF_HOLES_RADII = [0.002, 0.004];
export const TOTAL_NUM_HOLES = 600;
export const REEF_HOLES_PERCENTAGES = PH_SCALE_POINTS.map(
  (point, index) => 1 - index * (1 / (PH_SCALE_POINTS.length - 1)),
);

export const STATIC_CARBON_DIOXIDES = [
  { x: 0.1, y: 0.3, rotation: 315 },
  { x: 0.25, y: 0.5, rotation: 30 },
  { x: 0.4, y: 0.2, rotation: 5 },
  { x: 0.55, y: 0.6, rotation: -5 },
  { x: 0.7, y: 0.4, rotation: 75 },
  { x: 0.85, y: 0.4, rotation: 15 },
];

export const STATIC_WATERS = [
  { x: 0.55, y: 0.1, rotation: 180 },
  { x: 0.6, y: 0.85, rotation: -5 },
  { x: 0.85, y: 0.35, rotation: 5 },
  { x: 0.9, y: 0.9, rotation: 15 },
];

export const STATIC_HYDROGENS = [
  { x: 0.05, y: 0.35 },
  { x: 0.425, y: 0.65 },
];

export const STATIC_BICARBONATES = [{ x: 0.425, y: 0.85, rotation: 45 }];
