import React, { memo, useMemo } from 'react';

import { CardFilledProps } from './types';
import * as Styled from './styles';
import { COMING_STATUS } from 'collections_setup';
import Link from 'next/link';
import { Box } from '@mui/material';

const getCardSize = (total: number, index: number, columns: number) => {
  const totalRows = Math.ceil(total / columns);
  const rowPosition = Math.floor(index / columns) + 1;

  const isLastRow = totalRows === rowPosition;

  if (isLastRow) {
    const lastRowColumnsCount = total % columns;
    if (lastRowColumnsCount === 0) return 12 / columns;
    return 12 / lastRowColumnsCount;
  } else {
    return 12 / columns;
  }
};

const getCardSizings = (total: number, index: number) => {
  let lgColumns = 4;
  let smColumns = 2;

  if (total % 4 === 1) {
    lgColumns = 3;
  }

  const [xs, sm, lg] = [
    12,
    getCardSize(total, index, smColumns),
    getCardSize(total, index, lgColumns)
  ];

  return {
    xs,
    sm,
    lg
  };
};

function CardFilled(props: CardFilledProps) {
  const { card, children } = props;

  const isComingSoon = card?.config?.comingStatus === COMING_STATUS.COMING_SOON;

  const collectionPath = useMemo(() => {
    if (isComingSoon) {
      return '/';
    }

    const path = card?.config?.collectionPath ?? '#';
    return path;
  }, [card]);

  return (
    <Styled.CardContainer item {...getCardSizings(props.total, props.index)} position="relative">
      <Styled.Shadow second={false} />
      <Styled.Shadow second={true} />
      <Link href={collectionPath} passHref>
        <Box
          component="a"
          href={collectionPath}
          sx={{ textDecoration: 'none', cursor: isComingSoon ? 'auto' : 'pointer' }}>
          <Styled.CardContent bgImg={card?.config?.ipBanner}>
            <Styled.CardShadow bgColor={card?.config?.ipMainColor}>{children}</Styled.CardShadow>
          </Styled.CardContent>
        </Box>
      </Link>
    </Styled.CardContainer>
  );
}

export default memo(CardFilled);
