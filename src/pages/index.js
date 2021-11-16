import { Box } from '@mui/material';
import { NewToNFTSection, HomepageBanner, Seo } from '~/components';

import { useBreakpoints } from '~/hooks';

const Home = () => {
  const { isMediumDevice } = useBreakpoints();
  return (
    <>
      <Seo title="Home" />
      <Box
        paddingLeft={isMediumDevice ? '20px' : '50px'}
        paddingRight={isMediumDevice ? '20px' : '50px'}>
        <HomepageBanner />
        <NewToNFTSection />
      </Box>
    </>
  );
};

export default Home;
