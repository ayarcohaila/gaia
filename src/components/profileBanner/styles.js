import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

export const Banner = styled(Box, { shouldForwardProp: prop => prop !== 'isMobile' })(
  ({ theme: { palette }, isMobile }) => ({
    height: isMobile ? '200px' : '260px',
    margin: isMobile ? '0 20px 16px' : '0 50px 24px',
    borderRadius: '40px',
    backgroundColor: palette.darkPurple.main,
    display: 'flex',
    justifyContent: 'center',
    backgroundImage: `linear-gradient(189deg, rgba(65, 31, 126, 0.2) 20%, ${palette.purple[200]} 93%)`,
    alignItems: 'center',
    flexDirection: 'column',

    '& > h3': {
      margin: '10px 0'
    }
  })
);

export const ProfileInfo = styled(Typography, { shouldForwardProp: prop => prop !== 'isMobile' })(
  ({ theme: { palette }, isMobile }) => ({
    marginBottom: isMobile ? '14px' : '20px',
    fontFamily: 'IBMPlexMono',
    fontSize: isMobile ? '30px' : '56px',
    fontWeight: 'bold',
    lineHeight: '1.07',
    letterSpacing: '-1px',
    textAlign: 'center',
    color: palette.grey[100]
  })
);

export const BoxWallet = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyItems: 'center'
}));

export const WalletText = styled(Typography)(({ theme: { palette } }) => ({
  margin: '8px 0',
  opacity: '0.8',
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: '1.14',
  color: palette.grey[100]
}));
