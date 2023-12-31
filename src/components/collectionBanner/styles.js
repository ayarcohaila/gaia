import { Grid, Box, Typography, styled } from '@mui/material';

const BannerBackground = styled(Grid, { shouldForwardProp: prop => prop !== 'imgUrl' })(
  ({ theme, imgUrl }) => ({
    width: '100%',
    backgroundImage: `url(${imgUrl})`,
    borderRadius: '40px',
    backgroundSize: 'auto 100%',
    backgroundPosition: 'right',
    backgroundRepeat: 'repeat-x',
    boxSizing: 'border-box',

    [theme.breakpoints.down('sm')]: {
      height: '220px',
      backgroundSize: 'cover'
    }
  })
);

const BannerStyled = styled(Box, {
  shouldForwardProp: prop => !['fullBgPosition', 'bgColor'].includes(prop)
})(({ theme, bgColor, fullBgPosition }) => ({
  padding: '48px',
  boxSizing: 'border-box',
  backgroundImage: `radial-gradient(circle at 91% 0, rgba(39, 11, 90, 0), rgba(39, 11, 90, 0.06) 22%, ${bgColor} ${
    fullBgPosition ? '40%' : '81%'
  })`,
  borderRadius: '40px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',

  [theme.breakpoints.down('sm')]: {
    height: '220px',
    padding: '24px'
  }
}));

const Divider = styled('div')(() => ({
  width: '2px',
  height: '56px',
  margin: '12px 32px',
  opacity: '0.12',
  backgroundColor: '#fff'
}));

const BannerDescription = styled(Grid)(() => ({
  maxWidth: '400px',
  opacity: '0.8',
  fontSize: '16px',
  fontWeight: '500',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 1.5,
  letterSpacing: 'normal',
  color: '#fff'
}));

const BannerItemDescription = styled(Typography)(({ theme }) => ({
  opacity: 0.64,
  fontSize: '13px',
  fontWeight: 500,
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 1.23,
  letterSpacing: '0.2px',
  color: '#fff',

  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
    lineHeight: 1.33,
    textAlign: 'center',
    color: '#1c202a'
  }
}));

const BannerItemValue = styled(Typography)(({ theme }) => ({
  fontSize: '20px',
  fontWeight: 'bold',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 1.6,
  letterSpacing: 'normal',
  color: '#fff',

  [theme.breakpoints.down('sm')]: {
    fontSize: '20px',
    lineHeight: 1.3,
    color: '#1c202a',
    textAlign: 'center'
  },

  span: {
    lineHeight: 1.43,
    fontSize: '14px',

    [theme.breakpoints.down('sm')]: {
      fontSize: '20px',
      lineHeight: 1.3
    }
  }
}));

const BannerAvatar = styled('div', { shouldForwardProp: prop => prop !== 'imgUrl' })(
  ({ theme, imgUrl }) => ({
    width: '80px',
    height: '80px',
    borderRadius: '40px',
    border: '1px solid #fff',
    backgroundImage: `url(${imgUrl})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',

    [theme.breakpoints.down('sm')]: {
      width: '46px',
      height: '46px'
    }
  })
);

const MobileSubBanner = styled(Box)(() => ({
  padding: '26px 24px 26px 23px',
  borderRadius: '20px',
  border: 'solid 2px #e7e9ed',
  width: '85%',
  marginLeft: '5.5vw',
  marginTop: '16px'
}));

export {
  BannerStyled,
  Divider,
  BannerDescription,
  BannerItemDescription,
  BannerItemValue,
  BannerBackground,
  BannerAvatar,
  MobileSubBanner
};
