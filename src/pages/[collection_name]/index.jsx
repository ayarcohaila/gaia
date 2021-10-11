import { useState, useEffect, useMemo } from 'react';
import { Grid } from '@mui/material';
import useSWR from '~/hooks/useSWR';
import { CollectionBanner, CollectionsFilter } from '~/components';
import { NFTList } from '~/components';
import { Divider } from '~/base';
import { CardSkeletonLoader } from '~/components';
import useBreakpoints from '~/hooks/useBreakpoints.js';

import * as Styled from '~/styles/collection-name/styles';

const BANNER_ITEM = [
  { value: '100K', description: 'Items' },
  { value: '5.5K', description: 'Owners' },
  { value: '41.39', description: 'Flor Price', price: true },
  { value: '161.0K', description: 'Volume Traded', price: true }
];

const DATA = {
  accountNumber: '0xc562773b26ade24cd8a33c4870380E774BF8A6DE',
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
    <Grid pl="32px" pr="32px">
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
        {loading ? (
          <Grid sx={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {new Array(isMediumDevice ? 1 : 5).fill(null).map((_, index) => (
              <CardSkeletonLoader key={index} />
            ))}
          </Grid>
        ) : (
          <NFTList nfts={nftList} />
        )}
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
