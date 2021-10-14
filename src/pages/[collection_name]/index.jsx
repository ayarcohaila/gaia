import { useState, useEffect, useMemo } from 'react';
import { Grid } from '@mui/material';

import { NFTList } from '~/components';
import { CardSkeletonLoader } from '~/components';
import { CollectionBanner, CollectionsFilter, Seo } from '~/components';
import useSWR from '~/hooks/useSWR';
import useBreakpoints from '~/hooks/useBreakpoints.js';
import { Divider } from '~/base';

import * as Styled from '~/styles/collection-name/styles';

const DATA = {
  accountNumber: '0x5f14b7e68e0bc3c3',
  bannerName: '@Ballerz',
  bannerDescription:
    "BALLERZ is a basketball-inspired generative NFT set launching on the Flow blockchain. Collect your favorite teams and jersey numbers, and show everyone you're a true baller",
  bgImg: '/collections/ballerz-1200x630.jpg',
  collectionName: 'BALLERZ',
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
    <>
      <Seo title={`${DATA.collectionName} NFT Collection`} />
      <Grid>
        <CollectionBanner
          accountNumber={DATA.accountNumber}
          bannerName={DATA.bannerName}
          bannerDescription={DATA.bannerDescription}
          bgImg={DATA.bgImg}
          mainColor={DATA.mainColor}
          secondaryColor={DATA.secondaryColor}
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
    </>
  );
};
export default Collection;
