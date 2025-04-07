import { useContext } from 'react';

import { PauseCircleOutline } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import { yellow } from '@mui/material/colors';

import { t } from 'i18next';

import { setAllowVariableChange, togglePlay } from '@/actions/app-settings';
import { RESPONSIVE_BUTTON_STYLES } from '@/constants/css';
import { EMPTY_STRING } from '@/constants/strings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

interface Props {
  stopDisabled: boolean;
}

const Pause = ({ stopDisabled }: Props): JSX.Element => {
  const { state, dispatch } = useContext(AppSettingsContext);
  const { isPlaying } = state;
  const disabled = !isPlaying || stopDisabled;
  const styles = { color: disabled ? EMPTY_STRING : yellow[800] };

  const onClick = (): void => {
    dispatch(togglePlay());
    dispatch(setAllowVariableChange(false));
  };

  return (
    <Tooltip title={t('Pause')}>
      <span>
        <IconButton onClick={onClick} disabled={disabled}>
          <PauseCircleOutline sx={{ ...styles, ...RESPONSIVE_BUTTON_STYLES }} />
        </IconButton>
      </span>
    </Tooltip>
  );
};

export default Pause;
