import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';

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
  const [nftList, setNftList] = useState([]);
  const [showFilter, setShowFilter] = useState(true);
  const { isMediumDevice } = useBreakpoints();

  useEffect(() => {
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
          {(!!showFilter || isMediumDevice) && <Filters />}
          <Grid
            xs={!showFilter || isMediumDevice ? 12 : 9}
            sx={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}>
            {nftList.map((nft, index) => (
              <ProfileCard data={nft} isFromBrowser key={index} />
            ))}
          </Grid>
        </Styled.Container>
      </Grid>
    </>
  );
};

export default Browse;
