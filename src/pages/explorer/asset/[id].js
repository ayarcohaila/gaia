import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Row, Modal, Form, Typography, InputNumber, Result, Button, Skeleton, Space } from 'antd';
import { useMemo, useState } from 'react';

import {
  ExpandedViewSkeletonButton,
  ExpandedViewSkeletonImage,
  ExpandedViewSkeletonInput,
  ExpandedViewSkeletonParagraph,
  StyledImageContainer,
  StyledImage,
  Heading,
  OwnerName,
  ReadMore,
  Description,
  StyledButton,
  InfoHeading,
  InfoWrapper,
  Content,
  Column,
  ContentColumn
} from '~/components/asset/styled';
import UserInfo from '~/components/UserInfo/UserInfo';
import useAuth from '~/hooks/useAuth';
import useProfile from '~/hooks/useProfile';
import useAsset from '~/hooks/useAsset';
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
  const [isLoadingSale, setIsLoadingSale] = useState(false);
  const { userProfile } = useProfile(user?.addr);
  const { asset, isLoading } = useAsset(id, user?.addr);
  const [form] = Form.useForm();
  const [modalVisible, setModalVisible] = useState(false);

  const [completeDescription, setCompleteDescription] = useState(false);

  const description = useMemo(() => {
    if (completeDescription || asset?.description?.length < 330) {
      return asset?.description;
    } else {
      return `${asset?.description?.substr(0, 330)}...`;
    }
  }, [completeDescription, asset]);

  const onFinishSale = async ({ price }) => {
    try {
      setIsLoadingSale(true);
      await createSaleOffer(asset?.id, price, user?.addr);
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
      setIsLoadingSale(false);
    }
    form.resetFields();
  };
  const sellAsset = () => {
    setModalVisible(true);
  };
  return (
    <Row justify="center">
      <Head>
        <title>Details | NiftyBeats</title>
      </Head>
      {isLoading ? (
        <>
          {/* Skeleton */}
          <Column span={6} offset={2}>
            <ExpandedViewSkeletonImage active />
          </Column>
          <Column span={8} offset={2}>
            <div>
              <ExpandedViewSkeletonParagraph active title paragraph={{ rows: 2 }} />
              <Space direction="horizontal">
                <Skeleton.Avatar active size="large" />
                <Space direction="vertical">
                  <ExpandedViewSkeletonInput active size="small" />
                  <ExpandedViewSkeletonInput active size="small" />
                </Space>
              </Space>
              <ExpandedViewSkeletonButton active size="large" shape="round" />
            </div>
          </Column>
          {/* End of Skeleton */}
        </>
      ) : (
        <>
          <Column span={6} offset={2}>
            <StyledImageContainer>
              <StyledImage src={getImageURL(asset?.imgURL ?? '')} />
            </StyledImageContainer>
          </Column>
          <ContentColumn span={8}>
            <Content>
              <Heading>{asset?.name}</Heading>
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
                {asset?.isSale ? (
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
            </Content>
          </ContentColumn>
        </>
      )}
      <Modal
        visible={modalVisible}
        title={`How much do you want for this asset (#${asset?.id})`}
        footer={[
          <Button key="back" onClick={() => setModalVisible(false)}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" loading={isLoadingSale} onClick={() => form.submit()}>
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
    </Row>
  );
};

export default Explorer;
