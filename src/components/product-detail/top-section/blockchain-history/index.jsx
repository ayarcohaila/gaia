import { memo } from 'react';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import PropTypes from 'prop-types';

import {
  convertCamelCaseToSentenceCase,
  formatDate,
  parseStringWithEllipsis
} from '~/utils/string';

const BlockchainHistory = ({ data }) => {
  const {
    palette: { grey }
  } = useTheme();

  const parsedData = {
    ...data,
    mintDate: formatDate(data.mintDate),
    lastActivity: formatDate(data.lastActivity),
    contract: parseStringWithEllipsis(data.contract, 5, 3)
  };

  return (
    <Box bgcolor={grey[200]} borderRadius="14px" p="20px 100px 20px 24px">
      {Object.entries(parsedData).map(([key, value], index) => (
        <Grid
          alignItems="center"
          container
          key={key}
          justifyContent="space-between"
          mt={index ? 3.5 : 0}>
          <Typography color={grey[500]} variant="subtitle1" fontWeight="normal">
            {convertCamelCaseToSentenceCase(key)}
          </Typography>
          <Box width="150px">
            <Typography color={grey[600]} variant="subtitle1" textAlign="left">
              {value}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Box>
  );
};

BlockchainHistory.propTypes = {
  data: PropTypes.shape({
    creator: PropTypes.string,
    owner: PropTypes.string,
    mintDate: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    lastActivity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    contract: PropTypes.string
  })
};

BlockchainHistory.defaultProps = {
  data: {
    creator: 'WarnerBrosStudios',
    owner: 'WarnerBrosStudios',
    mintDate: 1635792844000,
    lastActivity: 1637780044000,
    contract: '0x495aiosda928kadase93'
  }
};

export default memo(BlockchainHistory);
