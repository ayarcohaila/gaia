import { memo } from 'react';
import dynamic from 'next/dynamic';
import { Box, Grid, useTheme } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useRouter } from 'next/router';
import { useMemo, useEffect, useCallback, useState } from 'react';
import axios from 'axios';

import Seo from '~/components/seo';
import ProfileBanner from '~/components/profileBanner';
import Loading from '~/base/spinnerLoader';
import useAuth from '~/hooks/useAuth';
import { SEO_DATA } from '~/constant/seo';

import * as Styled from './styles';
import useBreakpoints from '~/hooks/useBreakpoints';

const Card = dynamic(() => import('~/components/card'));
const GET_FAVORITE_LIST = '/api/favorites/get';

const Favorites = () => {
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const [favoriteList, setFavoriteList] = useState([]);
  const { isMediumDevice } = useBreakpoints();
  const router = useRouter();
  const {
    palette: { grey }
  } = useTheme();

  const handleClick = () => {
    router.push('/browse');
  };

  const handleGetFavorites = useCallback(async address => {
    setLoading(true);
    const { data } = await axios.post(GET_FAVORITE_LIST, { address });
    setFavoriteList(data.favoriteList || []);
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

    if (loading) {
      return (
        <Styled.EmptyContainer>
          <Loading disableText />
        </Styled.EmptyContainer>
      );
    }

    if (!favoriteList.length) {
      return (
        <Styled.EmptyContainer>
          <Styled.EmptyText>
            There are no favorited NFTs to display. Favorite some to add to this list.
          </Styled.EmptyText>
        </Styled.EmptyContainer>
      );
    }

    return (
      <>
        <Styled.FiltersContainer>
          <Grid container alignItems="center" justifyContent={isMediumDevice ? 'center' : 'start'}>
            <FavoriteIcon htmlColor={'gray'} sx={{ mr: '2px', height: '19px' }} />
            <Styled.FavoritesCount isMobile={isMediumDevice}>
              {favoriteList.length} favorites
            </Styled.FavoritesCount>
          </Grid>
        </Styled.FiltersContainer>
        <Styled.ListWrapper>
          {favoriteList.map((nft, i) => (
            <Card
              key={i}
              data={nft}
              hasPrice
              onFavoriteClick={user?.addr && (() => handleGetFavorites(user.addr))}
              hasActions={
                !!user && user.loggedIn && user.addr === router.query.id && nft.owner === user.addr
              }
            />
          ))}
        </Styled.ListWrapper>
      </>
    );
  }, [loading, favoriteList, user, isMediumDevice]);

  return renderList;
};

export default memo(Favorites);
