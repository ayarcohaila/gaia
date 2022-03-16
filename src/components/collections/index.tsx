import React, { useMemo, memo } from 'react';
import { Grid } from '@mui/material';

import CollectionsBanner from '~/components/collectionsBanner';
import CardFill from '~/components/cardFilled/cardFill';
import Breadcrumbs from '~/components/breadcrumbs';
import CardFilled from '~/components/cardFilled';

// TODO: the rest of this page was implemented, these imports are part of it
// import CounterFill from '../cardFilled/counterFill';
// import Card from '~/components/card';
// import Button from '~/base/button';

// import { CardProps } from '../card/types';
import * as Styled from './styles';
import { CollectionsProps, Collection } from '~/components/cardFilled/types';
// import { COLLECTIONS_NAME } from '../../../collections_setup';

function Collections(props: CollectionsProps) {
  const { collections } = props;

  const breadcrumbsLinks = useMemo(
    () => [
      {
        label: 'Home',
        href: '/'
      },
      {
        label: 'Collections'
      }
    ],
    []
  );

  return (
    <Styled.CollectionContainer>
      <Grid>
        <Breadcrumbs links={breadcrumbsLinks}></Breadcrumbs>
      </Grid>

      <CollectionsBanner></CollectionsBanner>

      <Grid mt={7}>
        <Styled.SectionTitle mb={3}>Featured Collections</Styled.SectionTitle>
        <Styled.GridCardContainer>
          {collections.map((collection: Collection, index) => {
            return (
              <CardFilled
                index={index}
                total={collections.length}
                card={collection}
                key={collection.nft.id}>
                <CardFill card={collection}></CardFill>
              </CardFilled>
            );
          })}
        </Styled.GridCardContainer>
      </Grid>

      {/* // TODO: the rest of this page was implemented, these components are part of it */}
      {/* <Grid mt={7} px={4}>
        <SectionTitle title="Trending NFTs"></SectionTitle>
        <Styled.GridCardContainer>
          {trendingNfts.map(nft => (
            <Card key={nft.asset_id} data={nft} hasActions={false} isMarketplace></Card>
          ))}
        </Styled.GridCardContainer>
      </Grid> */}

      {/* <Grid mt={7} px={4}>
        <SectionTitle title="Recently added NFTs"></SectionTitle>
        <Styled.GridCardContainer>
          {trendingNfts.map(nft => (
            <Card key={nft.asset_id} data={nft} hasActions={false} isMarketplace></Card>
          ))}
        </Styled.GridCardContainer>
      </Grid> */}

      {/* <Grid mt={7} px={4}>
        <SectionTitle title="Upcoming Disney NFT drops"></SectionTitle>
        <Styled.GridCardContainer>
          {cardFilledMock.map((card, index) => (
            <CardFilled card={card} key={`${index}`}>
              <CounterFill card={card} countDownUnix={card.unixLauchDate}></CounterFill>
            </CardFilled>
          ))}
        </Styled.GridCardContainer>
      </Grid> */}

      {/* <Styled.GridBanner>
        <Styled.GridShadown
          mt={7}
          container
          justifyContent="center"
          alignItems="center"
          direction="column">
          <Typography variant="h2" mb={2}>
            Browse all sport NFT
          </Typography>
          <Styled.SubtitleBanner variant="body2" mb={2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rutrum nisl suscipit,
            elementum lorem at, lacinia risus
          </Styled.SubtitleBanner>
          <Button>{`Browse all sport NFT >`}</Button>
        </Styled.GridShadown>
      </Styled.GridBanner> */}
    </Styled.CollectionContainer>
  );
}

export default memo(Collections);
