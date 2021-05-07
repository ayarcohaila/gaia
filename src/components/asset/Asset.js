import Image from 'next/image';
import Link from 'next/link';
import { Button } from 'antd';
import { UserOutlined, CaretDownOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

import {
  Card,
  CardImage,
  AssetDescription as Description,
  Text,
  PriceContainer,
  Price,
  ContentContainer,
  StyledAvatar,
  DropDownContainer
} from './styled';
import { getImageURL } from '~/utils/getImageUrl';
import formatPrice from '~/utils/formatPrice';
import { URLs } from '~/routes/urls';
import DropDown from '~/components/dropdown/DropDown';

const Asset = ({
  imgURL,
  description,
  name,
  price,
  owner,
  id,
  showSell,
  showCancel,
  sell,
  cancel,
  actions,
  linkTo
}) => {
  const avatarSource = owner?.src ? { src: owner.src } : { icon: <UserOutlined /> };
  const Component = (
    <Card className="token-card">
      {owner && <StyledAvatar size="small" {...avatarSource} />}
      <CardImage src={getImageURL(imgURL ?? '')} />
      <div className="text-content">
        <ContentContainer fullWidth={!price}>
          <Text>{name}</Text>
          <Description ellipsis={{ rows: 2 }}>{description}</Description>
        </ContentContainer>
        {price && (
          <PriceContainer>
            <Image src="/icons/list.svg" width={10} height={10} />
            <Price>{formatPrice(price)}</Price>
          </PriceContainer>
        )}
      </div>
      {actions && (
        <DropDownContainer>
          <DropDown title="actions" options={actions} icon={<CaretDownOutlined />} />
        </DropDownContainer>
      )}
      {(showSell || showCancel) && (
        <div className="buttons-container">
          {showSell && (
            <Button
              type="primary"
              shape="round"
              onClick={e => {
                e.stopPropagation();
                sell();
              }}>
              Sell
            </Button>
          )}
          {showCancel && (
            <Button
              type="primary"
              shape="round"
              danger
              onClick={e => {
                e.stopPropagation();
                cancel();
              }}>
              Cancel sale
            </Button>
          )}
        </div>
      )}
    </Card>
  );

  return id ? <Link href={linkTo ?? URLs.explorer(id)}>{Component}</Link> : Component;
};

Asset.propTypes = {
  imgURL: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number,
  price: PropTypes.number,
  owner: PropTypes.shape({
    src: PropTypes.string
  }),
  showSell: PropTypes.bool,
  showCancel: PropTypes.bool,
  sell: PropTypes.func,
  cancel: PropTypes.func,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      action: PropTypes.func
    })
  ),
  linkTo: PropTypes.string
};

Asset.defaultProps = {
  showSell: false,
  showCancel: false,
  id: null,
  owner: null,
  actions: null,
  linkTo: null
};

export default Asset;
