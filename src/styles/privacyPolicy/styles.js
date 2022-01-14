import { Grid, Typography, Link, styled, TableRow, TableCell } from '@mui/material';

export const Container = styled(Grid)(() => ({
  width: '100%',
  margin: '54px 0 64px',
  display: 'grid',
  gridTemplateAreas: "'. text .'",
  gridTemplateColumns: '1fr 780px 1fr'
}));

export const CustomLink = styled(Link)(({ theme: { palette } }) => ({
  textDecoration: 'none',
  cursor: 'pointer',
  color: palette.primary.main
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

export const SubHeading = styled(Typography)(({ theme: { palette, typography } }) => ({
  ...typography.h5,
  fontWeight: 'bold',
  fontSize: '18px',
  marginTop: '24px',
  marginBottom: '12px',
  color: palette.grey[800]
}));

export const Text = styled(Typography, {
  shouldForwardProp: prop => prop !== 'list' && prop !== 'bold'
})(({ theme: { palette, typography }, list, bold }) => ({
  ...typography.h6,
  lineHeight: '1.5',
  color: palette.grey[600],
  listStyleType: list && 'disc',
  fontWeight: bold ? 'bold' : 'normal'
}));

export const CustomRow = styled(TableRow)(() => ({
  border: 'none',
  padding: 0
}));

export const CustomCell = styled(TableCell)(({ theme: { palette, typography } }) => ({
  ...typography.h6,
  border: `1px solid ${palette.grey[600]}`,
  padding: '8px',
  verticalAlign: 'baseline',
  lineHeight: '1.5',
  textAlign: 'left',
  color: palette.grey[600]
}));
