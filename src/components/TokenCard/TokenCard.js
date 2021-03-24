import Image from 'next/image';

import PropTypes from 'prop-types';

import {
  Card,
  CardImage,
  Collection,
  Text,
  PriceContainer,
  Price,
  ContentContainer
} from './styled';

const TokenCard = ({ imgUrl, collection, name, price }) => {
  return (
    <Card className="token-card">
      <CardImage src={imgUrl} />
      <div className="text-content">
        <ContentContainer>
          <Collection>{collection}</Collection>
          <Text>{name}</Text>
        </ContentContainer>
        <PriceContainer>
          <Image src="/icons/list.svg" width={10} height={10} />
          <Price>{price.toFixed(4)}</Price>
        </PriceContainer>
      </div>
    </Card>
  );
};

TokenCard.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  collection: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default TokenCard;
