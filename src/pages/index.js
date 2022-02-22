import { Box } from '@mui/material';

import NewToNFTSection from '~/components/newToNFTSection';
import HomepageBanner from '~/components/homepageBanner';
import Seo from '~/components/seo';
import useBreakpoints from '~/hooks/useBreakpoints';

const Home = () => {
  const { isMediumDevice, isLargeDevice, isSmallDevice } = useBreakpoints();
  const padding = isSmallDevice ? 0 : isMediumDevice ? '12px' : isLargeDevice ? '32px' : '2.2%';
  return (
    <>
      <Seo />
      <Box
        paddingLeft={isSmallDevice && '13px'}
        paddingRight={isSmallDevice && '13px'}
        display="flex"
        alignItems="center"
        justifyContent="center">
        <Box paddingLeft={padding} paddingRight={padding} maxWidth="1800px" width="100%">
          <HomepageBanner />
          <NewToNFTSection />
        </Box>
      </Box>
    </>
  );
};

export default Home;
