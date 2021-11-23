import { Box, Checkbox as MuiCheckbox, Grid, styled } from '@mui/material';

export const Container = styled(Grid)(() => ({
  alignItems: 'center',
  borderRadius: '10px',
  justifyContent: 'space-between',
  padding: '10px 12px'
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
