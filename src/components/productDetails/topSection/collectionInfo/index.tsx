import { Box, Grid, Typography, useTheme } from '@mui/material';
import PropTypes from 'prop-types';
import FavoriteIcon from '@mui/icons-material/Favorite';

import useCollectionConfig from '~/hooks/useCollectionConfig';
import useAuth from '~/hooks/useAuth';

import { CollectionInfoProps } from './types';

import * as Styled from './styles';

const CollectionInfo = (props: CollectionInfoProps) => {
  const { name } = props;
  const {
    palette: { grey, primary }
  } = useTheme();
  const { user, login } = useAuth();

  const { config } = useCollectionConfig();

  const handleFavorite = async () => {
    if (!user?.addr) {
      await login();
    }
    // TODO: Implement integration with GraphQL
  };
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
      <Styled.FavoriteButton onClick={handleFavorite} aria-label="Favorite Button">
        <FavoriteIcon />
      </Styled.FavoriteButton>
    </Styled.Container>
  );
};

CollectionInfo.propTypes = {
  name: PropTypes.string.isRequired
};

export default CollectionInfo;
