import { Link, Typography } from '@mui/material';

const BrysonCollectionDescription = () => {
  return (
    <>
      <Typography component="p" variant="h6">
        Bryson DeChambeau is an 8x PGA Tour winner, 2020 U.S. Open Champion, and member of the Ryder
        Cup U.S. team.
      </Typography>
      <Typography mt={2} component="p" variant="h6">
        His nickname, “The Scientist,” comes from his exciting and unconventional approach to the
        game; this premium NFT collection represents some of the most explosive facets of Bryson as
        a golf champion. Learn more at{' '}
        <Link
          color="#fff"
          href="https://brysondechambeau.com"
          target="_blank"
          underline="hover"
          rel="noopener noreferrer">
          brysondechambeau.com
        </Link>
      </Typography>
    </>
  );
};

export default BrysonCollectionDescription;
