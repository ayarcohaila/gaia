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
    <Grid
      bgcolor={grey[200]}
      borderRadius="14px"
      display="grid"
      gridAutoFlow="row"
      gridTemplateColumns="1fr 1fr"
      p={isSmallDevice ? '24px 22px' : '20px 24px 20px 32px'}
      rowGap={3.5}>
      {parsedData.map(
        ([key, value]) =>
          value !== '' && (
            <Box key={key}>
              <Typography color={grey[500]} variant="subtitle1" fontWeight="normal">
                {convertCamelCaseToSentenceCase(key)}:
              </Typography>
              <Typography color={grey[600]} mt={0.75} variant="subtitle1" textAlign="left">
                {value}
              </Typography>
            </Box>
          )
      )}
    </Grid>
  );
};

AdditionalDetails.propTypes = {
  data: PropTypes.object.isRequired
};

export default memo(AdditionalDetails);
