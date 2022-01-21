import { Box, Grid, Typography, useTheme } from '@mui/material';
import PropTypes from 'prop-types';

import useCollectionConfig from '~/hooks/useCollectionConfig';
import ShareButton from '~/components/shareButton';

import * as Styled from './styles';
import useBreakpoints from '~/hooks/useBreakpoints';
import FavoriteButton from '~/components/favoriteButton';

const CollectionInfo = props => {
  const { name, nftId } = props;
  const { isMediumDevice } = useBreakpoints();
  const {
    palette: { grey, primary }
  } = useTheme();
  const { config } = useCollectionConfig();

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
      {!isMediumDevice && (
        <Grid flexDirection="row" container width="auto">
          <ShareButton />
          <Box width="10px" />
          <FavoriteButton nftId={nftId} />
        </Grid>
      )}
    </Styled.Container>
  );
};

CollectionInfo.propTypes = {
  name: PropTypes.string.isRequired
};

export default CollectionInfo;
