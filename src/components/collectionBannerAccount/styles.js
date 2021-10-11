import { styled, Typography } from '@mui/material';

const BannerAccountStyled = styled('div', { shouldForwardProp: prop => prop !== 'bgColor' })(
  ({ bgColor }) => ({
    width: '113px',
    height: '24px',
    margin: '8px 0 0',
    padding: '4px 8px',
    borderRadius: '6px',
    backgroundColor: bgColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    cursor: 'pointer',

    span: {
      margin: '0 6px 0 0',
      opacity: 0.8,
      fontFamily: 'IBM Plex Mono',
      fontSize: '12px',
      fontWeight: 500,
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 1.33,
      letterSpacing: '0.3px'
    }
  })
);

const BannerName = styled(Typography)(() => ({
  fontSize: '20px',
  fontWeight: 'bold',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 1.6,
  letterspacing: 'normal',
  color: '#fff'
}));

export { BannerAccountStyled, BannerName };
