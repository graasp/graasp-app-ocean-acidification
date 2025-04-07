import { Box, Typography } from '@mui/material';

import EquilibriumScale from '../molecule-count-table/EquilibriumScale';
import CustomHelpIcon from '../molecule-count-table/info-modal/HelpIcon';

const container = {
  width: '90%',
  margin: '0 auto',
  marginBottom: '5px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const extraInfo = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

interface Props {
  label: string | JSX.Element;
  showScale?: boolean;
  showTooltip?: boolean;
}

const SideMenuHeader = ({
  label,
  showScale = false,
  showTooltip = false,
}: Props): JSX.Element => (
  <Box sx={container}>
    <Typography variant="body2" fontWeight={600}>
      {label}
    </Typography>
    {(showScale || showTooltip) && (
      <Box sx={extraInfo}>
        {showScale && <EquilibriumScale />}
        {showTooltip && <CustomHelpIcon />}
      </Box>
    )}
  </Box>
);

export default SideMenuHeader;
