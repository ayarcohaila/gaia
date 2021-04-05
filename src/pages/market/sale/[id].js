import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Row, Col, Modal, Input } from 'antd';
import { useMemo, useState, useEffect } from 'react';

import {
  StyledImage,
  Heading,
  OwnerName,
  ReadMore,
  Description,
  StyledButton,
  InfoHeading,
  InfoWrapper,
  TokenWrapper,
  Price
} from '~/components/asset/styled';
import UserInfo from '~/components/UserInfo/UserInfo';
import useAuth from '~/hooks/useAuth';
import useMarket from '~/hooks/useMarket';
import { getAsset } from '~/flow/getAsset';
import { getProfile } from '~/flow/getProfile';
import { changePrice } from '~/flow/changePrice';
import { buy } from '~/flow/buy';
import { getImageURL } from '~/utils/getImageUrl';
import { URLs } from '~/routes/urls';

const Sale = () => {
  const {
    query: { id }
  } = useRouter();
  const { user } = useAuth();
  const { sales } = useMarket(user?.addr);

  const [completeDescription, setCompleteDescription] = useState(false);
  const [editPriceVisible, setEditPriceVisible] = useState(false);
  const [newPrice, setNewPrice] = useState(null);
  const [nft, setNft] = useState({
    name: '',
    description: '',
    imgURL: '',
    price: 0,
    ownerProfile: {
      name: '',
      avatar: '',
      address: ''
    }
  });

  const description = useMemo(() => {
    if (completeDescription || nft.description.length < 330) {
      return nft.description;
    } else {
      return `${nft.description.substr(0, 330)}...`;
    }
  }, [completeDescription, nft]);

  useEffect(async () => {
    if (user?.addr && sales.length > 0) {
      const asset = await getAsset(user.addr, Number(id));
      const { price, owner } = sales.filter(sale => sale.id === Number(id))[0];
      const ownerProfile = await getProfile(owner);
      setNft({ ...asset, price, ownerProfile });
    }
  }, [id, user, sales]);

  const handleBuy = async () => {
    try {
      await buy(Number(id), user?.addr);
      Modal.success({
        title: 'Congratulations!',
        content: `You have successfully bought an ${nft.name}`
      });
    } catch (error) {
      Modal.error({
        title: `Failed to buy ${nft.name}`,
        content: 'Please, try again'
      });
    }
  };

  const handleEditPrice = async () => {
    setEditPriceVisible(false);
    try {
      await changePrice(user?.addr, Number(id), Number(newPrice));
      Modal.success({
        title: 'Price successfully updated!'
      });
    } catch (error) {
      Modal.error({
        title: `Failed to update price`
      });
    }
  };

  return (
    <TokenWrapper>
      <Head>
        <title>Details | NiftyBeats</title>
      </Head>
      <Col span={18} offset={3}>
        <Row justify="flex-start" wrap={false}>
          <StyledImage src={getImageURL(nft.imgURL)} />
          <div className="content">
            <Heading>{nft.name}</Heading>
            <p>
              Owned by{' '}
              <Link href={URLs.profile(user?.addr)}>
                <OwnerName>{nft.ownerProfile.name}</OwnerName>
              </Link>
            </p>
            <Description>
              {description}{' '}
              {description.length > 330 && (
                <ReadMore onClick={() => setCompleteDescription(prevState => !prevState)}>
                  Show {completeDescription ? 'less' : 'more'}
                </ReadMore>
              )}
            </Description>
            <InfoWrapper>
              <InfoHeading>Info</InfoHeading>
              <UserInfo
                name={nft.ownerProfile.name}
                src={getImageURL(nft.ownerProfile.avatar ?? '')}
                type="Creator"
              />
              <p>
                Price: <Price>{Number(nft.price).toFixed(4)}</Price>
              </p>
              {user?.addr !== nft.ownerProfile?.address ? (
                <StyledButton type="primary" shape="round" onClick={handleBuy}>
                  Buy
                </StyledButton>
              ) : (
                <>
                  <StyledButton
                    type="primary"
                    shape="round"
                    onClick={() => setEditPriceVisible(true)}>
                    Edit price
                  </StyledButton>
                  <Modal
                    visible={editPriceVisible}
                    title="Insert new price"
                    onCancel={() => setEditPriceVisible(false)}
                    onOk={handleEditPrice}
                    okButtonProps={{
                      disabled: !newPrice
                    }}
                    destroyOnClose>
                    <Input placeholder="New price" onChange={setNewPrice} />
                  </Modal>
                </>
              )}
            </InfoWrapper>
          </div>
        </Row>
      </Col>
    </TokenWrapper>
  );
};

export default Sale;
