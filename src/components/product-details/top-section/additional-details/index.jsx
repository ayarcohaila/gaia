import { memo } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import PropTypes from 'prop-types';

import { useBreakpoints } from '~/hooks';
import { filterFieldsFromObject } from '~/utils/object';
import { convertCamelCaseToSentenceCase } from '~/utils/string';

const AdditionalDetails = ({ data }) => {
  const {
    palette: { grey }
  } = useTheme();
  const { isSmallDevice } = useBreakpoints();
  const excludeAdditionalFields = ['id', 'img', 'uri', 'title', 'description'];

  const filteredData = filterFieldsFromObject(excludeAdditionalFields, data);

  return (
    <Box
      bgcolor={grey[200]}
      borderRadius="14px"
      p={isSmallDevice ? '24px 22px' : '20px 40px 20px 24px'}>
      {Object.entries(filteredData).map(
        ([key, value], index) =>
          value !== '' && (
            <Box key={key} mt={index ? 3.5 : 0}>
              <Typography color={grey[500]} variant="subtitle1" fontWeight="normal">
                {convertCamelCaseToSentenceCase(key)}:
              </Typography>
              <Typography color={grey[600]} mt={0.75} variant="subtitle1" textAlign="left">
                {value}
              </Typography>
            </Box>
          )
      )}
    </Box>
  );
};

AdditionalDetails.propTypes = {
  data: PropTypes.object.isRequired
};

export default memo(AdditionalDetails);
