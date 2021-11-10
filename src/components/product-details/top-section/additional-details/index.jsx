import { memo } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import PropTypes from 'prop-types';

import { useBreakpoints } from '~/hooks';
import { convertCamelCaseToSentenceCase, parseStringWithEllipsis } from '~/utils/string';
import { filterFieldsFromObject } from '~/utils/object';

const AdditionalDetails = ({ data }) => {
  const {
    palette: { grey }
  } = useTheme();
  const { isSmallDevice } = useBreakpoints();
  const excludeAdditionalFields = ['id', 'img', 'uri', 'title', 'description'];

  const filteredData = filterFieldsFromObject(excludeAdditionalFields, data);
  const parsedData = {
    ...filteredData,
    arbitrary: parseStringWithEllipsis(data.arbitrary, 5, 3)
  };

  return (
    <Box
      bgcolor={grey[200]}
      borderRadius="14px"
      p={isSmallDevice ? '24px 22px' : '20px 40px 20px 24px'}>
      {Object.entries(parsedData).map(
        ([key, value], index) =>
          value !== '' && (
            <Box key={key} mt={index ? 3.5 : 0}>
              <Typography color={grey[500]} variant="subtitle1" fontWeight="normal">
                {convertCamelCaseToSentenceCase(key)}
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

// AdditionalDetails.propTypes = {
//   data: PropTypes.shape({
//     seriesName: PropTypes.string,
//     owner: PropTypes.string,
//     set: PropTypes.string,
//     serialNumber: PropTypes.string,
//     arbitrary: PropTypes.string
//   })
// };

AdditionalDetails.propTypes = {
  data: PropTypes.object
};

AdditionalDetails.defaultProps = {
  data: {
    seriesName: 'Lorem ipsum dolor sit amet',
    owner:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    set: 'Consectetur adipiscing elit',
    serialNumber: '203 -200 - 0 - 293',
    arbitrary: '0x495aiosda928kadase93'
  }
};

export default memo(AdditionalDetails);
