import { styled, Typography } from '@mui/material';

const BannerAccountStyled = styled('div', { shouldForwardProp: prop => prop !== 'bgColor' })(
  ({ theme, bgColor }) => ({
    height: '24px',
    margin: '8px 0 0',
    padding: '4px 8px',
    boxSizing: 'border-box',
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
    },

    [theme.breakpoints.down('sm')]: {
      width: '124px'
    }
  })
);

const BannerName = styled(Typography)(({ theme }) => ({
  fontSize: '20px',
  fontWeight: 'bold',
  lineHeight: 1.6,
  color: '#fff',

  [theme.breakpoints.down('sm')]: {
    lineHeight: 1.2
  }
}));

export { BannerAccountStyled, BannerName };
