import { styled, Button, Typography } from '@mui/material';

export const Container = styled('div', { shouldForwardProp: prop => prop !== 'imgUrl' })(
  ({ theme: { breakpoints }, imgUrl }) => ({
    backgroundImage: `url(${imgUrl})`,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingLeft: '72px',
    paddingTop: '156px',
    paddingBottom: '156px',
    maxHeight: '618px',
    borderRadius: '40px',
    color: '#fff',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',

    [breakpoints.down('md')]: {
      padding: '28px',
      paddingBottom: '24px',
      height: '430px'
    }
  })
);

export const TypographyWithOpacity = styled(Typography)(() => ({
  opacity: '0.64'
}));

export const CardButton = styled(Button)(({ theme: { breakpoints } }) => ({
  color: '#fff',
  width: '150px',
  height: '38px',
  borderRadius: '24px',
  backgroundColor: '#215cf1',
  marginTop: '20px',
  textTransform: 'none',

  [breakpoints.down('md')]: {
    width: '48px',
    height: '48px',
    minWidth: '48px',
    marginTop: 'auto',
    marginLeft: 'auto'
  }
}));

export const Divider = styled('div')({
  width: '100%',
  background: '#fff',
  height: '2px',
  opacity: '0.16',
  borderRadius: '24px'
});
