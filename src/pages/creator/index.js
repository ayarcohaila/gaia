import { useEffect, useState } from 'react';
import { Col, Typography, Row, notification, Modal, Spin } from 'antd';
import { useRouter } from 'next/router';
import { useSubscription, useMutation } from '@apollo/react-hooks';

import { CreateNFTWrapper } from '~/components/profile/styled';
import Seo from '~/components/seo/seo';
import { StyledButton } from '~/components/asset/styled';
import Asset from '~/components/asset/Asset';
import { CardLoading } from '~/components/skeleton/CardLoading';
import { URLs } from '~/routes/urls';

import { GET_COLLECTIONS } from '~/store/server/subscriptions';
import { LOCK_COLLECTION } from '~/store/server/mutations';
import useAuth from '~/hooks/useAuth';
import useBlockPage from '~/hooks/useBlockPage';

function Collections() {
  const shouldPageBlock = useBlockPage();
  const [lockSet] = useMutation(LOCK_COLLECTION);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [idToLock, setIdToLock] = useState(null);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    shouldPageBlock();
  }, []);

  const { loading, data: { nft_collection } = { nft_collection: [] } } = useSubscription(
    GET_COLLECTIONS,
    {
      variables: { author: user?.addr }
    }
  );

  const LockCollection = async () => {
    try {
      notification.open({
        key: `lock_collection_${idToLock}`,
        icon: <Spin />,
        message: `Locking Collection #${idToLock}`,
        description: 'Sending transaction to blockchain.',
        duration: null
      });
      await lockSet({
        variables: {
          authorizedAddr: user?.addr,
          setID: idToLock
        }
      });
      setIsModalVisible(false);
      notification.open({
        key: `lock_collection_${idToLock}`,
        type: 'success',
        message: `Locked Collection #${idToLock}`,
        description: `Collection locked successfully`
      });
      setIdToLock(null);
    } catch (error) {
      notification.open({
        key: `lock_collection_${idToLock}`,
        type: 'error',
        message: `Error on lock collection #${idToLock}`,
        description: `Error on lock #${idToLock} collection , please check and try again.`
      });
    }
  };

  return (
    <>
      <Modal
        title="Lock collection"
        visible={isModalVisible}
        onOk={LockCollection}
        onCancel={() => {
          setIsModalVisible(false);
          setIdToLock(null);
        }}>
        <p>
          Beware: This action can&apos;t be undone. After locking the collection you won&apos;t be
          able to mint nfts from it anymore
        </p>
      </Modal>
      <CreateNFTWrapper>
        <Seo title="Collections" />
        <Col offset={3} span={14}>
          <Typography.Title>Select a Collection</Typography.Title>
        </Col>
        <Col>
          <StyledButton
            type="primary"
            shape="round"
            style={{ margin: 35 }}
            onClick={() => router.push(URLs.createCollection)}>
            Create Collection
          </StyledButton>
        </Col>
        <Col offset={3} span={18}>
          <Row>
            {loading
              ? [...Array(12).keys()].map(index => <CardLoading hasTopBar key={index} />)
              : nft_collection.map(({ collection_id, name, image, description, is_locked }) => {
                  let actions = [];

                  if (!is_locked) {
                    actions.push({
                      title: 'Lock Collection',
                      action: e => {
                        e.domEvent.stopPropagation();
                        setIdToLock(collection_id);
                        setIsModalVisible(true);
                      }
                    });
                  }
                  return (
                    <Asset
                      key={collection_id}
                      id={collection_id}
                      imgURL={image}
                      description={description}
                      name={name}
                      actions={actions}
                      linkTo={URLs.templates(collection_id)}
                    />
                  );
                })}
          </Row>
        </Col>
      </CreateNFTWrapper>
    </>
  );
}

export default Collections;
