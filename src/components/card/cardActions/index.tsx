import React, { memo } from 'react';
import { CardActions as BaseCardActions, Grid } from '@mui/material';
import { hasSell, hasTransfer } from '~/config/config';
import { ComingSoon, CancelButton, TransferButton, SellButton } from './styled';
import { formatCurrencyValue } from '~/utils/formatCurrencyValue';
import getLastByUpdateAt from '~/utils/getLastByUpdateAt';
import { CardActionsProps } from './types';

const CardActions = (props: CardActionsProps) => {
  const { data, loading, toggleCancelListingModal, toggleSellNftModal, toggleTransferNftModal } =
    props;

  if (!hasSell && !hasTransfer) {
    return (
      <Grid container justifyContent="center">
        <ComingSoon container justifyContent="center">
          Sell & Transfer Coming Soon
        </ComingSoon>
      </Grid>
    );
  }

  const price = formatCurrencyValue(
    getLastByUpdateAt(data?.sale_offers.filter(item => item.status === 'active'))?.price
  );
  return (
    <BaseCardActions sx={{ justifyContent: 'center' }}>
      {data?.has_sale_offers && data?.sale_offers.some(item => item.status === 'active') ? (
        <CancelButton
          disabled={loading}
          variant="text"
          onClick={(event: any) => {
            event?.stopPropagation();
            toggleCancelListingModal();
          }}>
          Remove ${price} Listing
        </CancelButton>
      ) : (
        <>
          {hasSell && (
            <SellButton
              disabled={loading}
              onClick={event => {
                event.stopPropagation();
                toggleSellNftModal();
              }}>
              Sell
            </SellButton>
          )}
          {hasTransfer && (
            <TransferButton
              disabled={loading}
              onClick={event => {
                event?.stopPropagation();
                toggleTransferNftModal();
              }}>
              Transfer
            </TransferButton>
          )}
        </>
      )}
    </BaseCardActions>
  );
};

export default memo(CardActions);
