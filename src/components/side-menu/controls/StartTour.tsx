import { useContext } from 'react';

import { Info } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';

import { DISABLED, PRIMARY } from '@/constants/strings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

const styles = { fontSize: '0.9em' };

const StartTour = (): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { isPlaying } = state;

  const disabled = isPlaying;
  const color = disabled ? DISABLED : PRIMARY;

  return (
    <Tooltip title="Start tour" placement="left">
      <span>
        <IconButton disabled={disabled}>
          <Info color={color} sx={styles} />
        </IconButton>
      </span>
    </Tooltip>
  );
};

export default StartTour;
