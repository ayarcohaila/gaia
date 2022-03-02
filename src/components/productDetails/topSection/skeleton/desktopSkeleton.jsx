import { Grid, Skeleton } from '@mui/material';
import * as Styled from './styled';

const PDPDesktopSkeletonLoader = () => {
  return (
    <Styled.ContainerDesktop container spacing={2}>
      <Styled.Grid item xs={12} sx={{ justifyContent: 'start', marginTop: '10px' }}>
        <Skeleton
          variant="rectangular"
          width={75}
          height={15}
          sx={{ marginBottom: 2, borderRadius: '20px', marginRight: '10px' }}
        />
        <Skeleton
          variant="rectangular"
          width={75}
          height={15}
          sx={{ marginBottom: 2, borderRadius: '20px', marginRight: '10px' }}
        />
        <Skeleton
          variant="rectangular"
          width={75}
          height={15}
          sx={{ marginBottom: 2, borderRadius: '20px', marginRight: '10px' }}
        />
        <Skeleton
          variant="rectangular"
          width={75}
          height={15}
          sx={{ marginBottom: 2, borderRadius: '20px', marginRight: '10px' }}
        />
      </Styled.Grid>
      <Grid item xs={1} />
      <Grid item xs={4}>
        <Skeleton
          variant="rectangular"
          width={'100%'}
          height={448}
          sx={{ marginBottom: 2, borderRadius: '20px' }}
        />
      </Grid>

      <Grid item xs={1} />

      <Grid item xs={5} container sx={{ height: '100%' }}>
        <Grid item xs={2}>
          <Skeleton variant="circular" width={50} height={50} />
        </Grid>

        <Grid item xs={8}>
          <Skeleton
            variant="rectangular"
            width={200}
            height={20}
            sx={{ marginBottom: 1, borderRadius: '20px' }}
          />
          <Skeleton
            variant="rectangular"
            width={200}
            height={15}
            sx={{ marginBottom: 2, borderRadius: '20px' }}
          />
        </Grid>

        <Grid item xs={12} sx={{ marginTop: '40px' }}>
          <Skeleton
            variant="rectangular"
            width={100}
            height={20}
            sx={{ marginBottom: 1, borderRadius: '20px' }}
          />
          <Skeleton variant="rectangular" width={300} height={40} sx={{ marginBottom: 3 }} />
          <Skeleton variant="rectangular" width={'100%'} height={10} sx={{ marginBottom: 6 }} />
        </Grid>

        <Grid item xs={12} sx={{ marginTop: '40px' }}>
          <Skeleton variant="rectangular" width={'100%'} height={40} sx={{ marginBottom: 2 }} />
          <Skeleton variant="rectangular" width={'100%'} height={40} sx={{ marginBottom: 2 }} />
          <Skeleton variant="rectangular" width={'100%'} height={40} sx={{ marginBottom: 2 }} />
        </Grid>
      </Grid>
      <Grid item xs={1} />
    </Styled.ContainerDesktop>
  );
};

export default PDPDesktopSkeletonLoader;
