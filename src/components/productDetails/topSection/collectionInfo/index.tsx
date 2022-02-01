import { Box, Grid, Typography, useTheme } from '@mui/material';
import FavoriteButton from '~/components/favoriteButton';
import ShareButton from '~/components/shareButton';
import useBreakpoints from '~/hooks/useBreakpoints';
import useCollectionConfig from '~/hooks/useCollectionConfig';
import * as Styled from './styles';
import { CollectionInfoProps } from './types';

const CollectionInfo = (props: CollectionInfoProps) => {
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

export default CollectionInfo;
