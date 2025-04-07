import { appSettingsActionType } from '@/reducers/app-settings';
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
} from '@/types/app-settings';
import { ActiveMoleculesType } from '@/utils/molecules/types';

interface Dimensions {
  width: number;
  height: number;
}

export const setDimensions = (payload: Dimensions): appSettingsActionType => ({
  type: SET_DIMENSIONS,
  payload,
});

export const togglePlay = (): appSettingsActionType => ({
  type: TOGGLE_PLAY,
});

export const incrementIntervalCount = (): appSettingsActionType => ({
  type: INCREMENT_INTERVAL_COUNT,
});

export const resetSettings = (): appSettingsActionType => ({
  type: RESET_SETTINGS,
});

export const setMode = (payload: string): appSettingsActionType => ({
  type: SET_MODE,
  payload,
});

export const setAnimationIndex = (payload: number): appSettingsActionType => ({
  type: SET_ANIMATION_INDEX,
  payload,
});

export const toggleAnimationInMotion = (): appSettingsActionType => ({
  type: TOGGLE_ANIMATION_IN_MOTION,
});

export const toggleShowScale = (): appSettingsActionType => ({
  type: TOGGLE_SHOW_SCALE,
});

export const setDistribution = (
  payload: ActiveMoleculesType[],
): appSettingsActionType => ({
  type: SET_DISTRIBUTION,
  payload,
});

export const setSliderCarbonDioxide = (
  payload: number,
): appSettingsActionType => ({
  type: SET_SLIDER_CARBON_DIOXIDE,
  payload,
});

export const setEquilibriumCarbonDioxide = (
  payload: number,
): appSettingsActionType => ({
  type: SET_EQUILIBRIUM_CARBON_DIOXIDE,
  payload,
});

export const setDisequilibriumCyclesBeginAt = (
  payload: number,
): appSettingsActionType => ({
  type: SET_DISEQUILIBRIUM_CYCLES_BEGIN_AT,
  payload,
});

export const setIntervalCountDirectly = (
  payload: number,
): appSettingsActionType => ({
  type: SET_INTERVAL_COUNT_DIRECTLY,
  payload,
});

export const setPHCarbonDioxide = (payload: number): appSettingsActionType => ({
  type: SET_PH_CARBON_DIOXIDE,
  payload,
});

export const setCarbonDioxideChange = (
  payload: number,
): appSettingsActionType => ({
  type: SET_CARBON_DIOXIDE_CHANGE,
  payload,
});

export const setYear = (payload: string): appSettingsActionType => ({
  type: SET_YEAR,
  payload,
});

export const stopAnimation = (): appSettingsActionType => ({
  type: STOP_ANIMATION,
});

export const setAllowVariableChange = (
  payload: boolean,
): appSettingsActionType => ({
  type: SET_ALLOW_VARIABLE_CHANGE,
  payload,
});
