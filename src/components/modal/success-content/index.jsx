import { memo } from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, IconButton, Typography, useTheme } from '@mui/material';
import { ContentCopy as CopyIcon } from '@mui/icons-material';
import { toast } from 'react-toastify';

import useBreakpoints from '~/hooks/useBreakpoints';
import useCopyToClipboard from '~/hooks/useCopyToClipboard';
import { useRouter } from 'next/router';

const ModalSuccessContent = ({ address }) => {
  const {
    palette: { grey }
  } = useTheme();
  const { query } = useRouter();
  const [, copy] = useCopyToClipboard();
  const { isSmallDevice } = useBreakpoints();

  const handleCopyWalletAddress = () => {
    copy(address);
    toast.success('Wallet address copied to clipboard!', { position: toast.POSITION.BOTTOM_LEFT });
  };

  return (
    <Grid
      alignItems="center"
      bgcolor={grey[300]}
      borderRadius="10px"
      container
      height="56px"
      justifyContent="space-between"
      maxWidth="254px"
      mt={isSmallDevice ? '4px' : '12px'}
      p="14px 20px 20px">
      <Typography color={grey[600]} fontFamily="IBMPlexMono" fontWeight="600" variant="subtitle1">
        Wallet:
      </Typography>
      <Box width="104px">
        <Typography
          color={grey[700]}
          fontFamily="IBMPlexMono"
          fontWeight="600"
          noWrap
          variant="subtitle1">
          {address || query?.id}
        </Typography>
      </Box>
      <IconButton p="0" onClick={handleCopyWalletAddress}>
        <CopyIcon sx={{ color: grey[700], fontSize: '14px' }} />
      </IconButton>
    </Grid>
  );
};

ModalSuccessContent.propTypes = {
  address: PropTypes.string
};

ModalSuccessContent.defaultProps = {
  address: ''
};

export default memo(ModalSuccessContent);
