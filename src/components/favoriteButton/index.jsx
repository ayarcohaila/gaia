import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import useAuth from '~/hooks/useAuth';

import * as Styled from './styles';

const ADD_FAVORITE = '/api/favorites/add';
const REMOVE_FAVORITE = '/api/favorites/remove';
const CHECK_FAVORITE = '/api/favorites/checkFavorite';

// This temp ID is being used to change the status of the button heart
// button to select while the request is happing in the background
const TEMP_ID = '1';

const FavoriteButton = props => {
  const { nftId, afterClick } = props;
  const [favoriteId, setFavoriteId] = useState('');
  const [loading, setLoading] = useState(false);
  const { user, login } = useAuth();

  const handleFavorite = useCallback(
    async e => {
      e.preventDefault();
      if (!user?.addr) {
        await login();
        return;
      }
      setLoading(true);
      if (favoriteId) {
        setFavoriteId('');
      } else {
        setFavoriteId(TEMP_ID);
      }

      const currentRequest = favoriteId ? REMOVE_FAVORITE : ADD_FAVORITE;
      const currentPayload = favoriteId
        ? {
            id: favoriteId
          }
        : {
            nftId,
            address: user?.addr
          };
      const { data } = await axios.post(currentRequest, currentPayload);
      setFavoriteId(data.id);
      setLoading(false);
      afterClick && afterClick();
    },
    [user?.addr, favoriteId, setFavoriteId]
  );

  const handleCheckNftFavorite = useCallback(
    async address => {
      const { data } = await axios.post(CHECK_FAVORITE, {
        nftId,
        address
      });
      setFavoriteId(data.id);
    },
    [setFavoriteId]
  );

  useEffect(() => {
    if (user?.addr) {
      handleCheckNftFavorite(user?.addr);
    }
  }, [user?.addr, handleCheckNftFavorite]);

  return (
    <Styled.FavoriteButton
      onClick={handleFavorite}
      aria-label="Favorite Button"
      isFavorite={favoriteId}
      disabled={loading}>
      <FavoriteIcon />
    </Styled.FavoriteButton>
  );
};

export default FavoriteButton;
