import React, { memo, useMemo } from 'react';
import { Grid, Typography } from '@mui/material';

import * as Styled from './styles';
import { CardFillProps } from './types';
import { formatCurrencyValue } from '~/utils/formatCurrencyValue';

import { COMING_STATUS } from '../../../../collections_setup';
import CounterFill from '../counterFill';
import formatK from '~/utils/formatK';

function CardFill(props: CardFillProps) {
  const { card } = props;

  const renderCardContent = useMemo(() => {
    return (
      <>
        <Grid container alignItems="center" mt="auto" mb="25px" height="130px">
          <Styled.CollectionIcon src={card?.config?.ipLogo} alt="logo" />
        </Grid>
        <Grid>
          {card.config.comingStatus !== COMING_STATUS.PRIMARY_DROP && <Styled.CardDivider />}
          <Grid mt={2} container alignItems="end">
            <Grid item container alignItems="center">
              {card.config.comingStatus === COMING_STATUS.COMING_SOON && (
                <>
                  <Styled.BurstIcon src="/icons/burst.svg" alt="burst" />
                  <Typography ml={'10px'} component="span">
                    Coming Soon
                  </Typography>
                </>
              )}
              {card.config.comingStatus === COMING_STATUS.SECONDARY_MKT && (
                <>
                  <Styled.BurstIcon src="/icons/burst.svg" alt="burst" />
                  <Typography ml={'10px'} component="span">
                    {formatK(Number(card?.config?.collectionSize))} Cards
                  </Typography>
                  <Styled.Description ml="10px">&#8226;</Styled.Description>
                  <Typography ml="10px" component="span">
                    ${formatCurrencyValue(card?.nft?.sale_offers[0]?.price) || '0'}
                  </Typography>
                  <Styled.Description ml={1} variant="subtitle1">
                    and up
                  </Styled.Description>
                </>
              )}
              {card.config.comingStatus === COMING_STATUS.PRIMARY_DROP && (
                <CounterFill countDownUnix={3652199113} bgColor={card?.config?.mainColor} />
              )}
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  }, []);

  return (
    <Grid
      p={4}
      pb={2}
      container
      direction="column"
      sx={{ height: '100%' }}
      justifyContent="space-between">
      {renderCardContent}
    </Grid>
  );
}

export default memo(CardFill);
