import { Grid, Skeleton } from '@mui/material';
import * as Styled from './styled';

const PDPMobileSkeletonLoader = () => {
  return (
    <Styled.ContainerMobile container spacing={2}>
      <Styled.Grid item xs={12} sx={{ justifyContent: 'start', marginLeft: '20px' }}>
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

      <Styled.Grid item xs={12}>
        <Skeleton
          variant="rectangular"
          width={275}
          height={275}
          sx={{ marginBottom: 2, borderRadius: '20px' }}
        />
      </Styled.Grid>

      <Styled.Grid item xs={12} container sx={{ height: '100%' }}>
        <Styled.Grid
          item
          xs={10}
          sx={{
            flexDirection: 'column',
            alignItems: 'center',
            height: '100%'
          }}>
          <Skeleton
            variant="rectangular"
            width={100}
            height={20}
            sx={{ marginBottom: 2, borderRadius: '20px' }}
          />
          <Skeleton variant="rectangular" width={200} height={30} sx={{ marginBottom: 2 }} />
          <Skeleton variant="rectangular" width={'100%'} height={10} sx={{ marginBottom: 1 }} />
          <Skeleton variant="rectangular" width={'50%'} height={10} sx={{ marginBottom: 2 }} />
        </Styled.Grid>

        <Styled.Grid
          item
          xs={12}
          sx={{
            width: '100%',
            alignItems: 'center',
            gap: 2,
            height: '100%',
            marginTop: '20%'
          }}>
          <Skeleton variant="circular" width={50} height={50} />
          <Skeleton variant="circular" width={50} height={50} />
        </Styled.Grid>

        <Styled.Grid
          item
          xs={12}
          sx={{
            width: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '40px'
          }}>
          <Skeleton variant="rectangular" width={'100%'} height={2} sx={{ marginBottom: 3 }} />
          <Skeleton variant="rectangular" width={'80%'} height={20} sx={{ marginBottom: 3 }} />
          <Skeleton variant="rectangular" width={'100%'} height={2} sx={{ marginBottom: 3 }} />
        </Styled.Grid>
      </Styled.Grid>
      <Grid item xs={1} />
    </Styled.ContainerMobile>
  );
};

export default PDPMobileSkeletonLoader;
