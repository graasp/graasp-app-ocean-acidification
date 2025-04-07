import { useContext } from 'react';

import { Box } from '@mui/material';

import { t } from 'i18next';

import { CYCLES } from '@/constants/motion/continuous-mode-cycles';
import {
  BACKGROUND_CO2_DISTRIBUTION,
  STATIC_CO2_DISTRIBUTION,
} from '@/constants/slider-molecules/static-carbon-dioxides';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { computeStaticDistribution } from '@/utils/molecules';
import { AllArrowsState } from '@/utils/molecules/types';
import { countActiveCycles } from '@/utils/table-counts/active-cycles';
import { countCycles } from '@/utils/table-counts/all-cycles';
import { countContinuousCycles } from '@/utils/table-counts/continuous-cycles';
import { countStaticCarbonDioxides } from '@/utils/table-counts/static-carbon-dioxides';

import SideMenuHeader from '../common/SideMenuHeader';
import ExtraLabel from './ExtraLabel';
import ArrowsGroup from './table-arrows/ArrowsGroup';
import AllRows from './table-rows/AllRows';

const container = { width: '100%' };
const table = { width: '90%', margin: '0 auto', position: 'relative' };

interface Props {
  arrowsState: AllArrowsState;
}

const MoleculeCountTable = ({ arrowsState }: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const {
    activeMoleculeDistribution,
    sliderCarbonDioxide,
    intervalCount,
    disequilibriumCyclesBeginAt,
    showScale,
  } = state;
  const staticCarbonDioxides = computeStaticDistribution(
    STATIC_CO2_DISTRIBUTION,
    sliderCarbonDioxide,
    BACKGROUND_CO2_DISTRIBUTION,
  );

  const continuousCyclesCount = countContinuousCycles(CYCLES, intervalCount);
  const activeCyclesCount = countActiveCycles(
    activeMoleculeDistribution,
    intervalCount,
    disequilibriumCyclesBeginAt,
  );
  const staticCarbonDioxidesCount =
    countStaticCarbonDioxides(staticCarbonDioxides);

  const allMoleculesCount = countCycles([
    continuousCyclesCount,
    activeCyclesCount,
    staticCarbonDioxidesCount,
  ]);

  return (
    <Box sx={container}>
      <SideMenuHeader label={t('Molecule Counts')} showScale />
      <Box sx={table} className="continuous-mode-3">
        <ArrowsGroup arrowsState={arrowsState} />
        <AllRows arrowsState={arrowsState} moleculesCount={allMoleculesCount} />
        {showScale && <ExtraLabel />}
      </Box>
    </Box>
  );
};

export default MoleculeCountTable;
