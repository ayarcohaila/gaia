import { memo } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { ContentCopy as CopyIcon, Link as LinkIcon } from '@mui/icons-material';
import { Box, Grid, IconButton, Typography, useTheme } from '@mui/material';

import useBreakpoints from '~/hooks/useBreakpoints';
import useCopyToClipboard from '~/hooks/useCopyToClipboard';

const ModalSuccessContent = ({ address, tx }) => {
  const {
    palette: { grey }
  } = useTheme();
  const { query } = useRouter();
  const [, copy] = useCopyToClipboard();
  const { isSmallDevice } = useBreakpoints();

  const handleCopyWalletAddress = () => {
    copy(address);
    toast.success('Wallet address copied to clipboard!');
  };

  const handleCopyFlowScan = () => {
    copy(`${process.env.NEXT_PUBLIC_FLOW_SCAN}transaction/${tx}`);
    toast.success('Wallet address copied to clipboard!');
  };

  const handleRedirectToFlowScan = () => {
    window.open(`${process.env.NEXT_PUBLIC_FLOW_SCAN}transaction/${tx}`, '_blank')?.focus();
    toast.success('Wallet address copied to clipboard!');
  };

  return (
    <>
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
        <Box width="104px">
          <Typography
            color={grey[700]}
            fontFamily="IBMPlexMono"
            fontWeight="600"
            noWrap
            variant="subtitle1">
            Flowscan
          </Typography>
        </Box>
        <Box>
          <IconButton p="0" onClick={handleCopyFlowScan}>
            <CopyIcon sx={{ color: grey[700], fontSize: '14px' }} />
          </IconButton>
          <IconButton p="0" onClick={handleRedirectToFlowScan}>
            <LinkIcon sx={{ color: grey[700], fontSize: '14px' }} />
          </IconButton>
        </Box>
      </Grid>
    </>
  );
};

ModalSuccessContent.propTypes = {
  address: PropTypes.string
};

ModalSuccessContent.defaultProps = {
  address: ''
};

export default memo(ModalSuccessContent);
