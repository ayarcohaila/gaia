import { Box, Button, Checkbox as MuiCheckbox, Grid, styled } from '@mui/material';

export const Container = styled(Grid)(() => ({
  alignItems: 'center',
  borderRadius: '10px',
  justifyContent: 'space-between',
  minHeight: '48px',
  padding: '10px 12px',
  position: 'relative'
}));

export const Checkbox = styled(MuiCheckbox)(
  ({
    theme: {
      palette: { grey, white }
    }
  }) => ({
    color: grey[400],
    height: '14px',
    width: '14px',

    '&.Mui-checked': {
      color: white.main
    }
  })
);

export const IconContainer = styled(Box)(
  ({
    theme: {
      palette: { white }
    }
  }) => ({
    alignItems: 'center',
    backgroundColor: white.main,
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '6px'
  })
);

export const ClickableArea = styled(Button)(() => ({
  backgroundColor: 'transparent',
  height: '100%',
  maxHeight: '100%',
  maxWidth: '100%',
  position: 'absolute',
  width: '95%'
}));
