import { memo, useMemo } from 'react';
import { Box, Grid, Typography, Link, useTheme } from '@mui/material';
import PropTypes from 'prop-types';

import { useBreakpoints } from '~/hooks';
import { filterFieldsFromObject } from '~/utils/object';
import { convertCamelCaseToSentenceCase } from '~/utils/string';
import { ATTRIBUTES_ORDER } from '~/utils/constants';
import formatIpfsImg from '~/utils/formatIpfsImg';

const AdditionalDetails = ({ data }) => {
  const {
    palette: { grey }
  } = useTheme();
  const { isSmallDevice } = useBreakpoints();
  const excludeAdditionalFields = ['id', 'img', 'uri', 'title', 'description'];

  const filteredData = filterFieldsFromObject(excludeAdditionalFields, {
    ...data,
    video: formatIpfsImg(data.video)
  });

  const parsedData = useMemo(
    () =>
      Object.entries(filteredData).sort(
        ([a], [b]) => ATTRIBUTES_ORDER.indexOf(a) - ATTRIBUTES_ORDER.indexOf(b)
      ),
    [filteredData]
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
              <Box width="35%">
                {key === 'video' ? (
                  <Link href={value} sx={{ textDecoration: 'none' }}>
                    <Typography
                      color={grey[600]}
                      variant="subtitle1"
                      textAlign="left"
                      sx={{
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textAlign: 'left'
                      }}>
                      {value}
                    </Typography>
                  </Link>
                ) : (
                  <Typography color={grey[600]} variant="subtitle1" textAlign="left">
                    {value}
                  </Typography>
                )}
              </Box>
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
