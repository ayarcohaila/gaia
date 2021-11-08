import React from 'react';
import { Grid, Typography, Link } from '@mui/material';

import { CollectionCard } from '~/components';
import useBreakpoints from '~/hooks/useBreakpoints';

const CollectionList = ({ nfts, hasNftsForSale }) => {
  const { isMediumDevice } = useBreakpoints();
  return (
    <>
      {hasNftsForSale ? (
        nfts.map(nft => <CollectionCard key={nft.id} data={nft} />)
      ) : (
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ width: '50%', height: isMediumDevice ? '100%' : 300 }}>
          <Typography
            variant="body"
            sx={{
              fontSize: isMediumDevice ? '14px' : '20px',
              textAlign: 'center',
              lineHeight: isMediumDevice ? '1.2' : '22px'
            }}>
            Sold out! Join us on <Link url="https://twitter.com/ballerz_nft ">Twitter</Link> and{' '}
            <Link url="https://discord.com/invite/ballerznft ">Discord</Link> for the BALLERZ reveal
            on Wednesday, November 10 (exact time TBD). If you weren’t able to purchase – the Gaia
            Marketplace will open in December, where you can buy & sell BALLERZ from other
            collectors.
          </Typography>
        </Grid>
      )}
    </>
  );
};

export default React.memo(CollectionList);
