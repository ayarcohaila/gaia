import { Grid } from '@mui/material';

import { styled } from '~/themes/styled';

export const CardContent = styled(Grid, { shouldForwardProp: prop => prop !== 'bgImg' })<{
  bgImg: string;
}>(({ theme, bgImg }) => ({
  width: '100%',
  height: '30rem',
  backgroundImage: `url(${bgImg})`,
  borderRadius: '40px',
  backgroundSize: 'auto 100%',
  backgroundPosition: 'center',
  backgroundRepeat: 'repeat-x',
  boxSizing: 'border-box',

  color: theme.palette.white.main
}));

export const CardShadow = styled(Grid, { shouldForwardProp: prop => prop !== 'bgColor' })<{
  bgColor: string;
}>(({ bgColor }) => ({
  backgroundImage: `radial-gradient(circle at 91% 0, rgba(39, 11, 90, 0), rgba(39, 11, 90, 0.06) 22%, ${bgColor} 81%)`,
  height: '100%',
  borderRadius: '40px'
}));
