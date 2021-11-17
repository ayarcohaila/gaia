import { Link, Typography } from '@mui/material';

const BrysonCollectionDescription = () => {
  return (
    <>
      <Typography variant="h6">
        Bryson DeChambeau’s premium NFT collection represents some of the most explosive facets of
        the golf champion’s career.{' '}
      </Typography>
      <Typography mt={2} variant="h6">
        His nickname, “The Scientist,” comes from his exciting and unconventional approach to the
        game. Learn more at{' '}
        <Link color="#fff" href="https://brysondechambeau.com" target="_blank" underline="hover">
          brysondechambeau.com
        </Link>
      </Typography>
    </>
  );
};

export default BrysonCollectionDescription;
