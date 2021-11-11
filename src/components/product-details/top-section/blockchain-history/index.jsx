import { memo, useMemo } from 'react';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import PropTypes from 'prop-types';

import { useBreakpoints } from '~/hooks';
import { convertCamelCaseToSentenceCase, formatDate } from '~/utils/string';

const BlockchainHistory = ({ data }) => {
  const {
    palette: { grey }
  } = useTheme();
  const { isSmallDevice } = useBreakpoints();

  const parsedData = useMemo(
    () => ({
      ...data,
      mintDate: formatDate(data?.mintDate),
      lastActivity: formatDate(data?.lastActivity)
    }),
    [formatDate, data]
  );

  return (
    <Box bgcolor={grey[200]} borderRadius="14px" p={isSmallDevice ? '24px 22px' : '20px 32px'}>
      {Object.entries(parsedData).map(([key, value], index) => (
        <Grid
          alignItems="center"
          container
          justifyContent="space-between"
          key={key}
          mt={index ? 2.8 : 0}
          width="90%">
          <Typography color={grey[500]} variant="subtitle1" fontWeight="normal">
            {convertCamelCaseToSentenceCase(key)}:
          </Typography>
          <Box width={isSmallDevice ? '55%' : '45%'} sx={{ wordBreak: 'break-word' }}>
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
  }).isRequired
};

export default memo(BlockchainHistory);
