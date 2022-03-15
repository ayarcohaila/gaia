import { Button, Grid, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import Card from '~/components/card';
import CollectionsFilter from '~/components/collectionFilters';
import useAuth from '~/hooks/useAuth';
import * as Styled from './styles';

const MyCollection = ({ nfts }) => {
  const { user } = useAuth();
  const router = useRouter();
  const { id: address, view: tab } = router.query;

  const handleClickMarketplace = () => {
    router.push('/browse');
  };

  return (
    <>
      <Styled.FiltersContainer>
        <CollectionsFilter nftQuantity={nfts?.length} enableSearch isProfile />
      </Styled.FiltersContainer>
      {nfts.length > 0 ? (
        <Styled.GridRenderList>
          {nfts.map((nft, i) => (
            <Card
              key={i}
              data={nft}
              hasActions={!!user && user.loggedIn && user.addr === router.query.id}
            />
          ))}
        </Styled.GridRenderList>
      ) : (
        <Styled.EmptyContainer>
          <Styled.EmptyText>
            There are no Gaia marketplace NFTs in this wallet. Add some to your collection to
            display them here.
          </Styled.EmptyText>
        </Styled.EmptyContainer>
      )}
    </>
  );
};

export default MyCollection;
