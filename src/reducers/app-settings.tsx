import { PERCENT_HOLES_INCREMENT } from '@/constants/canvas';
import { CONTINUOUS, SEQUENTIAL } from '@/constants/strings';

import {
  DECREMENT_REEF_HOLES,
  INCREMENT_INTERVAL_COUNT,
  INCREMENT_REEF_HOLES,
  RESET_SETTINGS,
  TOGGLE_MODE,
  TOGGLE_PAUSE,
} from '../types/app-settings';

export interface appSettingsType {
  intervalCount: number;
  isPaused: boolean;
  reefHoles: number;
  mode: string;
}

export interface appSettingsActionType {
  type: string;
}

export const initialAppSettings = {
  intervalCount: 0,
  isPaused: true,
  reefHoles: 0,
  mode: SEQUENTIAL,
};

export const appSettingsReducer = (
  state: appSettingsType,
  action: appSettingsActionType,
): appSettingsType => {
  const { type } = action;
  switch (type) {
    case TOGGLE_PAUSE:
      return { ...state, isPaused: !state.isPaused };
    case INCREMENT_INTERVAL_COUNT:
      return { ...state, intervalCount: state.intervalCount + 1 };
    case RESET_SETTINGS:
      return { ...initialAppSettings };
    case DECREMENT_REEF_HOLES: {
      const updatedHoles = Math.max(
        state.reefHoles - PERCENT_HOLES_INCREMENT,
        0,
      );
      return { ...state, reefHoles: updatedHoles };
    }
    case INCREMENT_REEF_HOLES: {
      const updatedHoles = Math.min(
        state.reefHoles + PERCENT_HOLES_INCREMENT,
        1,
      );
      return { ...state, reefHoles: updatedHoles };
    }
    case TOGGLE_MODE: {
      return {
        ...state,
        mode: state.mode === SEQUENTIAL ? CONTINUOUS : SEQUENTIAL,
      };
    }
    default:
      return state;
  }
};
