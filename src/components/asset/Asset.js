import Image from 'next/image';
import Link from 'next/link';
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
import { getImageURL } from '~/utils/getImageUrl';
import { URLs } from '~/routes/urls';

const Asset = ({ imgURL, collection, name, price, owner, id }) => {
  const avatarSource = owner?.src ? { src: owner.src } : { icon: <UserOutlined /> };
  return (
    <Link href={URLs.explorer(id)}>
      <Card className="token-card">
        {owner && <StyledAvatar size="small" {...avatarSource} />}
        <CardImage src={getImageURL(imgURL ?? '')} />
        <div className="text-content">
          <ContentContainer>
            <Collection>{collection}</Collection>
            <Text>{name}</Text>
          </ContentContainer>
          {price && (
            <PriceContainer>
              <Image src="/icons/list.svg" width={10} height={10} />
              <Price>{price.toFixed(4)}</Price>
            </PriceContainer>
          )}
        </div>
      </Card>
    </Link>
  );
};

Asset.propTypes = {
  imgURL: PropTypes.string.isRequired,
  collection: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.number,
  owner: PropTypes.shape({
    src: PropTypes.string
  })
};

Asset.defaultProps = {
  owner: null
};

export default Asset;
