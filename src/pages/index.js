import { Box, Grid } from '@mui/material';
import { NewToNFTSection, HomepageBanner, Seo } from '~/components';

import { useBreakpoints } from '~/hooks';

const Home = () => {
  const { isMediumDevice } = useBreakpoints();
  return (
    <>
      <Seo title="Home" />
      <Grid
        container
        paddingLeft={isMediumDevice ? '12px' : '32px'}
        paddingRight={isMediumDevice ? '12px' : '32px'}>
        <HomepageBanner />
      </Grid>
      <Box paddingLeft="80px" paddingRight="80px" mt="50px">
        <NewToNFTSection />
      </Box>
    </>
  );
};

export default Home;
