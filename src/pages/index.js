import { Box } from '@mui/material';

import { Filters, NewToNFTSection, HomepageBanner, Seo } from '~/components';
import { useBreakpoints } from '~/hooks';

const Home = () => {
  const { isMediumDevice } = useBreakpoints();
  return (
    <>
      <Seo title="Home" />
      <Box
        paddingLeft={isMediumDevice && '20px'}
        paddingRight={isMediumDevice && '20px'}
        display="flex"
        alignItems="center"
        justifyContent="center">
        <Box
          paddingLeft={isMediumDevice ? '20px' : '50px'}
          paddingRight={isMediumDevice ? '20px' : '50px'}
          maxWidth="1800px"
          width="100%">
          <HomepageBanner />
          <NewToNFTSection />
        </Box>
      </Box>
      <Filters />
    </>
  );
};

export default Home;
