import { useContext } from 'react';

import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';

import { t } from 'i18next';

import {
  setDistribution,
  setEquilibriumCarbonDioxide,
  setPHCarbonDioxide,
  setSliderCarbonDioxide,
  setYear,
} from '@/actions/app-settings';
import {
  RESPONSIVE_CAPTION_STYLES,
  RESPONSIVE_FONT_STYLES,
} from '@/constants/css';
import { DEFAULT_CO2, PERIODS } from '@/constants/side-menu';
import { ACTIVE_CO2_DISTRIBUTION } from '@/constants/slider-molecules/active-molecules';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { computeEquilibriumDistribution } from '@/utils/molecules';

import SideMenuHeader from '../common/SideMenuHeader';

const container = {
  flexDirection: 'row',
  display: 'flex',
  justifyContent: 'space-between',
  width: '90%',
  margin: '0 auto',
};

const radioButton = {
  '& svg': {
    width: '0.8em',
    height: '0.8em',
  },
};

const extraLabelText = {
  color: 'grey',
};

const radioButtonContainer = { display: 'flex', flexDirection: 'column' };

const Period = (): JSX.Element => {
  const { state, dispatch } = useContext(AppSettingsContext);
  const { isPlaying, allowVariableChange, year: currentYear } = state;

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newYear = (event.target as HTMLInputElement).value;
    const newCarbonDioxide =
      PERIODS.find((period) => period.year === newYear)?.co2 || DEFAULT_CO2;
    dispatch(setYear(newYear));
    dispatch(setSliderCarbonDioxide(newCarbonDioxide));
    dispatch(setEquilibriumCarbonDioxide(newCarbonDioxide));
    dispatch(setPHCarbonDioxide(newCarbonDioxide));
    const equilibriumDistribution = computeEquilibriumDistribution(
      ACTIVE_CO2_DISTRIBUTION,
      newCarbonDioxide,
    );
    dispatch(setDistribution(equilibriumDistribution));
  };

  return (
    <Box className="continuous-mode-6">
      <SideMenuHeader label={t('Year')} />
      <RadioGroup sx={container} value={currentYear} onChange={onChange}>
        {PERIODS.map(({ year, co2 }) => (
          <Box key={year} sx={radioButtonContainer}>
            <FormControlLabel
              value={year}
              control={<Radio color="primary" size="small" sx={radioButton} />}
              label={
                <Typography sx={{ ...RESPONSIVE_FONT_STYLES }}>
                  {year}
                </Typography>
              }
              disabled={isPlaying || !allowVariableChange}
            />
            <Typography
              sx={{ ...extraLabelText, ...RESPONSIVE_CAPTION_STYLES }}
            >
              ({co2} ppm)
            </Typography>
          </Box>
        ))}
      </RadioGroup>
    </Box>
  );
};

export default Period;
