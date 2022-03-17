import React, { memo, useMemo } from 'react';
import { Grid, Typography } from '@mui/material';

import * as Styled from './styles';
import { CardFillProps } from './types';
import { formatCurrencyValue } from '~/utils/formatCurrencyValue';

import { COMING_STATUS } from '../../../../collections_setup';
import CounterFill from '../counterFill';
import formatK from '~/utils/formatK';
import BurstIcon from './burstIcon';

function CardFill(props: CardFillProps) {
  const { card } = props;

  const renderFooter = useMemo(() => {
    if (card.config.comingStatus === COMING_STATUS.COMING_SOON) {
      return (
        <>
          <BurstIcon iconColor={card?.config?.ipTextColor || '#FFF'} />
          <Typography ml={'10px'} fontWeight="600" component="span">
            Coming Soon
          </Typography>
        </>
      );
    }

    if (card.config.comingStatus === COMING_STATUS.PRIMARY_DROP) {
      <CounterFill countDownUnix={3652199113} bgColor={card?.config?.mainColor} />;
    }

    return (
      <>
        {card.lowerPrice && (
          <>
            <BurstIcon iconColor={card?.config?.ipTextColor || '#FFF'} />
            <Typography ml={'10px'} component="span" fontWeight="600">
              {formatK(Number(card?.config?.collectionSize))} Cards
            </Typography>
            <Styled.Bullet />
            <Typography component="span" variant="body1" fontWeight="600">
              ${formatCurrencyValue(card?.lowerPrice) || '0'} +
            </Typography>
          </>
        )}
      </>
    );
  }, [card]);

  const renderCardContent = useMemo(() => {
    return (
      <>
        {card?.config?.ipLogo ? (
          <Grid container alignItems="center" mt="auto" mb="25px" height="130px">
            <Styled.CollectionIcon src={card?.config?.ipLogo} alt="logo" />
          </Grid>
        ) : (
          <Grid container alignItems="center" mt="auto" mb="25px">
            <Typography fontSize="22px" lineHeight="120%" fontWeight={600}>
              {card?.config?.pageTitle}
            </Typography>
          </Grid>
        )}

        <Grid>
          {card.config.comingStatus !== COMING_STATUS.PRIMARY_DROP && (
            <Styled.CardDivider color={card?.config?.ipTextColor} />
          )}
          <Grid mt={2} container alignItems="end">
            <Grid item container alignItems="center" color={card?.config?.ipTextColor || '#fff'}>
              {renderFooter}
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
