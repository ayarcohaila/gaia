import { memo } from 'react';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import PropTypes from 'prop-types';

import { useBreakpoints } from '~/hooks';
import { filterFieldsFromObject } from '~/utils/object';
import { convertCamelCaseToSentenceCase } from '~/utils/string';
import { ATTRIBUTES_ORDER } from '~/utils/constants';

const AdditionalDetails = ({ data }) => {
  const {
    palette: { grey }
  } = useTheme();
  const { isSmallDevice } = useBreakpoints();
  const excludeAdditionalFields = ['id', 'img', 'uri', 'title', 'description'];

  const filteredData = filterFieldsFromObject(excludeAdditionalFields, data);

  const parsedData = Object.entries(filteredData).sort(
    ([a], [b]) => ATTRIBUTES_ORDER.indexOf(a) - ATTRIBUTES_ORDER.indexOf(b)
  );

  return (
    <Box bgcolor={grey[200]} borderRadius="14px" p={isSmallDevice ? '24px 22px' : '20px 32px'}>
      {parsedData.map(
        ([key, value], index) =>
          value !== '' && (
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
              <Typography color={grey[600]} variant="subtitle1" textAlign="left">
                {value}
              </Typography>
            </Grid>
          )
      )}
    </Box>
  );
};

AdditionalDetails.propTypes = {
  data: PropTypes.object.isRequired
};

export default memo(AdditionalDetails);
