import React, { memo } from 'react';
import * as Styled from './styled';
import { Props } from './types';

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

const CardContainer: React.FC<Props> = ({ children, index, total }) => {
  return (
    <Styled.Container item {...getCardSizings(total, index)}>
      {children}
    </Styled.Container>
  );
};

export default memo(CardContainer);
