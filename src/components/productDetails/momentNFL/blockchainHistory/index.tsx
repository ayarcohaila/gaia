import { Box, Grid, Typography, useTheme } from '@mui/material';
import { memo, useMemo } from 'react';
import useBreakpoints from '~/hooks/useBreakpoints';
import { convertCamelCaseToSentenceCase, formatDate } from '~/utils/string';
import { ValueContainer } from './styles';
import { BlockchainHistoryProps } from './types';

const BlockchainHistory = (props: BlockchainHistoryProps) => {
  const { data } = props;
  const {
    palette: { grey }
  } = useTheme();
  const { isSmallDevice } = useBreakpoints();

  const parsedData = useMemo(
    () => ({
      ...data,
      mintDate: formatDate(data?.mintDate)
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
          mt={index ? (isSmallDevice ? 4 : 2.8) : 0}
          width="90%">
          <Typography color={grey[500]} variant="subtitle1" fontWeight="normal">
            {convertCamelCaseToSentenceCase(key)}:
          </Typography>
          <ValueContainer width={isSmallDevice ? '55%' : '45%'}>
            <Typography color={grey[600]} variant="subtitle1" lineHeight="20px" textAlign="center">
              {value}
            </Typography>
          </ValueContainer>
        </Grid>
      ))}
    </Box>
  );
};

export default memo(BlockchainHistory);
