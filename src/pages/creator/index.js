import { useState, useMemo } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Col, Form, Typography, Button, Modal, Result } from 'antd';

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

  async function onSubmit(values) {
    try {
      setLoading(true);
      const ipfsHash = await uploadFile(file);
      await mintNft(user?.addr, 1, values.name, values.description, ipfsHash);
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
                  router.push(`/profile/${user?.addr}`);
                }}>
                Go to your profile
              </Button>
            }
          />
        )
      });
    } catch (error) {
      Modal.error({
        icon: null,
        centered: true,
        closable: true,
        title: '',
        content: <Result status="error" title="Oops!" subTitle="Mission failed" />
      });
    } finally {
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
    </CreateNFTWrapper>
  );
}

export default CreateNFT;
