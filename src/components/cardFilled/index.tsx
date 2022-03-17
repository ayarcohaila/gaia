import React, { memo, useMemo } from 'react';

import { CardFilledProps } from './types';
import * as Styled from './styles';
import { COMING_STATUS } from 'collections_setup';
import Link from 'next/link';
import { Box } from '@mui/material';

function CardFilled(props: CardFilledProps) {
  const { card, children, shadow } = props;

  const collectionPath = useMemo(() => {
    if (card?.config?.comingStatus === COMING_STATUS.COMING_SOON) {
      return '/';
    }

    const path = card?.config?.collectionPath ?? '/';
    return path;
  }, [card]);

  return (
    <>
      {shadow && (
        <>
          <Styled.Shadow second={false} />
          <Styled.Shadow second={true} />
        </>
      )}
      <Link href={collectionPath} passHref>
        <Box
          component="a"
          href={collectionPath}
          sx={{
            textDecoration: 'none',
            pointerEvents: collectionPath.length > 1 ? undefined : 'none'
          }}>
          <Styled.CardContent bgImg={card?.config?.ipBanner}>
            <Styled.CardShadow bgColor={card?.config?.ipMainColor}>{children}</Styled.CardShadow>
          </Styled.CardContent>
        </Box>
      </Link>
    </>
  );
}

export default memo(CardFilled);
