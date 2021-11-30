import { Box, Button as MuiButton, Grid, styled } from '@mui/material';

import { Button } from '~/base';

export const FloatButton = styled(Button)({
  bottom: '24px',
  left: '50%',
  marginLeft: '-75px',
  position: 'fixed',
  width: '150px',
  zIndex: 2
});

export const BottomBar = styled(Grid)(() => ({
  alignItems: 'center',
  backdropFilter: 'blur(10px)',
  backgroundColor: 'rgba(255, 255, 255, 0.88)',
  boxShadow: '0 -2px 12px 0 rgba(0, 0, 0, 0.12)',
  bottom: 0,
  justifyContent: 'space-between',
  padding: '20px',
  position: 'fixed',
  width: '100%',
  WebkitBackdropFilter: 'blur(10px)'
}));

export const Content = styled(Box)(() => ({
  backgroundColor: '#fff',
  borderRadius: '16px',
  maxWidth: '302px'
}));

export const ClearButton = styled(MuiButton)(
  ({
    theme: {
      palette: { grey },
      typography
    }
  }) => ({
    ...typography.subtitle1,
    color: grey[600],
    fontWeight: 'bold',
    textTransform: 'none'
  })
);

export const CloseButton = styled(MuiButton)(
  ({
    theme: {
      palette: { primary },
      typography
    }
  }) => ({
    ...typography.subtitle1,
    color: primary.main,
    fontWeight: 'bold',
    textTransform: 'none'
  })
);

export const ValuesContainer = styled(Box)(() => ({
  maxHeight: '200px',
  overflowY: 'auto',
  overflowX: 'hidden',

  '&::-webkit-scrollbar': {
    display: 'none'
  }
}));
