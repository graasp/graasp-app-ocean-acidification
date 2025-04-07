import { MOTION_INTERVAL } from '@/constants/motion/motion-intervals';
import { DEFAULT_CO2, DEFAULT_YEAR } from '@/constants/side-menu';
import { ACTIVE_CO2_DISTRIBUTION } from '@/constants/slider-molecules/active-molecules';
import { SEQUENTIAL } from '@/constants/strings';
import { computeEquilibriumDistribution } from '@/utils/molecules';
import { ActiveMoleculesType } from '@/utils/molecules/types';

import {
  INCREMENT_INTERVAL_COUNT,
  RESET_SETTINGS,
  SET_ALLOW_VARIABLE_CHANGE,
  SET_ANIMATION_INDEX,
  SET_CARBON_DIOXIDE_CHANGE,
  SET_DIMENSIONS,
  SET_DISEQUILIBRIUM_CYCLES_BEGIN_AT,
  SET_DISTRIBUTION,
  SET_EQUILIBRIUM_CARBON_DIOXIDE,
  SET_INTERVAL_COUNT_DIRECTLY,
  SET_MODE,
  SET_PH_CARBON_DIOXIDE,
  SET_SLIDER_CARBON_DIOXIDE,
  SET_YEAR,
  STOP_ANIMATION,
  TOGGLE_ANIMATION_IN_MOTION,
  TOGGLE_PLAY,
  TOGGLE_SHOW_SCALE,
} from '../types/app-settings';

type Dimensions = {
  width: number;
  height: number;
};
export interface appSettingsType {
  dimensions: Dimensions;
  intervalCount: number;
  isPlaying: boolean;
  allowVariableChange: boolean;
  mode: string;
  animationIndex: number;
  animationInMotion: boolean;
  showScale: boolean;
  activeMoleculeDistribution: ActiveMoleculesType[];
  sliderCarbonDioxide: number;
  equilibriumCarbonDioxide: number;
  disequilibriumCyclesBeginAt: number;
  pHCarbonDioxide: number;
  carbonDioxideChange: number;
  year: string;
}

export interface appSettingsActionType {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
}

export const initialAppSettings = {
  dimensions: { width: 0, height: 0 },
  intervalCount: 0,
  isPlaying: false,
  allowVariableChange: true,
  mode: SEQUENTIAL,
  animationIndex: 0,
  animationInMotion: false,
  showScale: false,
  activeMoleculeDistribution: computeEquilibriumDistribution(
    ACTIVE_CO2_DISTRIBUTION,
    DEFAULT_CO2,
  ),
  sliderCarbonDioxide: DEFAULT_CO2,
  equilibriumCarbonDioxide: DEFAULT_CO2,
  disequilibriumCyclesBeginAt: 0,
  pHCarbonDioxide: DEFAULT_CO2,
  carbonDioxideChange: 0,
  year: DEFAULT_YEAR,
};

export const appSettingsReducer = (
  state: appSettingsType,
  action: appSettingsActionType,
): appSettingsType => {
  const { type, payload } = action;
  switch (type) {
    case SET_DIMENSIONS:
      return { ...state, dimensions: payload };
    case TOGGLE_PLAY:
      return {
        ...state,
        isPlaying: !state.isPlaying,
      };
    case INCREMENT_INTERVAL_COUNT:
      return { ...state, intervalCount: state.intervalCount + 1 };
    case RESET_SETTINGS:
      return {
        ...initialAppSettings,
        dimensions: { ...state.dimensions },
        mode: state.mode,
      };
    case SET_MODE: {
      return {
        ...initialAppSettings,
        dimensions: { ...state.dimensions },
        mode: payload,
      };
    }
    case SET_ANIMATION_INDEX: {
      return { ...state, animationIndex: payload };
    }
    case TOGGLE_ANIMATION_IN_MOTION: {
      return { ...state, animationInMotion: !state.animationInMotion };
    }
    case TOGGLE_SHOW_SCALE: {
      return { ...state, showScale: !state.showScale };
    }
    case SET_SLIDER_CARBON_DIOXIDE: {
      return { ...state, sliderCarbonDioxide: payload };
    }
    case SET_DISTRIBUTION: {
      return { ...state, activeMoleculeDistribution: payload };
    }
    case SET_EQUILIBRIUM_CARBON_DIOXIDE: {
      return { ...state, equilibriumCarbonDioxide: payload };
    }
    case SET_DISEQUILIBRIUM_CYCLES_BEGIN_AT: {
      return { ...state, disequilibriumCyclesBeginAt: payload };
    }
    case SET_INTERVAL_COUNT_DIRECTLY: {
      return { ...state, intervalCount: payload };
    }
    case SET_PH_CARBON_DIOXIDE: {
      return { ...state, pHCarbonDioxide: payload };
    }
    case SET_CARBON_DIOXIDE_CHANGE: {
      return { ...state, carbonDioxideChange: payload };
    }
    case SET_YEAR: {
      return { ...state, year: payload };
    }
    case STOP_ANIMATION: {
      const { isPlaying, intervalCount } = state;
      let excessIntervals = 0;
      if (isPlaying && intervalCount % MOTION_INTERVAL !== 0) {
        excessIntervals = intervalCount % MOTION_INTERVAL;
      }
      return {
        ...state,
        isPlaying: false,
        intervalCount: intervalCount - excessIntervals,
      };
    }
    case SET_ALLOW_VARIABLE_CHANGE:
      return { ...state, allowVariableChange: payload };
    default:
      return state;
  }
};
