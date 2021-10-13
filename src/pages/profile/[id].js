/* eslint-disable no-unused-vars */
import { useMemo, useState, useEffect } from 'react';
import { Modal, Form, Typography, Button, InputNumber, Input, Spin, notification } from 'antd';
import { useRouter } from 'next/router';
import { useMutation, useSubscription } from '@apollo/react-hooks';

import { CardLoading } from '~/components/skeleton/CardLoading';
import Seo from '~/components/seo/seo';
import { ProfileBanner, NFTCard } from '~/components';
import Card from '~/components/asset/Asset';
import { CollectionsFilter } from '~/components';
import { Divider } from '~/base';
import useAuth from '~/hooks/useAuth';
import useBlockPage from '~/hooks/useBlockPage';
import { createSaleOffer } from '~/flow/sell';
import { cancelSale } from '~/flow/cancelSale';
import { cancelAndTransfer } from '~/flow/cancelAndTransfer';
import { GET_MY_NFTS_BY_OWNER } from '~/store/server/subscriptions';
import { UPDATE_OWNER } from '~/store/server/mutations';
import basicAuthCheck from '~/utils/basicAuthCheck';
import MESSAGES from '~/utils/messages';
import { cancelSaleOffer, checkAndInsertSale, checkAndRemoveSale } from '~/utils/graphql';
import { PaginationGridOptions } from '~/utils/paginationGridOptions';
import config from '~/utils/config';
import useBreakpoints from '~/hooks/useBreakpoints.js';

import * as Styled from '~/styles/profile/styles';

import { ProfileWrapper, PaginationStyled } from '../../components/profile/styled';

const { Text } = Typography;

const Profile = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const { id } = router.query;
  const { user } = useAuth();
  const [filter] = useState(null);
  const [modalItemId, setModalItemId] = useState(null);
  const [sellModal, setSellModalVisible] = useState(false);
  const [transferModal, setTransferModalVisible] = useState(false);
  const [destinationAddress, setDestinationAddress] = useState(null);
  const [assets, setAssets] = useState([]);
  const [updateOwner] = useMutation(UPDATE_OWNER);
  const { isMediumDevice } = useBreakpoints();
  const shouldPageBlock = useBlockPage();
  //TODO: Remove fakeNfts on integration
  const fakeNfts = Array.from(Array(9).keys()).map(item => ({
    id: item + 1,
    img: `${item + 1}.png`
  }));

  useEffect(() => {
    shouldPageBlock();
  }, []);

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
        video: nft.template.metadata?.video,
        name: nft.template.metadata.name,
        description: nft.template.metadata.description,
        creator: nft.collection.author,
        id: nft.id,
        mintNumber: nft.mint_number,
        owner: nft.owner,
        createdAt: nft.created_at
      }));
      setAssets(mappedAssets);
    }
  });

  function compareNumbers(a, b) {
    return a - b;
  }

  const data = useMemo(() => {
    if (!filter) {
      return assets;
    }

    if (filter === 'mintNumber') {
      return [...assets].sort((a, b) => compareNumbers(a.mintNumber, b.mintNumber));
    }

    if (filter === 'createdAt') {
      return [...assets].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }
  }, [filter, assets]);

  const sellAsset = token => {
    setModalItemId(token);
    setSellModalVisible(true);
  };

  const onFinishSale = async ({ price }) => {
    try {
      notification.open({
        key: `sale_${modalItemId?.asset_id}`,
        message: `Creating an offer for ID #${modalItemId?.asset_id}`,
        description: MESSAGES.transaction_msg,
        icon: <Spin />,
        duration: null
      });
      // createSaleOffer(ASSET_ID, PRICE, MARKET_FEE, TEMPLATE_ID, COLLECTION_CREATOR_ADDRESS)
      await createSaleOffer(
        modalItemId?.asset_id,
        price,
        modalItemId?.template_id,
        modalItemId?.creator
      );
      // checkAndInsertSale(ASSET_ID, DATABASE ID, PRICE)
      await checkAndInsertSale(modalItemId?.asset_id, modalItemId?.id, price);
      notification.open({
        key: `sale_${modalItemId?.asset_id}`,
        type: 'success',
        message: `Sale for ID #${modalItemId?.asset_id} created `,
        description: `Your sale offer for ID #${modalItemId?.asset_id} is created`
      });
    } catch (err) {
      notification.open({
        key: `sale_${modalItemId?.asset_id}`,
        type: 'error',
        message: `Sale for ID #${modalItemId?.asset_id} failed `,
        description: `Your sale offer for ID #${modalItemId?.asset_id} has failed`
      });
    }
    form.resetFields();
  };

  const onCancelSale = async item => {
    try {
      notification.open({
        key: `cancel_sale_${item?.asset_id}`,
        message: `Canceling sale offer for ID #${item?.asset_id}`,
        description: MESSAGES.transaction_msg,
        icon: <Spin />,
        duration: null
      });
      await cancelSale(item?.asset_id);
      await cancelSaleOffer(item?.asset_id, item?.id); //graphql mutation
      notification.open({
        key: `cancel_sale_${item?.asset_id}`,
        type: 'success',
        message: `Sale offer #${item?.asset_id} canceled `,
        description: `Your sale offer for ID #${item?.asset_id} is canceled`
      });
    } catch (error) {
      notification.open({
        key: `cancel_sale_${item?.asset_id}`,
        type: 'error',
        message: `Canceling sale offer #${item?.asset_id} failed `,
        description: `Your sale offer for ID #${item?.asset_id} has failed`
      });
    }
  };

  const handleTransfer = async () => {
    try {
      setTransferModalVisible(false);
      const text = MESSAGES.accept_transf_msg;
      notification.open({
        key: `Transfering_${modalItemId?.asset_id}`,
        message: `Transferring #${modalItemId?.asset_id}`,
        description: MESSAGES.transformMessage(text, [modalItemId?.asset_id, destinationAddress]),
        icon: <Spin />,
        duration: null
      });
      await cancelAndTransfer(destinationAddress, modalItemId?.asset_id);
      await checkAndRemoveSale(modalItemId?.asset_id, modalItemId?.id);
      await updateOwner({
        variables: {
          assetId: Number(modalItemId?.asset_id),
          owner: user?.addr
        }
      });
      notification.open({
        key: `Transfering_${modalItemId?.asset_id}`,
        type: 'success',
        message: `#${modalItemId?.asset_id} transferred `,
        description: `#${modalItemId?.asset_id} have been transferred to ${destinationAddress}`
      });
    } catch (err) {
      notification.open({
        key: `Transfering_${modalItemId?.asset_id}`,
        type: 'error',
        message: `Transferring #${modalItemId?.asset_id} failed `,
        description: `Your asset #${modalItemId?.asset_id} has failed on transferring to ${destinationAddress}`
      });
    } finally {
      setModalItemId(null);
    }
  };

  return (
    <ProfileWrapper>
      <Seo title="Profile" />
      <ProfileBanner address={id} />
      <Styled.ListWrapper>
        {/* TODO: Uncomment on integration and refactor to MUI
        <CollectionsFilter nftQuantity={data?.length} enableSearch />
        <Divider hidden={isMediumDevice} customProps={{ marginTop: '24px' }} /> */}
        {
          isLoading
            ? [...Array(12).keys()].map(index => <CardLoading hasTopBar={false} key={index} />)
            : fakeNfts.map(nft => <NFTCard key={nft.id} nft={nft} isFake />)
          // TODO: Uncomment on integration and refactor to MUI
          // <PaginationStyled
          //   grid={() => PaginationGridOptions(data)}
          //   pagination={{
          //     showSizeChanger: true,
          //     pageSizeOptions: ['10', '50', '100', '1000'],
          //     position: 'top'
          //   }}
          //   dataSource={data}
          //   renderItem={token => {
          //     const { onSale } = token;
          //     let actions = [
          //       {
          //         title: 'Transfer',
          //         action: e => {
          //           e.domEvent.stopPropagation();
          //           setModalItemId(token);
          //           setTransferModalVisible(true);
          //         }
          //       }
          //     ];
          //     if (user?.addr === id) {
          //       !onSale &&
          //         actions.push({
          //           title: 'Sell',
          //           action: e => {
          //             e.domEvent.stopPropagation();
          //             sellAsset(token);
          //           }
          //         });
          //       onSale &&
          //         actions.push({
          //           title: 'Cancel Sale',
          //           action: e => {
          //             e.domEvent.stopPropagation();
          //             onCancelSale(token);
          //           }
          //         });
          //     }
          //     return (
          //       <Card
          //         key={`token-${token.id}`}
          //         {...token}
          //         actions={user?.addr === token.owner ? actions : []}
          //       />
          //     );
          //   }}
          // />
        }
      </Styled.ListWrapper>
      <Modal
        destroyOnClose
        visible={transferModal}
        title="Who would you like to transfer this asset to?"
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
            onClick={() => {
              setSellModalVisible(false);
              form.submit();
            }}>
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
              placeholder={`10.00000000 ${config.currency}`}
            />
          </Form.Item>
        </Form>
      </Modal>
    </ProfileWrapper>
  );
};

export default Profile;
export async function getServerSideProps(ctx) {
  const { req, res } = ctx;
  await basicAuthCheck(req, res);

  return {
    props: {}
  };
}
