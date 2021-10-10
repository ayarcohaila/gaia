import { memo, useCallback } from 'react';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import { ChevronRight as ArrowRightIcon } from '@mui/icons-material';
import PropTypes from 'prop-types';

import useBreakpoints from '~/hooks/useBreakpoints';
import { Button } from '~/base';
import Modal from '..';
import { useRouter } from 'next/router';

const OrderCompleteModal = ({ asset, blockchainId, orderId, ...props }) => {
  const {
    palette: { grey }
  } = useTheme();
  const router = useRouter();
  const { isExtraSmallDevice, isSmallDevice } = useBreakpoints();

  const renderConfirmationItem = useCallback(
    (isBlockchain = true) => {
      return (
        <Grid
          alignItems="center"
          bgcolor={grey[300]}
          borderRadius="10px"
          container
          height="56px"
          justifyContent="space-between"
          mt="8px"
          mx={isSmallDevice ? 'auto' : '0'}
          p="20px"
          width={isSmallDevice ? '100%' : '400px'}>
          <Typography
            color={grey[600]}
            fontFamily="IBMPlexMono"
            fontWeight="600"
            variant="subtitle1">
            {`${isBlockchain ? 'Blockchain' : asset?.collectionName} confirmation:`}
          </Typography>
          <Typography
            color={grey[700]}
            fontFamily="IBMPlexMono"
            fontWeight="600"
            noWrap
            variant="subtitle1">
            {isBlockchain ? blockchainId : orderId}
          </Typography>
        </Grid>
      );
    },
    [asset, blockchainId, isSmallDevice, orderId]
  );

  return (
    <Modal
      description={`Congratulations, you are now the proud owner of ${asset?.collectionName} #${asset?.id}.`}
      descriptionSx={{ maxWidth: '280px', mt: '16px', textAlign: 'center' }}
      height="518px"
      mobileHeight={isExtraSmallDevice ? 80 : 72}
      title="Order Complete!"
      titleSx={{ mt: '108px' }}
      {...props}>
      <Box>
        {renderConfirmationItem()}
        {renderConfirmationItem(false)}
      </Box>
      {/* TODO: Change to correct route on button click */}
      <Button
        endIcon={<ArrowRightIcon />}
        onClick={() => router.push(`/collections/${asset?.collectionName}`)}
        sx={{
          height: isSmallDevice ? 'auto' : '40px',
          mt: '24px'
        }}>{`Go to My ${asset?.collectionName}`}</Button>
    </Modal>
  );
};

OrderCompleteModal.propTypes = {
  asset: PropTypes.object,
  blockchainId: PropTypes.string,
  orderId: PropTypes.string
};

OrderCompleteModal.defaultProps = {
  asset: {
    id: 1234,
    collectionName: 'BALLERZ',
    image: 'https://pbs.twimg.com/media/FA87bFnVEAE6iKc.jpg'
  },
  blockchainId: '214992321',
  orderId: '1952F837HD'
};

export default memo(OrderCompleteModal);
