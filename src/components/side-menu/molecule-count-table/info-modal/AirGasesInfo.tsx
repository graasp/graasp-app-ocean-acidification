import { Box, Typography } from '@mui/material';

import { t } from 'i18next';

import ModalCarbonDioxide, { co2Label } from './ModalCarbonDioxide';
import ModalDinitrogen, { dinitrogenLabel } from './ModalDinitrogen';
import ModalDioxygen, { dioxygenLabel } from './ModalDioxygen';
import Row from './ModalRow';

const container = { width: '100%' };

const AirGasesInfo = (): JSX.Element => (
  <Box sx={container}>
    <Typography variant="caption">{t('The air contains')}:</Typography>
    <Row molecule={<ModalDinitrogen />} label={dinitrogenLabel} percent="78%" />
    <Row molecule={<ModalDioxygen />} label={dioxygenLabel} percent="21%" />
    <Box>...</Box>
    <Row molecule={<ModalCarbonDioxide />} label={co2Label} percent="0.04%" />
    <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
      {t('Only')} CO<sub>2</sub> {t('is shown in the simulation')}.
    </Typography>
  </Box>
);

export default AirGasesInfo;
