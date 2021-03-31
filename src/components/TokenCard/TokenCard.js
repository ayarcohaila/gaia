import Image from 'next/image';
import { UserOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

import {
  Card,
  CardImage,
  Collection,
  Text,
  PriceContainer,
  Price,
  ContentContainer,
  StyledAvatar
} from './styled';

const TokenCard = ({ imgUrl, collection, name, price, owner }) => {
  const avatarSource = owner?.src ? { src: owner.src } : { icon: <UserOutlined /> };

  return (
    <Card className="token-card">
      {owner && <StyledAvatar size="small" {...avatarSource} />}
      <CardImage src={imgUrl} />
      <div className="text-content">
        <ContentContainer>
          <Collection>{collection}</Collection>
          <Text>{name}</Text>
        </ContentContainer>
        <PriceContainer>
          <Image src="/icons/list.svg" width={10} height={10} />
          <Price>{price}</Price>
        </PriceContainer>
      </div>
    </Card>
  );
};

TokenCard.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  collection: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    src: PropTypes.string
  })
};

TokenCard.defaultProps = {
  owner: null
};

export default TokenCard;
