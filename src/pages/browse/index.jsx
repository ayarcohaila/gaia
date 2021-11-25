import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';

import CardSkeletonLoader from '~/base/card-skeleton-loader';
import { BrowseHeader, Filters, ProfileCard, Seo } from '~/components';
import { useBreakpoints } from '~/hooks';

import * as Styled from '~/styles/browse-page/styles';

// TO-DO: remove after integration with backend
const NFTList = [
  {
    collection_name: 'NBA Top Shot',
    name: 'Giannis Antetokoumpo - Block',
    description: 'Base Set (Series 2)',
    price: '$140.00',
    imageURL: '/collections/ballerz.png',
    collection_picture: '/collections/ballerz.png',
    id: 'ballerz',
    is_for_sale: true
  },
  {
    collection_name: 'NBA Top Shot',
    name: 'Giannis Antetokoumpo - Block',
    description: 'Base Set (Series 2)',
    price: '$140.00',
    imageURL: '/collections/ballerz.png',
    collection_picture: '/collections/ballerz.png',
    id: 'ballerz',
    is_for_sale: true
  },
  {
    collection_name: 'NBA Top Shot',
    name: 'Giannis Antetokoumpo - Block',
    description: 'Base Set (Series 2)',
    price: '$140.00',
    imageURL: '/collections/ballerz.png',
    collection_picture: '/collections/ballerz.png',
    id: 'ballerz',
    is_for_sale: true
  },
  {
    collection_name: 'NBA Top Shot',
    name: 'Giannis Antetokoumpo - Block',
    description: 'Base Set (Series 2)',
    price: '$140.00',
    imageURL: '/collections/ballerz.png',
    collection_picture: '/collections/ballerz.png',
    id: 'ballerz',
    is_for_sale: true
  },
  {
    collection_name: 'NBA Top Shot',
    name: 'Giannis Antetokoumpo - Block',
    description: 'Base Set (Series 2)',
    price: '$140.00',
    imageURL: '/collections/ballerz.png',
    collection_picture: '/collections/ballerz.png',
    id: 'ballerz',
    is_for_sale: true
  },
  {
    collection_name: 'NBA Top Shot',
    name: 'Giannis Antetokoumpo - Block',
    description: 'Base Set (Series 2)',
    price: '$140.00',
    imageURL: '/collections/ballerz.png',
    collection_picture: '/collections/ballerz.png',
    id: 'ballerz',
    is_for_sale: true
  },
  {
    collection_name: 'NBA Top Shot',
    name: 'Giannis Antetokoumpo - Block',
    description: 'Base Set (Series 2)',
    price: '$140.00',
    imageURL: '/collections/ballerz.png',
    collection_picture: '/collections/ballerz.png',
    id: 'ballerz',
    is_for_sale: true
  }
];

const Browse = () => {
  const [loading, setLoading] = useState(true);
  const [nftList, setNftList] = useState([]);
  const [showFilter, setShowFilter] = useState(true);
  const { isMediumDevice, isSmallDevice } = useBreakpoints();

  useEffect(() => {
    setLoading(false);
    setNftList(NFTList);
  }, []);

  const handleShowFilters = () => {
    setShowFilter(!showFilter);
  };

  return (
    <>
      <Seo title="Browse All NFTs" />
      <BrowseHeader handleShowFilters={handleShowFilters} />
      <Grid container alignItems="center" justifyContent="center" mt={isMediumDevice && '24px'}>
        <Styled.Container>
          {Boolean(!!showFilter || isMediumDevice) && <Filters />}
          <Grid
            item
            container
            direction="row"
            spacing="16px"
            justifyContent="center"
            alignItems="center">
            {loading
              ? new Array(10).fill(null).map((_, index) => (
                  <Grid
                    item
                    xs={12}
                    md={4}
                    sm={6}
                    lg={showFilter ? 4 : 3}
                    xl={showFilter ? 3 : 2.4}
                    key={index}>
                    <CardSkeletonLoader />
                  </Grid>
                ))
              : nftList.map((nft, index) => (
                  <Grid
                    item
                    container
                    justifyContent="center"
                    ml={0}
                    xs={12}
                    md={4}
                    sm={isSmallDevice ? 4 : 6}
                    lg={showFilter ? 4 : 3}
                    xl={showFilter ? 3 : 2.4}
                    key={index}>
                    <ProfileCard data={nft} isFromBrowser />
                  </Grid>
                ))}
          </Grid>
        </Styled.Container>
      </Grid>
    </>
  );
};

export default Browse;
