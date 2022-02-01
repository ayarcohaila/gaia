import { Grid, styled, Typography } from '@mui/material';

export const CollectionContainer = styled(Grid)(() => ({
  padding: '16px 40px 20px',
  maxWidth: '1800px',
  margin: '0 auto'
}));

export const GridCardContainer = styled(Grid)(() => ({
  gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
  display: 'grid',
  gap: '16px'
}));

export const GridBanner = styled(Grid)(({ theme }) => ({
  backgroundImage: `url(/static/img/collections-banner.jpeg)`,
  backgroundSize: 'auto 250%',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',

  borderRadius: '40px',
  height: '416px',
  color: theme.palette.common.white
}));

export const GridShadown = styled(Grid)(() => ({
  borderRadius: '40px',
  height: '416px',
  color: 'white',
  backgroundImage: `linear-gradient(175deg, rgba(0, 0, 0, 0.64) 11%, #000 89%)`
}));

export const SubtitleBanner = styled(Typography)(() => ({
  width: '500px',
  opacity: 0.72,
  lineHeight: 1.5,
  textAlign: 'center',
  letterSpacing: '1px'
}));

export const SectionTitle = styled(Typography)(() => ({
  color: '#42454d',
  fontSize: '20px',
  fontWeight: '600',
  lineHeight: '1.2',
  letterSpacing: '0.2px'
}));
