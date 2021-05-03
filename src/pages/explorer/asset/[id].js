import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Modal,
  Typography,
  Form,
  InputNumber,
  Skeleton,
  Space,
  Row,
  Result,
  Button,
  List
} from 'antd';
import { useMemo, useState } from 'react';
import { useSubscription } from '@apollo/react-hooks';

import {
  ExpandedViewSkeletonButton,
  ExpandedViewSkeletonImage,
  ExpandedViewSkeletonInput,
  ExpandedViewSkeletonParagraph,
  StyledImage,
  StyledImageContainer,
  Heading,
  OwnerName,
  ReadMore,
  Description,
  StyledButton,
  InfoHeading,
  InfoWrapper,
  Column,
  Content,
  ContentColumn
} from '~/components/asset/styled';
import UserInfo from '~/components/UserInfo/UserInfo';
import useAuth from '~/hooks/useAuth';
import { changePrice } from '~/flow/changePrice';
import { cancelSale } from '~/flow/cancelSale';
import { buy } from '~/flow/buy';
import { getImageURL } from '~/utils/getImageUrl';
import { URLs } from '~/routes/urls';
import { createSaleOffer } from '~/flow/sell';
import { GET_NFT } from '~/store/server/subscriptions';

const { Text } = Typography;

const Sale = () => {
  const router = useRouter();
  const {
    query: { id }
  } = router;
  const [completeDescription, setCompleteDescription] = useState(false);
  const [editPriceVisible, setEditPriceVisible] = useState(false);
  const [cancelModalVisible, setCancelModalVisible] = useState(false);
  const [isModalLoading, setIsModalLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoadingSale, setIsLoadingSale] = useState(false);
  const [buyModalVisible, setBuyModalVisible] = useState(false);
  const [asset, setAsset] = useState(null);

  const [form] = Form.useForm();
  const { user } = useAuth();

  useSubscription(GET_NFT, {
    variables: {
      id
    },
    onSubscriptionData: ({
      subscriptionData: {
        data: { nft }
      }
    }) =>
      setAsset({
        isLoading: false,
        isOnSale: nft[0].is_for_sale,
        ownerProfile: {
          address: nft[0].owner
        },
        id: nft[0].id,
        imgURL: nft[0].template.metadata.imgURL,
        name: nft[0].template.metadata.name,
        description: nft[0].template.metadata.description,
        saleOffers: nft[0].sale_offers
      })
  });

  const description = useMemo(() => {
    if (completeDescription || asset?.description?.length < 330) {
      return asset?.description;
    } else {
      return `${asset?.description?.substr(0, 330)}...`;
    }
  }, [completeDescription, asset]);

  //This function handle the buy sale
  const handleBuy = async saleId => {
    setIsModalLoading(true);
    try {
      await buy(Number(saleId), user?.addr);
      setIsModalLoading(false);
      Modal.success({
        title: 'Congratulations!',
        content: `You have successfully bought an ${asset?.name}`
      });
    } catch (error) {
      setIsModalLoading(false);
      Modal.error({
        title: `Failed to buy ${asset?.name}`,
        content: 'Please, try again'
      });
    }
  };

  //This function handle the edit sale price
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

  //This function handle the cancel sale
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

  //It renders Edit Price and Cancel Sale if asset is on sale and current user is the owner
  const renderSaleOwnerOptions = () => {
    return asset?.isOnSale && user?.addr === asset?.ownerProfile?.address ? (
      <>
        {' '}
        <StyledButton
          margin={true}
          type="primary"
          shape="round"
          onClick={() => setEditPriceVisible(true)}>
          Edit price
        </StyledButton>
        <StyledButton
          margin={true}
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
          title={`Do you want to cancel your sale for item (#${asset?.id})`}
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
    ) : null;
  };

  //It renders only if user is the owner and asset is not in sale yet
  const renderAssetOwner = () => {
    return !asset?.isOnSale && user?.addr === asset?.ownerProfile?.address ? (
      <>
        <StyledButton type="primary" shape="round" onClick={() => sellAsset()}>
          List on Market
        </StyledButton>
        <Modal
          visible={modalVisible}
          title={`How much do you want for this asset (#${asset?.id})`}
          footer={[
            <Button key="back" onClick={() => setModalVisible(false)}>
              Cancel
            </Button>,
            <Button
              key="submit"
              type="primary"
              loading={isLoadingSale}
              onClick={() => form.submit()}>
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
      </>
    ) : null;
  };

  //It renders only if you are not the asset owner
  const renderMarketOptions = () => {
    if (asset?.saleOffers?.length > 0 && user?.addr !== asset?.ownerProfile?.address) {
      return (
        <StyledButton margin type="primary" shape="round" onClick={() => setBuyModalVisible(true)}>
          Buy
        </StyledButton>
      );
    }
    if (!asset?.isOnSale && user?.addr !== asset?.ownerProfile?.address) {
      return (
        <StyledButton type="primary" shape="round" disabled>
          This asset is not on sale
        </StyledButton>
      );
    }
  };

  //It just open the sell modal
  const sellAsset = () => {
    setModalVisible(true);
  };
  //It handle the form submit of sell modal
  const onFinishSale = async ({ price }) => {
    try {
      setIsLoadingSale(true);
      await createSaleOffer(asset?.id, price);
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
  return (
    <>
      <Row justify="center">
        <Head>
          <title>Details | NiftyBeats</title>
        </Head>
        {asset?.isLoading ? (
          <>
            {/* Skeleton */}
            <Column span={6} offset={2}>
              <ExpandedViewSkeletonImage active />
            </Column>
            <Column span={8} offset={2}>
              <Content>
                <ExpandedViewSkeletonParagraph active title paragraph={{ rows: 2 }} />
                <Space direction="horizontal">
                  <Skeleton.Avatar active size="large" />
                  <Space direction="vertical">
                    <ExpandedViewSkeletonInput active size="small" />
                    <ExpandedViewSkeletonInput active size="small" />
                  </Space>
                </Space>
                <ExpandedViewSkeletonButton active size="large" shape="round" />
              </Content>
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
                    <OwnerName>{asset?.ownerProfile?.address}</OwnerName>
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
                    name={asset?.ownerProfile?.name}
                    src={getImageURL(asset?.ownerProfile?.avatar ?? '')}
                    type="Creator"
                  />
                  {/* {asset?.saleOffers.length > 0 && (
                  <p>
                    Price: <Price>{Number(asset?.price).toFixed(4)}</Price>
                  </p>
                )} */}
                  {renderAssetOwner()} {/*List on Market button */}
                  {renderMarketOptions()} {/* Buy button or This asset is not on sale */}
                  {renderSaleOwnerOptions()} {/*Edit and Cancel sale buttons */}
                </InfoWrapper>
              </Content>
            </ContentColumn>
          </>
        )}
      </Row>
      <Modal
        visible={buyModalVisible}
        width={1000}
        title="Pick an offer"
        onOk={() => setBuyModalVisible(false)}
        closable={false}
        cancelButtonProps={{
          style: { display: 'none' }
        }}>
        <List
          size="small"
          itemLayout="horizontal"
          dataSource={asset?.saleOffers}
          renderItem={({ id, price, nft: { owner } }) => (
            <List.Item>
              <p style={{ flex: 1 }}>{price}</p>
              <p style={{ flex: 1 }}>{owner}</p>
              <StyledButton
                width="10%"
                margin={true}
                type="primary"
                shape="round"
                onClick={() => handleBuy(id)}>
                Buy
              </StyledButton>
            </List.Item>
          )}
        />
      </Modal>
    </>
  );
};

export default Sale;
