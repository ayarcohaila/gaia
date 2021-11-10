import { Box } from '@mui/material';
import { NewToNFTSection, HomepageCarousel } from '~/components';

const Home = () => {
  return (
    <>
      <HomepageCarousel />
      <Box paddingLeft="80px" paddingRight="80px" mt="50px">
        <NewToNFTSection />
      </Box>
    </>
  );
};

export default Home;
