/* eslint-disable no-console */
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Row, Col, Modal, Typography, Form, InputNumber } from 'antd';
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
import { cancelSale } from '~/flow/cancelSale';
import { buy } from '~/flow/buy';
import { getImageURL } from '~/utils/getImageUrl';
import { URLs } from '~/routes/urls';
const { Text } = Typography;

const Sale = () => {
  const {
    query: { id }
  } = useRouter();
  const { user } = useAuth();
  const { sales } = useMarket(user?.addr);

  const [completeDescription, setCompleteDescription] = useState(false);
  const [editPriceVisible, setEditPriceVisible] = useState(false);
  const [cancelModalVisible, setCancelModalVisible] = useState(false);
  const [isModalLoading, setIsModalLoading] = useState(false);
  const [form] = Form.useForm();
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
    setIsModalLoading(true);
    try {
      await buy(Number(id), user?.addr);
      setIsModalLoading(false);
      Modal.success({
        title: 'Congratulations!',
        content: `You have successfully bought an ${nft.name}`
      });
    } catch (error) {
      setIsModalLoading(false);
      Modal.error({
        title: `Failed to buy ${nft.name}`,
        content: 'Please, try again'
      });
    }
  };

  const handleEditPrice = async ({ newPrice }) => {
    setIsModalLoading(true);

    try {
      await changePrice(user?.addr, parseInt(id, 10), Number(newPrice));
      setIsModalLoading(false);
      Modal.success({
        title: 'Price successfully updated!'
      });
    } catch (error) {
      setIsModalLoading(false);
      console.warn(error);
      Modal.error({
        title: `Failed to update price`
      });
    } finally {
      setEditPriceVisible(false);
    }
  };
  const handleCancelSale = async () => {
    setIsModalLoading(true);
    try {
      await cancelSale(Number(id));
      setIsModalLoading(false);
      Modal.success({
        title: 'Sale successfully canceled'
      });
    } catch (error) {
      setIsModalLoading(false);
      console.warn(error);
      Modal.error({
        title: `Failed to cancel sale`
      });
    } finally {
      setCancelModalVisible(false);
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
                  <StyledButton
                    cancel
                    type="danger"
                    shape="round"
                    onClick={() => setCancelModalVisible(true)}>
                    Cancel Sale
                  </StyledButton>
                  <Modal
                    visible={editPriceVisible}
                    title="Insert new price"
                    onCancel={() => setEditPriceVisible(false)}
                    onOk={() => form.submit()}
                    okButtonProps={{
                      loading: isModalLoading
                    }}
                    destroyOnClose>
                    <Form form={form} onFinish={handleEditPrice}>
                      <Form.Item>
                        <Text type="secondary">{`Listing your asset on Market`}</Text>
                      </Form.Item>
                      <Form.Item
                        name="newPrice"
                        rules={[
                          {
                            required: true,
                            message: 'You cannot leave price empty'
                          }
                        ]}>
                        <InputNumber
                          step={0.00000001}
                          min={0.00000001}
                          style={{ width: '100%' }}
                          placeholder="10.00000000 FLOW"
                        />
                      </Form.Item>
                    </Form>
                  </Modal>
                  <Modal
                    visible={cancelModalVisible}
                    title={`Do you want to cancel your sale for item (#${nft?.id})`}
                    onCancel={() => setCancelModalVisible(false)}
                    onOk={handleCancelSale}
                    okButtonProps={{
                      loading: isModalLoading
                    }}
                    okText="Cancel Sale"
                    cancelText="Keep Listed"
                    destroyOnClose>
                    <Typography>This action will remove your sale from the marketplace.</Typography>
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
