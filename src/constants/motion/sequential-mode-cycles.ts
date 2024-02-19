const CO2_MIGRATION = {
  co2: {
    begins: { x: 0.2, y: 0.1, rotation: -80 },
    ends: { x: 0.1, y: 0.4, rotation: 120 },
  },
};

const CARBONIC_ACID_FORMATION = {
  co2: { begins: { x: 0.25, y: 0.5, rotation: 80 } },
  water: { begins: { x: 0.2, y: 0.6, rotation: 30 } },
};

const CARBONIC_ACID_DISSOCIATION = {
  carbonicAcid: {
    begins: { x: 0.2, y: 0.85, rotation: 150 },
    ends: { x: 0.4, y: 0.65, rotation: 30 },
  },
  hydrogenEndsY: 0.625,
};

const REVERSE_DISSOCIATION = {
  bicarbonate: {
    begins: { x: 0.7, y: 0.6, rotation: 100 },
    ends: { x: 0.8, y: 0.75, rotation: -100 },
  },
  hydrogen: {
    begins: { x: 0.65, y: 0.55, rotation: 0 },
    ends: { x: 0, y: 0, rotation: 0 },
  },
};

const REVERSE_FORMATION = {
  carbonicAcid: { begins: { x: 0.7, y: 0.85, rotation: 50 } },
};

const REVERSE_MIGRATION = {
  co2: {
    begins: { x: 0.9, y: 0.5, rotation: 110 },
    ends: { x: 0.8, y: 0.2, rotation: -90 },
  },
};

export const SEQUENTIAL_MODE_CYCLE = {
  co2Migration: CO2_MIGRATION,
  carbonicAcidFormation: CARBONIC_ACID_FORMATION,
  carbonicAcidDissociation: CARBONIC_ACID_DISSOCIATION,
  reverseDissociation: REVERSE_DISSOCIATION,
  reverseFormation: REVERSE_FORMATION,
  reverseMigration: REVERSE_MIGRATION,
};
