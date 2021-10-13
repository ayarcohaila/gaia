import { Grid, Box, Avatar, Typography, Skeleton } from '@mui/material';

const CardSkeletonLoader = () => {
  return (
    <Grid sx={{ width: '308px', height: '448px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
        <Box sx={{ marginRight: 1 }}>
          <Skeleton variant="circular" width={28} height={28}>
            <Avatar />
          </Skeleton>
        </Box>
        <Box sx={{ width: '100%' }}>
          <Skeleton width="100%" height={28}>
            <Typography>.</Typography>
          </Skeleton>
        </Box>
      </Box>
      <Skeleton variant="rectangular" height={316} sx={{ marginBottom: 2 }} />
      <Skeleton variant="text" width="100%" height={72} sx={{ marginBottom: 2 }}>
        <Typography>.</Typography>
      </Skeleton>
    </Grid>
  );
};

export default CardSkeletonLoader;
