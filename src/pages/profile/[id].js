import { Row, Col, Modal, Form, Typography, Button, InputNumber, Result, Input } from 'antd';
import { SlidersFilled } from '@ant-design/icons';
import { useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { useSubscription } from '@apollo/react-hooks';

import { URLs } from '~/routes/urls';

import Address from '~/components/address/Address';
import Card from '~/components/asset/Asset';
import DropDown from '~/components/dropdown/DropDown';
import useAuth from '~/hooks/useAuth';

import { GET_MY_NFTS_BY_OWNER } from '~/store/server/subscriptions';

import { createSaleOffer } from '~/flow/sell';
import { cancelSale } from '~/flow/cancelSale';
import { transferNft } from '~/flow/transferNft';

import { Banner, ProfileWrapper } from '../../components/profile/styled';
import { CardLoading } from '~/components/skeleton/CardLoading';
import Seo from '~/components/seo/seo';
const { Text } = Typography;

const Profile = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const { id } = router.query;
  const { user } = useAuth();
  const [filter, setFilter] = useState(null);
  const [modalItemId, setModalItemId] = useState(null);
  const [isLoadingModal, setIsLoadingModal] = useState(false);
  const [sellModal, setSellModalVisible] = useState(false);
  const [transferModal, setTransferModalVisible] = useState(false);
  const [destinationAddress, setDestinationAddress] = useState(null);
  const [assets, setAssets] = useState([]);

  const { loading: isLoading } = useSubscription(GET_MY_NFTS_BY_OWNER, {
    variables: {
      id
    },
    onSubscriptionData: ({
      subscriptionData: {
        data: { nft: nfts }
      }
    }) => {
      const mappedAssets = nfts.map(nft => ({
        asset_id: nft.asset_id,
        template_id: nft.template.template_id,
        onSale: nft.is_for_sale,
        imgURL: nft.template.metadata.image,
        name: nft.template.metadata.name,
        description: nft.template.metadata.description,
        id: nft.id,
        mintNumber: nft.mint_number
      }));
      setAssets(mappedAssets);
    }
  });

  const data = useMemo(() => {
    if (!filter) {
      return assets;
    }

    if (filter === 'highestPrice') {
      return [...assets].sort((a, b) => b.price - a.price);
    }

    if (filter === 'lowestPrice') {
      return [...assets].sort((a, b) => a.price - b.price);
    }

    if (filter === 'createdAt') {
      return [...assets].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }
  }, [filter, assets]);

  const options = [
    { title: 'Recently added', action: () => setFilter('createdAt') },
    { title: 'Lowest price', action: () => setFilter('lowestPrice') },
    { title: 'Highest price', action: () => setFilter('highestPrice') },
    { title: 'None', action: () => setFilter(null) }
  ];
  const onFinishSale = async ({ price }) => {
    try {
      setIsLoadingModal(true);
      // createSaleOffer(ASSET_ID, PRICE, MARKET_FEE, TEMPLATE_ID)
      await createSaleOffer(modalItemId?.asset_id, price, modalItemId?.template_id);

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
                  setModalItemId(null);
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
      setModalItemId(null);
      Modal.error({
        icon: null,
        centered: true,
        closable: true,
        title: '',
        content: <Result status="error" title="Oops!" subTitle="Mission failed" />
      });
    } finally {
      setIsLoadingModal(false);
    }
    form.resetFields();
  };
  const sellAsset = token => {
    setModalItemId(token);
    setSellModalVisible(true);
  };
  const onCancelSale = async itemId => {
    try {
      await cancelSale(itemId);
      router.reload();
    } catch (error) {
      Modal.error({
        icon: null,
        centered: true,
        closable: true,
        title: '',
        content: <Result status="error" title="Oops!" subTitle="Mission failed" />
      });
    }
  };
  const handleTransfer = async () => {
    try {
      setIsLoadingModal(true);
      await transferNft(destinationAddress, modalItemId?.asset_id);
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
      setModalItemId(null);
      setIsLoadingModal(false);
    }
  };

  return (
    <ProfileWrapper>
      <Seo title="Profile" />
      <Col span={24}>
        <Banner src="/images/inventory-banner.png" />
        <Address>{id || 'NO ADDRESS FOUND'}</Address>
      </Col>
      <Col span={18} offset={3}>
        <Row justify="end">
          <DropDown title="Filter & Sort" icon={<SlidersFilled />} {...{ options }} />
        </Row>
        <Row justify="start">
          {isLoading
            ? [...Array(12).keys()].map(index => <CardLoading hasTopBar={false} key={index} />)
            : data.map(token => {
                const { onSale } = token;
                let actions = [
                  {
                    title: 'Transfer',
                    action: e => {
                      e.domEvent.stopPropagation();
                      setModalItemId(token);
                      setTransferModalVisible(true);
                    }
                  }
                ];

                if (user?.addr === id) {
                  !onSale &&
                    actions.push({
                      title: 'Sell',
                      action: e => {
                        e.domEvent.stopPropagation();
                        sellAsset(token);
                      }
                    });
                  onSale &&
                    actions.push({
                      title: 'Cancel',
                      action: e => {
                        e.domEvent.stopPropagation();
                        onCancelSale(token.id);
                      }
                    });
                }
                return (
                  <Card
                    key={`token-${token.id}`}
                    {...token}
                    actions={user?.addr === token.owner ? actions : []}
                  />
                );
              })}
        </Row>
      </Col>
      <Modal
        destroyOnClose
        visible={transferModal}
        title={`Who'd you like to transfer this asset to?`}
        onCancel={() => setTransferModalVisible(false)}
        footer={[
          <Button
            key="back"
            onClick={() => {
              setModalItemId(null);
              setTransferModalVisible(false);
            }}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={isLoadingModal}
            disabled={!destinationAddress}
            onClick={handleTransfer}>
            Transfer
          </Button>
        ]}>
        <Text type="secondary">Enter the address to transfer the asset to</Text>
        <Input
          style={{ width: '100%', marginTop: 20 }}
          onChange={e => setDestinationAddress(e.target.value)}
        />
      </Modal>
      <Modal
        visible={sellModal}
        title={`How much do you want for this asset (${modalItemId?.name} - ${modalItemId?.asset_id})`}
        footer={[
          <Button
            key="back"
            onClick={() => {
              setModalItemId(null);
              setSellModalVisible(false);
            }}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={isLoadingModal}
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
    </ProfileWrapper>
  );
};

export default Profile;
