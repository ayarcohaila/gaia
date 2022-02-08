import { Typography, useTheme } from '@mui/material';
import { memo } from 'react';
import useBreakpoints from '~/hooks/useBreakpoints';
import * as Styled from './styles';
import { AdditionalDetailsProps } from './types';

const AdditionalDetails = (props: AdditionalDetailsProps) => {
  const { listOfProps } = props;
  const { palette } = useTheme();
  const { isSmallDevice } = useBreakpoints();

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
            {props.hideDistribution ? null : (
              <Typography
                color={palette.grey[500]}
                variant="body1"
                fontWeight="400"
                sx={{
                  letterSpacing: '0px',
                  fontSize: isSmallDevice ? '10px' : undefined
                }}>
                100% have this trait
              </Typography>
            )}
          </Styled.BoxData>
        ))}
      </Styled.Container>
    </>
  );
};

export default memo(AdditionalDetails);
