import { Box } from '@mui/material';

import NewToNFTSection from '~/components/newToNFTSection';
import HomepageBanner from '~/components/homepageBanner';
import Seo from '~/components/seo';
import useBreakpoints from '~/hooks/useBreakpoints';

const Home = () => {
  const { isMediumDevice } = useBreakpoints();
  return (
    <>
      <Seo />
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
    </>
  );
};

export default Home;
