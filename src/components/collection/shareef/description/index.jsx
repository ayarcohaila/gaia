import { Link, Typography } from '@mui/material';

const ShareefCollectionDescription = () => {
  return (
    <>
      <Typography component="p" variant="h6">
        {`This debut collection highlights Shareef's emergence onto the college basketball scene, and serves as the gateway into the life & times of the O'Neal family.`}
      </Typography>
      <Typography mt={2} component="p" variant="h6">
        Genesis Collection holders will be eligible to receive ongoing rewards such as exclusive
        drop access, airdropped NFTs, priority merch, in-person appearances and more. Learn more at
        <Link color="#fff" href="https://onealnfts.com" target="_blank" underline="hover">
          onealnfts.com
        </Link>
      </Typography>
    </>
  );
};

export default ShareefCollectionDescription;
