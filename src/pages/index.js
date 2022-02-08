import { Box } from '@mui/material';
import { useEffect } from 'react';

import HomeCardSection from '~/components/homeCardSection';
import HomeBanner from '~/components/homeBanner';
import Seo from '~/components/seo';
import useBreakpoints from '~/hooks/useBreakpoints';
import { useAppContext } from '~/context/appProvider';

const Home = () => {
  const { isMediumDevice } = useBreakpoints();
  const { handleAppData } = useAppContext();

  useEffect(() => {
    handleAppData({
      marketplaceSort: null,
      page: 0,
      marketplaceNfts: []
    });
  }, []);

  return (
    <>
      <Seo />
      <Box
        paddingLeft={isMediumDevice ? '20px' : '50px'}
        paddingRight={isMediumDevice ? '20px' : '50px'}
        display="flex"
        alignItems="center"
        justifyContent="center">
        <Box maxWidth="1800px" width="100%">
          <HomeBanner />
          <HomeCardSection />
        </Box>
      </Box>
    </>
  );
};

export default Home;
