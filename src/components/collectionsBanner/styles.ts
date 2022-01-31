import { styled, Grid, Typography } from '@mui/material';

export const BannerBackground = styled(Grid)(({ theme }) => ({
  width: '100%',
  background: 'red',
  height: '400px',
  backgroundImage: `url(/static/img/collections-banner.jpeg)`,
  borderRadius: '40px',
  backgroundSize: 'auto 260%',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  boxSizing: 'border-box',

  [theme.breakpoints.down('sm')]: {
    backgroundSize: 'cover'
  }
}));

export const BannerBackgroundShadow = styled('div')(() => ({
  backgroundImage: `radial-gradient(circle at 91% 0, rgba(39, 11, 90, 0), rgba(39, 11, 90, 0.06) 22%, black 81%)`,
  height: '100%',
  borderRadius: '40px'
}));

export const BannerContent = styled(Grid)(() => ({
  height: '100%',
  padding: '48px',
  color: 'white'
}));

export const Title = styled(Typography)(() => ({
  fontSize: ' 42px',
  lineHeight: ' 1.14',
  letterSpacing: '-0.8px'
}));

export const SubTitle = styled(Typography)(({ theme }) => ({
  width: '390px',
  opacity: '0.8',
  fontSize: '16px',
  lineHeight: '1.5',

  [theme.breakpoints.down('sm')]: {
    width: '75%'
  }
}));

export const ImgContainer = styled(Grid)(() => ({
  position: 'relative',
  width: '10rem',
  height: 100
}));
