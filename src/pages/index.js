import { Box, Grid } from '@mui/material';
import { NewToNFTSection, HomepageBanner, Seo } from '~/components';

const Home = () => {
  return (
    <>
      <Seo title="Home" />
      <Grid container paddingLeft="32px" paddingRight="32px">
        <HomepageBanner />
      </Grid>
      <Box paddingLeft="80px" paddingRight="80px" mt="50px">
        <NewToNFTSection />
      </Box>
    </>
  );
};

export default Home;
