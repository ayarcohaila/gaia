import { Avatar, Box, Grid, Typography, useTheme } from '@mui/material';
import { Verified as VerifiedIcon } from '@mui/icons-material';
import PropTypes from 'prop-types';

import useCollectionConfig from '~/hooks/useCollectionConfig';
import useBreakpoints from '~/hooks/useBreakpoints';

const CollectionInfo = ({ name }) => {
  const {
    palette: { grey, primary }
  } = useTheme();

  const { config } = useCollectionConfig();
  const { isMediumDevice } = useBreakpoints();
  return (
    <>
      <Avatar
        alt="product name"
        src={config.avatar}
        sx={{ height: isMediumDevice ? '56px' : '48px', width: isMediumDevice ? '56px' : '48px' }}
      />
      <Box ml={1.5} mr="auto">
        <Typography variant="h5">{name}</Typography>
        <Grid alignItems="center" container>
          <Typography color={grey[600]} mr={1} variant="subtitle1">
            @{name.replace(/[^\w]/gi, '')}
          </Typography>
          <VerifiedIcon htmlColor={primary.main} fontSize="1rem" />
        </Grid>
      </Box>
    </>
  );
};

CollectionInfo.propTypes = {
  name: PropTypes.string.isRequired
};

export default CollectionInfo;
