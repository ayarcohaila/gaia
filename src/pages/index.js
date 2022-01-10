import { Box } from '@mui/material';

import { NewToNFTSection, HomepageBanner, Seo } from '~/components';
import { useBreakpoints } from '~/hooks';
import formatWithBasePath from '~/utils/formatWithBasePath';

const Home = () => {
  const { isMediumDevice } = useBreakpoints();
  return (
    <>
      <Seo title="Home" imgURL={formatWithBasePath('static/img/main-unfurl.png')} />
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
