import { Grid } from '@mui/material';

import { styled } from '~/themes/styled';

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

export const Container = styled(Grid)(({ theme: { breakpoints }, xs, sm, lg }) => {
  const columnsWhenXs = 12 / Number(xs);
  const columnsWhenSm = 12 / Number(sm);
  const columnsWhenMd = 12 / Number(sm);
  const columnsWhenLg = 12 / Number(lg);

  return {
    width: '100%',
    marginBottom: '0.5rem',
    position: 'relative',

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
