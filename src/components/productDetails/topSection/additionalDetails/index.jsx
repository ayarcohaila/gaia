import { memo, useMemo } from 'react';
import { Typography, useTheme } from '@mui/material';
import PropTypes from 'prop-types';

import { filterFieldsFromObject } from '~/utils/object';
import formatIpfsImg from '~/utils/formatIpfsImg';
import useCollectionConfig from '~/hooks/useCollectionConfig';
import useBreakpoints from '~/hooks/useBreakpoints';

import * as Styled from './styles';

const AdditionalDetails = ({ data, computedProps, attributesOrder }) => {
  const {
    palette: { grey }
  } = useTheme();

  const { isSmallDevice } = useBreakpoints();

  const { config, collectionsNames } = useCollectionConfig();

  const excludeAdditionalFields = ['id', 'img', 'uri', 'title', 'video', 'description'];

  const filteredData = filterFieldsFromObject(excludeAdditionalFields, {
    ...data,
    video: formatIpfsImg(data.video)
  });

  const parsedData = useMemo(
    () =>
      Object.entries(filteredData).sort(
        ([a], [b]) => attributesOrder.indexOf(a) - attributesOrder.indexOf(b)
      ),
    [filteredData]
  );

  const handleTrait = (key, value) => {
    if (
      config.collectionName === collectionsNames.BALLERZ ||
      config.collectionName === collectionsNames.SNEAKERZ
    ) {
      return ((computedProps[key][value] / config.collectionSize) * 100).toFixed(2);
    }
    return 100;
  };

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
                {key?.toUpperCase().replace('_', ' ')}
              </Typography>
              <Typography
                color={grey[600]}
                variant="subtitle1"
                lineHeight="20px"
                textAlign="center">
                {value}
              </Typography>
              <Typography
                color={grey[500]}
                variant="body1"
                fontWeight="400"
                sx={{
                  letterSpacing: '0px',
                  fontSize: isSmallDevice && '10px'
                }}>
                {handleTrait(key, value)}% have this trait
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
