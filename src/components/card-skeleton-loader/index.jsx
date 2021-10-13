import { Skeleton } from '@mui/material';

const CardSkeletonLoader = () => {
  return (
    <Skeleton
      variant="rectangular"
      height={448}
      width={308}
      sx={{ marginBottom: 2, borderRadius: '20px' }}
    />
  );
};

export default CardSkeletonLoader;
