import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Row, Col, Modal, Form, Typography, InputNumber, Result, Button } from 'antd';
import { useMemo, useState, useEffect } from 'react';

import {
  StyledImageContainer,
  StyledImage,
  Heading,
  OwnerName,
  ReadMore,
  Description,
  StyledButton,
  InfoHeading,
  InfoWrapper,
  TokenWrapper
} from '~/components/asset/styled';
import UserInfo from '~/components/UserInfo/UserInfo';
import { getAsset } from '~/flow/getAsset';
import useAuth from '~/hooks/useAuth';
import useMarket from '~/hooks/useMarket';
import useProfile from '~/hooks/useProfile';
import { getImageURL } from '~/utils/getImageUrl';
import { URLs } from '~/routes/urls';
import { createSaleOffer } from '~/flow/sell';

const { Text } = Typography;

const Explorer = () => {
  const router = useRouter();
  const {
    query: { id }
  } = router;
  const { user } = useAuth();
  const { userProfile } = useProfile(user?.addr);
  const { sales } = useMarket(user?.addr);
  const [form] = Form.useForm();
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [completeDescription, setCompleteDescription] = useState(false);
  const [nft, setNft] = useState({
    name: '',
    description: '',
    imgURL: '',
    isSale: false
  });

  const description = useMemo(() => {
    if (completeDescription || nft?.description?.length < 330) {
      return nft?.description;
    } else {
      return `${nft?.description?.substr(0, 330)}...`;
    }
  }, [completeDescription, nft]);

  useEffect(async () => {
    if (user?.addr) {
      const asset = await getAsset(user.addr, parseInt(id, 10));
      const isSale = sales.filter(sale => sale.id === Number(id))?.length > 0;
      setNft({ ...asset, isSale });
    }
  }, [id, user, sales]);
  const onFinishSale = async ({ price }) => {
    try {
      setIsLoading(true);
      await createSaleOffer(nft?.id, price, user?.addr);
      setModalVisible(false);
      Modal.success({
        icon: null,
        centered: true,
        closable: false,
        okButtonProps: {
          hidden: true
        },
        title: '',
        content: (
          <Result
            status="success"
            title="Woohoo!"
            subTitle="Mission accomplished"
            extra={
              <Button
                type="primary"
                key="console"
                onClick={() => {
                  Modal.destroyAll();
                  router.push(URLs.marketplace);
                }}>
                Go to Marketplace
              </Button>
            }
          />
        )
      });
    } catch (err) {
      Modal.error({
        icon: null,
        centered: true,
        closable: true,
        title: '',
        content: <Result status="error" title="Oops!" subTitle="Mission failed" />
      });
    } finally {
      setIsLoading(false);
    }
    form.resetFields();
  };
  const sellAsset = () => {
    setModalVisible(true);
  };
  return (
    <TokenWrapper>
      <Head>
        <title>Details | NiftyBeats</title>
      </Head>
      <Col span={18} offset={3}>
        <Row justify="flex-start" wrap={false}>
          <StyledImageContainer>
            <StyledImage src={getImageURL(nft.imgURL)} />
          </StyledImageContainer>
          <div className="content">
            <Heading>{nft?.name}</Heading>
            <p>
              Owned by{' '}
              <Link href={URLs.profile(user?.addr)}>
                <OwnerName>{userProfile?.name}</OwnerName>
              </Link>
            </p>
            <Description>
              {description}{' '}
              {description?.length > 330 && (
                <ReadMore onClick={() => setCompleteDescription(prevState => !prevState)}>
                  Show {completeDescription ? 'less' : 'more'}
                </ReadMore>
              )}
            </Description>
            <InfoWrapper>
              <InfoHeading>Info</InfoHeading>
              <UserInfo
                name={userProfile?.name}
                src={getImageURL(userProfile?.avatar ?? '')}
                type="Creator"
              />
              {nft?.isSale ? (
                <StyledButton
                  type="primary"
                  shape="round"
                  onClick={() => router.push(URLs.sale(id))}>
                  Go to sale
                </StyledButton>
              ) : (
                <StyledButton type="primary" shape="round" onClick={() => sellAsset()}>
                  List on Market
                </StyledButton>
              )}
            </InfoWrapper>
          </div>
        </Row>
      </Col>
      <Modal
        visible={modalVisible}
        title={`How much do you want for this asset (#${nft?.id})`}
        footer={[
          <Button key="back" onClick={() => setModalVisible(false)}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" loading={isLoading} onClick={() => form.submit()}>
            Sell
          </Button>
        ]}>
        <Form form={form} onFinish={onFinishSale}>
          <Form.Item>
            <Text type="secondary">{`Listing your asset on Market`}</Text>
          </Form.Item>
          <Form.Item
            name="price"
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
    </TokenWrapper>
  );
};

export default Explorer;
