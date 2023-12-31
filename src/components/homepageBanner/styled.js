import { styled, Button, Typography, Grid as MuiGrid, Box } from '@mui/material';

export const ContainerBackground = styled('div', { shouldForwardProp: prop => prop !== 'imgUrl' })(
  ({ imgUrl, theme: { breakpoints } }) => ({
    backgroundImage: `url(${imgUrl})`,
    maxHeight: '420px',
    maxWidth: '1800px',
    borderRadius: '40px',
    backgroundSize: 'cover',
    backgroundPosition: '75% 50%',
    backgroundRepeat: 'no-repeat',
    boxSizing: 'border-box',
    position: 'relative',

    [breakpoints.up('md')]: {
      margin: '0 32px'
    },

    [breakpoints.up('xl')]: {
      maxHeight: 'none',
      height: '520px'
    }
  })
);

export const Container = styled('div', { shouldForwardProp: prop => prop !== 'imgUrl' })(
  ({ theme: { breakpoints } }) => ({
    backgroundImage:
      'radial-gradient(circle at 91% 0, rgba(39, 11, 90, 0), rgba(39, 11, 90, 0.06) 22%, #0202f5ca 81%)',
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
    },

    [breakpoints.up('xl')]: {
      maxHeight: 'none',
      height: '520px'
    }
  })
);

export const TypographyWithOpacity = styled(Typography)(() => ({
  fontWeight: 'normal',
  opacity: '0.8',
  textTransform: 'uppercase'
}));

export const TypographyDescription = styled(Typography)(props => ({
  maxWidth: '600px',
  fontWeight: 'normal',
  lineHeight: !props.isMediumDevice && '30px'
}));

export const Grid = styled(MuiGrid)(() => ({
  gap: '12px'
}));

export const CardButton = styled(Button)(({ theme: { breakpoints, palette } }) => ({
  color: '#fff',
  width: '200px',
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

export const BannerRedirect = styled(Box)(({ theme: { breakpoints } }) => ({
  height: '100%',
  textDecoration: 'none',
  textTransform: 'none',
  textAlign: 'left',
  backgroundColor: 'transparent',
  padding: '0px',

  '&:hover': {
    backgroundColor: 'transparent'
  }
}));
