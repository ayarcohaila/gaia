import { Grid, Typography, styled } from '@mui/material';

export const Container = styled(Grid)(() => ({
  width: '100%',
  margin: '54px 0 64px',
  display: 'grid',
  gridTemplateAreas: "'. text .'",
  gridTemplateColumns: '1fr 632px 1fr'
}));

export const Content = styled(Grid)(({ theme }) => ({
  width: '100%',
  gridArea: 'text',

  [theme.breakpoints.down('sm')]: {
    width: '100vw',
    paddingLeft: '20px',
    paddingRight: '20px',
    ul: {
      paddingLeft: '60px'
    }
  }
}));

export const Title = styled(Typography)(({ theme: { palette } }) => ({
  fontSize: '56px',
  fontWeight: 'bold',
  letterSpacing: '-1px',
  marginBottom: '48px',
  color: palette.grey[800]
}));

export const Heading = styled(Typography)(({ theme: { palette, typography } }) => ({
  ...typography.h4,
  fontWeight: 'bold',
  marginTop: '48px',
  marginBottom: '12px',
  color: palette.grey[800]
}));

export const Text = styled(Typography)(({ theme: { palette, typography } }) => ({
  ...typography.h6,
  lineHeight: '1.5',
  color: palette.grey[600],

  '& > ul': {
    marginTop: '12px',

    '& > li': {
      marginBottom: '12px',
      marginLeft: '-40px',

      '&::marker': {
        color: palette.grey[800]
      }
    }
  }
}));
