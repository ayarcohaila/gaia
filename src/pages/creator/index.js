import { useState, useMemo } from 'react';
import { Col, Form, Typography, Modal, Result } from 'antd';
import Head from 'next/head';
import { useRouter } from 'next/router';

import {
  CreateNFTWrapper,
  UploadWrapper,
  CreatorUpload,
  CreatorUploadButton,
  StyledInput,
  StyledTextArea,
  SubmitButton,
  Centralizer
} from '~/components/profile/styled';
import Asset from '~/components/asset/Asset';
import FeedbackItem from '~/components/feedbackItem/FeedbackItem';
import { mintNft } from '~/flow/mintNft';
import useAuth from '~/hooks/useAuth';
import { uploadFile } from '~/utils/upload';

const FormComponent = ({ form, onSubmit, onFileSelected, refresh, loading }) => {
  const initialValues = {
    ipfsHash: null,
    file: null,
    description: null,
    name: null
  };

  const formValues = form.getFieldsValue();

  const disabled = useMemo(() => {
    const { file, name, description } = formValues;

    if (!file || !name || !description) {
      return true;
    }

    return false;
  }, [formValues]);

  return (
    <Col offset={6} span={9}>
      <Form
        onBlur={() => refresh(Math.random())}
        onFinish={onSubmit}
        form={form}
        initialValues={initialValues}>
        <Typography.Text>Upload File</Typography.Text>
        <UploadWrapper>
          <Typography.Text>PNG, JPEG, GIF, WEBP, MP4 or MP3</Typography.Text>
          <Form.Item name="file" trigger={null} shouldUpdate={false}>
            <CreatorUpload
              customRequest={async ({ file, onSuccess }) => {
                onFileSelected(file);
                form.setFieldsValue({ file });
                refresh(Math.random());
                onSuccess();
              }}
              onRemove={() => {
                form.setFieldsValue({ file: null });
              }}
              maxCount={1}
              accept=".png,.gif,.webp,.mp4,.mp3,.jpeg,.jpg">
              <CreatorUploadButton type="primary" shape="round">
                Choose file
              </CreatorUploadButton>
            </CreatorUpload>
          </Form.Item>
        </UploadWrapper>

        <Form.Item
          name="name"
          shouldUpdate={false}
          rules={[
            {
              required: true,
              message: 'Please insert a name'
            }
          ]}>
          <StyledInput placeholder="Name" />
        </Form.Item>
        <Form.Item
          name="description"
          shouldUpdate={false}
          rules={[
            {
              required: true,
              message: 'Please insert a description'
            }
          ]}>
          <StyledTextArea name="description" placeholder="Description" multiline />
        </Form.Item>
        <Centralizer>
          <SubmitButton type="primary" htmlType="submit" shape="round" {...{ disabled, loading }}>
            Create
          </SubmitButton>
        </Centralizer>
      </Form>
    </Col>
  );
};

const PreviewComponent = ({ file, values: { name, description } }) => {
  return (
    <Col offset={1} span={6}>
      <Typography.Text>Preview</Typography.Text>
      <Asset imgURL={file ? URL.createObjectURL(file) : ''} {...{ name, description }} />
    </Col>
  );
};

function CreateNFT() {
  const [form] = Form.useForm();
  const router = useRouter();
  const { user } = useAuth();
  const [updatedValue, setUpdatedValue] = useState(null);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [feedbackItems, setFeedbackItems] = useState([
    { title: 'Uploading', description: 'Uploading file to IPFS service', completed: false },
    { title: 'Optimizing', description: 'Preprocessing file', completed: true }
  ]);

  async function onSubmit(values) {
    try {
      setLoading(true);
      const ipfsHash = await uploadFile(file);
      setFeedbackItems([
        { title: 'Minting token', description: 'Call contract method', completed: false },
        { title: 'Uploading', description: 'Uploading file to IPFS service', completed: true },
        { title: 'Optimizing', description: 'Preprocessing file', completed: true }
      ]);
      const tx = await mintNft(user?.addr, 1, values.name, values.description, ipfsHash);
      tx.onceSealed();
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
  }

  return (
    <CreateNFTWrapper>
      <Head>
        <title>Create NFT | NiftyBeats</title>
      </Head>
      <Col offset={6} span={10}>
        <Typography.Title>Create New Collection</Typography.Title>
      </Col>
      <FormComponent
        refresh={setUpdatedValue}
        onFileSelected={setFile}
        {...{ router, form, onSubmit, loading }}
      />
      <PreviewComponent updatedValue={updatedValue} file={file} values={form.getFieldsValue()} />
      <Modal title="Steps" visible={loading} footer={null} closable={false}>
        {feedbackItems.map((item, index) => (
          <FeedbackItem key={String(index)} {...item} />
        ))}
      </Modal>
    </CreateNFTWrapper>
  );
}

export default CreateNFT;
