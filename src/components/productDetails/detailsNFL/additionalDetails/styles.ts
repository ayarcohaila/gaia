import { Grid, Typography } from '@mui/material';
import { styled } from '~/themes/styled';

export const Container = styled(Grid)(() => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 8
}));

export const BoxData = styled(Grid)(({ theme: { palette, breakpoints } }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundColor: palette.grey[200],
  borderRadius: '16px',
  padding: '16px 24px',
  boxSizing: 'border-box',

  [breakpoints.down('md')]: {
    alignItems: 'center',
    textAlign: 'center'
  }
}));

export const Title = styled(Typography)({
  fontSize: '10px',
  letterSpacing: '0px'
});

export const DescriptionText = styled(Typography)(
  ({
    theme: {
      breakpoints,
      palette: { grey },
      typography
    }
  }) => ({
    ...typography.h6,
    textAlign: 'justify',
    color: grey[600],

    [breakpoints.down('sm')]: {
      padding: '0 20px',
      textAlign: 'center'
    }
  })
);

export const DescriptionContainer = styled(Grid)(({ theme: { palette } }) => ({
  borderRadius: 16,
  padding: 16,
  border: `1px solid ${palette.grey[200]}`,
  width: '100%',
  marginBottom: 16
}));
