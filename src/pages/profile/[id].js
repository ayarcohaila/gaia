import Head from 'next/head';
import { Row, Col, Modal, Form, Typography, Button, InputNumber, Result } from 'antd';
const { Text } = Typography;
import { SlidersFilled } from '@ant-design/icons';
import { useMemo, useState } from 'react';
import { useRouter } from 'next/router';

import { URLs } from '~/routes/urls';

import Address from '~/components/address/Address';
import Card from '~/components/asset/Asset';
import DropDown from '~/components/dropdown/DropDown';
import useInventory from '~/hooks/useInventory';
import useMarket from '~/hooks/useMarket';
import useAuth from '~/hooks/useAuth';

import { createSaleOffer } from '~/flow/sell';
import { cancelSale } from '~/flow/cancelSale';

import { Banner, ProfileWrapper } from '../../components/profile/styled';

const Profile = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const { id } = router.query;
  const { user } = useAuth();
  const { checkIfTokenIsOnSale } = useMarket(user?.addr);
  const [filter, setFilter] = useState(null);
  const [modalItemId, setModalItemId] = useState(null);
  const [isLoadingModal, setIsLoadingModal] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const { assets, isLoading } = useInventory(id);
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
      await createSaleOffer(modalItemId, price, user?.addr);
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
    setModalVisible(true);
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
        {isLoading ? (
          <span>LOADING</span>
        ) : (
          <Row justify="space-between">
            {data.map(token => {
              let buttonProps = {};
              const onSale = checkIfTokenIsOnSale(token.id);

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
                />
              );
            })}
          </Row>
        )}
      </Col>

      <Modal
        visible={modalVisible}
        title={`How much do you want for this asset (#${modalItemId})`}
        footer={[
          <Button
            key="back"
            onClick={() => {
              setModalItemId(null);
              setModalVisible(false);
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
