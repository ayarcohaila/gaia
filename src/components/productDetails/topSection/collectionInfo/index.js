import { useCallback, useState, useEffect } from 'react';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import PropTypes from 'prop-types';
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from 'axios';

import useCollectionConfig from '~/hooks/useCollectionConfig';
import useAuth from '~/hooks/useAuth';

import * as Styled from './styles';

const ADD_FAVORITE = '/api/favorites/add';
const REMOVE_FAVORITE = '/api/favorites/remove';
const CHECK_FAVORITE = '/api/favorites/checkFavorite';

// This temp ID is being used to change the status of the button heart
// button to select while the request is happing in the background
const TEMP_ID = '1';

const CollectionInfo = props => {
  const { name, nftId } = props;
  const [loading, setLoading] = useState(false);
  const [favoriteId, setFavoriteId] = useState('');
  const {
    palette: { grey, primary }
  } = useTheme();
  const { user, login } = useAuth();
  const { config } = useCollectionConfig();

  const handleFavorite = useCallback(async () => {
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
  }, [user?.addr, favoriteId, setFavoriteId]);

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
    <Styled.Container>
      <Styled.Collection>
        <Styled.CollectionInforAvatar alt="product name" src={config.avatar} />
        <Box ml={1.5} mr="auto">
          <Typography variant="h5">{name}</Typography>
          <Grid alignItems="center" container>
            <Typography color={grey[600]} mr={0.5} variant="subtitle1">
              @{name.replace(/[^\w]/gi, '')}
            </Typography>
            <Styled.VerifiedIcon htmlColor={primary.main} />
          </Grid>
        </Box>
      </Styled.Collection>
      <Styled.FavoriteButton
        onClick={handleFavorite}
        aria-label="Favorite Button"
        isFavorite={favoriteId}
        disabled={loading}>
        <FavoriteIcon />
      </Styled.FavoriteButton>
    </Styled.Container>
  );
};

CollectionInfo.propTypes = {
  name: PropTypes.string.isRequired
};

export default CollectionInfo;
