import { memo, useMemo } from 'react';
import { Typography, useTheme } from '@mui/material';
import PropTypes from 'prop-types';

import { filterFieldsFromObject } from '~/utils/object';
import { ATTRIBUTES_ORDER } from '~/utils/constants';
import formatIpfsImg from '~/utils/formatIpfsImg';

import * as Styled from './styles';

const AdditionalDetails = ({ data }) => {
  const {
    palette: { grey }
  } = useTheme();
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
    <Styled.Container>
      {parsedData.map(
        ([key, value]) =>
          value !== '' && (
            <Styled.BoxData key={key}>
              <Typography
                color={grey[500]}
                variant="body1"
                fontWeight="500"
                sx={{ fontSize: '10px', letterSpacing: '0px' }}>
                {key?.toUpperCase()}
              </Typography>
              <Typography color={grey[600]} variant="subtitle1" lineHeight="20px">
                {value}
              </Typography>
              {/* TODO: NEED CALCULATE IT */}
              <Typography
                color={grey[500]}
                variant="body1"
                fontWeight="400"
                sx={{ letterSpacing: '0px' }}>
                4.5% have this trait
              </Typography>
            </Styled.BoxData>
          )
      )}
    </Styled.Container>
  );
};

AdditionalDetails.propTypes = {
  data: PropTypes.object.isRequired
};

export default memo(AdditionalDetails);
