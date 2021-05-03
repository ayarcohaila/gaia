import Head from 'next/head';
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
      onSubscriptionData: {
        data: { nft: nfts }
      }
    }) => {
      const mappedAssets = nfts.map(nft => ({
        onSale: nft.is_for_sale,
        imgURL: nft.template.metadata.imgURL,
        name: nft.template.metadata.name,
        description: nft.template.metadata.description,
        owner: nft.owner,
        id: nft.id
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
      await createSaleOffer(modalItemId, price);
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
  const sellAsset = itemId => {
    setModalItemId(itemId);
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
      await transferNft(destinationAddress, modalItemId);
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
      <Head>
        <title>Profile | NiftyBeats</title>
      </Head>
      <Col span={24}>
        <Banner src="/images/inventory-banner.png" />
        <Address>{id || 'NO ADDRESS FOUND'}</Address>
      </Col>
      <Col span={18} offset={3}>
        <Row justify="end">
          <DropDown title="Filter & Sort" icon={<SlidersFilled />} {...{ options }} />
        </Row>
        <Row justify="space-between">
          {isLoading
            ? [...Array(12).keys()].map(index => <CardLoading hasTopBar={false} key={index} />)
            : data.map(token => {
                let buttonProps = {};
                const { onSale } = token;

                if (user?.addr === id) {
                  buttonProps = {
                    showSell: !onSale,
                    showCancel: onSale
                  };
                }
                return (
                  <Card
                    key={`token-${token.id}`}
                    {...token}
                    {...buttonProps}
                    sell={() => sellAsset(token.id)}
                    cancel={() => onCancelSale(token.id)}
                    actions={[
                      {
                        title: 'Transfer',
                        action: e => {
                          e.domEvent.stopPropagation();
                          setModalItemId(token.id);
                          setTransferModalVisible(true);
                        }
                      }
                    ]}
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
        title={`How much do you want for this asset (#${modalItemId})`}
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
