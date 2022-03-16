import { Grid, Box } from '@mui/material';

import { styled } from '~/themes/styled';

export const CardContent = styled(Grid, { shouldForwardProp: prop => prop !== 'bgImg' })<{
  bgImg: string;
}>(({ theme, bgImg }) => ({
  position: 'relative',
  height: '100%',

  backgroundImage: `url(${bgImg})`,
  borderRadius: '20px',
  backgroundSize: 'cover',
  // backgroundSize: 'auto 100%',
  // backgroundPosition: 'center',
  // backgroundRepeat: 'repeat-x',
  boxSizing: 'border-box',
  color: theme.palette.white.main
}));

export const CardShadow = styled(Grid, { shouldForwardProp: prop => prop !== 'bgColor' })<{
  bgColor: string;
}>(({ bgColor }) => ({
  backgroundImage: `radial-gradient(circle at 91% 0, rgba(39, 11, 90, 0), rgba(39, 11, 90, 0.06) 22%, ${bgColor} 81%)`,
  height: '100%',
  borderRadius: '20px'
}));

export const Shadow = styled(Box, { shouldForwardProp: prop => prop !== 'second' })<{
  second: boolean;
}>(({ theme, second }) => ({
  position: 'absolute',
  width: second ? '90%' : '83%',
  height: '50px',
  background: second ? theme.palette.grey[400] : theme.palette.grey[500],
  // marginTop: second ? '27.3rem' : '27.7rem',
  bottom: second ? '-0.5rem' : '-0.9rem',
  marginLeft: second ? '3%' : '6%',
  borderRadius: '20px',
  opacity: second ? '0.9' : '0.2',

  [theme.breakpoints.up(1500)]: {
    marginTop: second ? '37.3rem' : '37.7rem'
  }
}));

const fourColumnsHeights = {
  lg: '35rem'
} as const;

const threeColumnsHeights = {
  lg: '30rem'
} as const;

const twoColumnsHeights = {
  sm: '30rem',
  md: '20rem',
  lg: '28rem'
} as const;

const oneColumnHeights = {
  xs: '35rem',
  sm: '25rem',
  md: '18rem'
} as const;

const columnsHeightMap: Record<number, Record<string, string>> = {
  1: oneColumnHeights,
  2: twoColumnsHeights,
  3: threeColumnsHeights,
  4: fourColumnsHeights
};

export const CardContainer = styled(Grid)(({ theme: { breakpoints }, xs, sm, lg }) => {
  const columnsWhenXs = 12 / Number(xs);
  const columnsWhenSm = 12 / Number(sm);
  const columnsWhenMd = 12 / Number(sm);
  const columnsWhenLg = 12 / Number(lg);

  return {
    width: '100%',
    marginBottom: '0.5rem',

    height: columnsHeightMap[columnsWhenXs]['xs'],

    [breakpoints.up('sm')]: {
      height: columnsHeightMap[columnsWhenSm]['sm']
    },
    [breakpoints.up('md')]: {
      height: columnsHeightMap[columnsWhenMd]['md']
    },
    [breakpoints.up('lg')]: {
      height: columnsHeightMap[columnsWhenLg]['lg']
    }
  };
});
