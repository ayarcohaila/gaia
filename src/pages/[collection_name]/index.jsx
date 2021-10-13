import { useState, useEffect, useMemo } from 'react';
import { Grid } from '@mui/material';

import { NFTList } from '~/components';
import { CardSkeletonLoader } from '~/components';
import { CollectionBanner, CollectionsFilter } from '~/components';
import useSWR from '~/hooks/useSWR';
import useBreakpoints from '~/hooks/useBreakpoints.js';
import { Divider } from '~/base';

import * as Styled from '~/styles/collection-name/styles';

const BANNER_ITEM = [
  { value: '100K', description: 'Items' },
  { value: '5.5K', description: 'Owners' },
  { value: '41.39', description: 'Flor Price', price: true },
  { value: '161.0K', description: 'Volume Traded', price: true }
];

const DATA = {
  accountNumber: '0x5f14b7e68e0bc3c3',
  bannerName: '@Ballerz',
  bannerDescription: "Buy and sell Ballerz NFTs on Gaia, the world's best NFT marketplace",
  bgImg: '/collections/ballerz-1200x630.jpg',
  mainColor: '#270b5a',
  secondaryColor: '#4814a6'
};

const Collection = () => {
  const [cursor, setCursor] = useState(1);
  const [nftList, setNftList] = useState([]);
  const { isMediumDevice } = useBreakpoints();

  const { data, loading } = useSWR('/templates/templates.json');
  const handleLoadMore = () => {
    setCursor(prevState => prevState + 1);
  };

  useEffect(() => {
    if (data?.length) {
      setNftList(data.slice(0, cursor * 10));
    }
  }, [data?.length, cursor]);

  const cursorLimit = useMemo(() => Math.ceil(data?.length / 10), [data]);

  return (
    <Grid>
      <CollectionBanner
        accountNumber={DATA.accountNumber}
        bannerName={DATA.bannerName}
        bannerDescription={DATA.bannerDescription}
        bgImg={DATA.bgImg}
        mainColor={DATA.mainColor}
        secondaryColor={DATA.secondaryColor}
        bannerItems={BANNER_ITEM}
      />
      <Styled.Container>
        <Grid sx={{ margin: '24px 0' }}>
          <CollectionsFilter nftQuantity={data?.length} setNftList={setNftList} />
        </Grid>
        <Divider sx={{ marginBottom: '32px' }} />
        <Grid sx={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {loading ? (
            <>
              {new Array(isMediumDevice ? 1 : 5).fill(null).map((_, index) => (
                <CardSkeletonLoader key={index} />
              ))}
            </>
          ) : (
            <NFTList nfts={nftList} />
          )}
        </Grid>
        {cursorLimit > cursor && !loading && (
          <Grid container justifyContent="center" align="center" sx={{ margin: '32px 0 64px' }}>
            <Styled.BlackButton onClick={handleLoadMore}>Load more NFTS</Styled.BlackButton>
          </Grid>
        )}
      </Styled.Container>
    </Grid>
  );
};
export default Collection;
