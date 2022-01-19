import { Box, Grid, Typography, useTheme } from '@mui/material';
import PropTypes from 'prop-types';

import useCollectionConfig from '~/hooks/useCollectionConfig';

import { CollectionInfoProps } from './types';
import { CollectionInforAvatar, VerifiedIcon } from './styles';

const CollectionInfo = (props: CollectionInfoProps) => {
  const { name } = props;
  const {
    palette: { grey, primary }
  } = useTheme();

  const { config } = useCollectionConfig();
  return (
    <>
      <CollectionInforAvatar alt="product name" src={config.avatar} />
      <Box ml={1.5} mr="auto">
        <Typography variant="h5">{name}</Typography>
        <Grid alignItems="center" container>
          <Typography color={grey[600]} mr={0.5} variant="subtitle1">
            @{name.replace(/[^\w]/gi, '')}
          </Typography>
          <VerifiedIcon htmlColor={primary.main} />
        </Grid>
      </Box>
    </>
  );
};

CollectionInfo.propTypes = {
  name: PropTypes.string.isRequired
};

export default CollectionInfo;
