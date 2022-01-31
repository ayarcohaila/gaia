import React, { memo } from 'react';

import { CardFilledProps } from './types';
import * as Styled from './styles';

function CardFilled(props: CardFilledProps) {
  const { card, children } = props;
  return (
    <Styled.CardContent bgImg={card?.config?.banner}>
      <Styled.CardShadow bgColor={card?.config?.mainColor}>{children}</Styled.CardShadow>
    </Styled.CardContent>
  );
}

export default memo(CardFilled);
