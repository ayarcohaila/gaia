import React, { memo } from 'react';
import { Grid, Typography } from '@mui/material';

import BurstIcon from '~/base/burstIcon';

import * as Styled from './styles';
import { CardFillProps } from './types';
import { formatCurrencyValue } from '~/utils/formatCurrencyValue';

function CardFill(props: CardFillProps) {
  const { card } = props;

  return (
    <Grid p={4} container direction="column" sx={{ height: '100%' }} justifyContent="space-between">
      <Grid container alignItems="center">
        <Styled.AvatarCollection src={card?.config?.avatar} alt="top shot" />
        <Styled.VerticalDivider orientation="vertical" flexItem />
        <Typography variant="subtitle1">{`@${card.config.collectionName}`}</Typography>
      </Grid>

      <Grid>
        <Styled.Description my={2} variant="subtitle1">
          {card?.nft?.template?.collection?.description.substring(0, 200)}
        </Styled.Description>
        <Styled.CardDivider />
        <Grid mt={2} container alignItems="end">
          <Grid item container xs={6}>
            <BurstIcon />
            <Typography component="span">{card?.config?.collectionSize} Cards</Typography>
          </Grid>
          <Grid item xs={6} container>
            ${formatCurrencyValue(card?.nft?.sale_offers[0]?.price) || '0'}
            <Styled.Description ml={1} variant="subtitle1">
              and up
            </Styled.Description>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default memo(CardFill);
