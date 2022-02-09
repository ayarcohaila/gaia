import { Typography, useTheme } from '@mui/material';
import { memo } from 'react';
import { AdditionalDetailsProps } from './types';

import * as Styled from './styles';

const AdditionalDetails = (props: AdditionalDetailsProps) => {
  const { listOfProps } = props;
  const { palette } = useTheme();

  return (
    <>
      <Styled.Container>
        {listOfProps.map(({ label, value }) => (
          <Styled.BoxData key={label}>
            <Styled.Title color={palette.grey[500]} variant="body1" fontWeight="500">
              {label.toUpperCase()}
            </Styled.Title>
            <Typography color={palette.grey[600]} variant="subtitle1" lineHeight="20px">
              {value}
            </Typography>
          </Styled.BoxData>
        ))}
      </Styled.Container>
    </>
  );
};

export default memo(AdditionalDetails);
