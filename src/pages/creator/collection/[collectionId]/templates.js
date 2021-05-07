import { Col, Typography, Row, Modal, Result } from 'antd';
import { useRouter } from 'next/router';
import { useSubscription, useMutation } from '@apollo/react-hooks';
import { useState } from 'react';

import { CreateNFTWrapper } from '~/components/profile/styled';
import Seo from '~/components/seo/seo';
import { StyledButton } from '~/components/asset/styled';
import Asset from '~/components/asset/Asset';
import { CardLoading } from '~/components/skeleton/CardLoading';
import { URLs } from '~/routes/urls';
import useAuth from '~/hooks/useAuth';
import FeedbackItem from '~/components/feedbackItem/FeedbackItem';

import { GET_TEMPLATES } from '~/store/server/subscriptions';
import { MINT } from '~/store/server/mutations';

function Templates() {
  const [feedbackItems, setFeedbackItems] = useState([
    { title: 'Uploading', description: 'Uploading file to IPFS service', completed: false },
    { title: 'Optimizing', description: 'Preprocessing file', completed: true }
  ]);
  const [loadingModal, setLoading] = useState(false);
  const { user } = useAuth();
  const router = useRouter();
  const { query, push } = router;
  const { collectionId } = query;

  const { loading, data: { nft_template } = { nft_template: [] } } = useSubscription(
    GET_TEMPLATES,
    {
      variables: { id: Number(collectionId) }
    }
  );

  const [mint] = useMutation(MINT);

  const handleMint = async (templateId, collection_id) => {
    try {
      setLoading(true);
      setFeedbackItems([
        { title: 'Minting token', description: 'Call contract method', completed: false },
        { title: 'Uploading', description: 'Uploading file to IPFS service', completed: true },
        { title: 'Optimizing', description: 'Preprocessing file', completed: true }
      ]);
      await mint({
        variables: {
          recipient: user?.addr,
          setID: collection_id,
          templateID: templateId
        }
      });
      setFeedbackItems([
        { title: 'Deploy token', description: 'Deploying to Blockchain', completed: true },
        { title: 'Mint token', description: 'Calling contract method', completed: true },
        { title: 'Upload', description: 'Uploading file to IPFS service', completed: true },
        { title: 'Optimize', description: 'Preprocessing file', completed: true }
      ]);
      setTimeout(() => {
        setLoading(false);
        router.push(`/profile/${user?.addr}`);
      }, 2000);
    } catch (error) {
      Modal.error({
        icon: null,
        centered: true,
        closable: true,
        title: '',
        content: <Result status="error" title="Oops!" subTitle="Mission failed" />
      });
      setLoading(false);
    }
  };

  return (
    <>
      <CreateNFTWrapper>
        <Seo title="Collections" />
        <Col offset={3} span={14}>
          <Typography.Title>Select a Template</Typography.Title>
        </Col>
        <Col>
          <StyledButton
            type="primary"
            shape="round"
            style={{ margin: 35 }}
            onClick={() => push(URLs.createTemplate(collectionId))}>
            Create Template
          </StyledButton>
        </Col>
        <Col offset={3} span={18}>
          <Row>
            {loading
              ? [...Array(12).keys()].map(index => <CardLoading hasTopBar key={index} />)
              : nft_template.map(({ template_id, metadata, collection: { collection_id } }) => (
                  <Asset
                    key={template_id}
                    imgURL={metadata.image}
                    description={metadata.description}
                    name={metadata.name}
                    actions={[
                      {
                        title: 'Mint NFT',
                        action: () => handleMint(template_id, collection_id)
                      }
                    ]}
                  />
                ))}
          </Row>
        </Col>
        <Modal title="Steps" visible={loadingModal} footer={null} closable={false}>
          {feedbackItems.map((item, index) => (
            <FeedbackItem key={String(index)} {...item} />
          ))}
        </Modal>
      </CreateNFTWrapper>
    </>
  );
}

export default Templates;
