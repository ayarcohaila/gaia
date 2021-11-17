import { Box } from '@mui/material';
import { NewToNFTSection, HomepageBanner, Seo } from '~/components';

import { useBreakpoints } from '~/hooks';

const Home = () => {
  const { isMediumDevice } = useBreakpoints();
  return (
    <>
      <Seo title="Home" />
      <Box display="flex" alignItems="center" justifyContent="center">
        <Box
          paddingLeft={isMediumDevice ? '20px' : '50px'}
          paddingRight={isMediumDevice ? '20px' : '50px'}
          maxWidth="1800px">
          <HomepageBanner />
          <NewToNFTSection />
        </Box>
      </Box>
    </>
  );
};

export default Home;
