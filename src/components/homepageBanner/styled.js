import { styled, Button, Typography } from '@mui/material';

export const ContainerBackground = styled('div', { shouldForwardProp: prop => prop !== 'imgUrl' })(
  ({ imgUrl }) => ({
    backgroundImage: `url(${imgUrl})`,
    maxHeight: '420px',
    width: '100%',
    borderRadius: '40px',
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
    boxSizing: 'border-box',
    position: 'relative'
  })
);

export const Container = styled('div', { shouldForwardProp: prop => prop !== 'imgUrl' })(
  ({ theme: { breakpoints } }) => ({
    backgroundImage:
      'radial-gradient(circle at 91% 0, rgba(39, 11, 90, 0), rgba(39, 11, 90, 0.06) 22%, #270b5a 81%)',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
    maxHeight: '420px',
    paddingLeft: '72px',
    paddingTop: '150px',
    boxSizing: 'border-box',
    paddingBottom: '100px',
    height: '100%',
    borderRadius: '40px',
    color: '#fff',
    [breakpoints.down('md')]: {
      padding: '28px',
      paddingBottom: '20px'
    }
  })
);

export const TypographyWithOpacity = styled(Typography)(() => ({
  opacity: '0.64'
}));

export const CardButton = styled(Button)(({ theme: { breakpoints, palette } }) => ({
  color: '#fff',
  width: '150px',
  height: '38px',
  borderRadius: '24px',
  backgroundColor: '#215cf1',
  marginTop: '20px',
  textTransform: 'none',
  cursor: 'pointer',
  zIndex: 3,

  [breakpoints.down('sm')]: {
    margin: '0 auto'
  },

  '&:hover': {
    backgroundColor: palette.primary.hover
  }
}));

export const Divider = styled('div')({
  width: '100%',
  background: '#fff',
  height: '2px',
  opacity: '0.16',
  borderRadius: '24px',
  marginBottom: '24px'
});

export const BannerRedirect = styled(Button)({
  height: '100%',
  textDecoration: 'none',
  textTransform: 'none',
  textAlign: 'left',
  width: '100%',
  cursor: 'pointer',
  backgroundColor: 'transparent',

  '&:hover': {
    backgroundColor: 'transparent'
  }
});
