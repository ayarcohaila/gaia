import dynamic from 'next/dynamic';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import { useMemo, useEffect, useCallback, useState } from 'react';
import axios from 'axios';

import Seo from '~/components/seo';
import ProfileBanner from '~/components/profileBanner';
import Loading from '~/base/spinnerLoader';
import useAuth from '~/hooks/useAuth';
import { SEO_DATA } from '~/constant/seo';

import * as Styled from '~/styles/favorites/styles';

const Card = dynamic(() => import('~/components/card'));
const GET_FAVORITE_LIST = '/api/favorites/get';

const Favorites = () => {
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const [favoriteList, setFavoriteList] = useState([]);

  const router = useRouter();

  const handleClick = () => {
    router.push('/browse');
  };

  const handleGetFavorites = useCallback(async address => {
    setLoading(true);
    const { data } = await axios.post(GET_FAVORITE_LIST, { address });
    setFavoriteList(data.favoriteList);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (user?.addr) {
      handleGetFavorites(user?.addr);
    }
  }, [user?.addr]);

  const renderList = useMemo(() => {
    if (!user?.addr) {
      setLoading(false);
      return (
        <Styled.EmptyContainer>
          <Styled.EmptyText>
            You must be logged to be able to see your favorite list
          </Styled.EmptyText>
        </Styled.EmptyContainer>
      );
    }
    return (
      <>
        {favoriteList.length > 0 ? (
          <Styled.ListWrapper>
            {favoriteList.map((nft, i) => (
              <Card
                key={i}
                data={nft}
                hasActions={!!user && user.loggedIn && user.addr === router.query.id}
              />
            ))}
          </Styled.ListWrapper>
        ) : (
          <Styled.EmptyContainer>
            <Styled.EmptyText>
              There are no Flow NFTs in this favorite list from any Gaia collections
            </Styled.EmptyText>
            <Styled.RedirectButton onClick={handleClick}>Visit Marketplace</Styled.RedirectButton>
          </Styled.EmptyContainer>
        )}
      </>
    );
  }, [user?.addr, favoriteList]);

  return (
    <Box component="section">
      <Seo title={SEO_DATA.title.favorites} description={SEO_DATA.description.default} />
      <ProfileBanner address={user?.addr} bannerTitle="My Favorites" />
      {loading ? (
        <Styled.EmptyContainer>
          <Loading disableText />
        </Styled.EmptyContainer>
      ) : (
        renderList
      )}
    </Box>
  );
};

export default Favorites;
