import { styled } from '@mui/material';

const BannerShareIconStyled = styled('div', { shouldForwardProp: prop => prop !== 'bgColor' })(
  ({ bgColor }) => ({
    width: '54px',
    height: '54px',
    borderRadius: '27px',
    backgroundColor: bgColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  })
);

export { BannerShareIconStyled };
