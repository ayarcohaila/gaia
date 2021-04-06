import { useState, useMemo } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Col, Form, Input, Typography, Upload, Button, Modal, Result } from 'antd';

import { CreateNFTWrapper } from '~/components/profile/styled';
import Asset from '~/components/asset/Asset';
import { mintNft } from '~/flow/mintNft';
import useAuth from '~/hooks/useAuth';
import { uploadFile } from '~/utils/upload';

const FormComponent = ({ form, onSubmit, refresh, loading }) => {
  const initialValues = {
    ipfsHash: null,
    file: null,
    description: null,
    name: null
  };

  const formValues = form.getFieldsValue();

  const disabled = useMemo(() => {
    const { ipfsHash, name, description } = formValues;

    if (!ipfsHash || !name || !description) {
      return true;
    }

    return false;
  }, [formValues]);

  return (
    <Col offset={4} span={10}>
      <Form
        onBlur={() => refresh(Math.random())}
        onFinish={onSubmit}
        form={form}
        initialValues={initialValues}>
        <Typography.Text>Upload File</Typography.Text>
        <div className="form-row form-upload-row">
          <Typography.Text>PNG, JPEG, GIF, WEBP, MP4 or MP3</Typography.Text>
          <Form.Item name="ipfsHash" trigger={null} shouldUpdate={false}>
            <Upload
              customRequest={async ({ file, onSuccess, onError }) => {
                const ipfsHash = await uploadFile(file, onError);
                form.setFieldsValue({ ipfsHash });
                refresh(Math.random());
                onSuccess();
              }}
              onRemove={() => {
                form.setFieldsValue({ ipfsHash: null });
              }}
              maxCount={1}
              accept=".png,.gif,.webp,.mp4,.mp3,.jpeg"
              className="form-upload">
              <Button type="primary" shape="round" className="upload-button">
                Choose file
              </Button>
            </Upload>
          </Form.Item>
        </div>

        <Form.Item
          name="name"
          shouldUpdate={false}
          rules={[
            {
              required: true,
              message: 'Please insert a name'
            }
          ]}>
          <Input placeholder="Name" className="form-row form-input" />
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
          <Input.TextArea
            className="form-row form-textarea-row no-margin"
            name="description"
            placeholder="Description"
          />
        </Form.Item>
        <Form.Item className="form-row no-borders">
          <Button
            type="primary"
            htmlType="submit"
            shape="round"
            className="form-submit-button"
            {...{ disabled, loading }}>
            Create
          </Button>
        </Form.Item>
      </Form>
    </Col>
  );
};

const PreviewComponent = ({ values: { ipfsHash, name, description } }) => {
  return (
    <Col span={6}>
      <Typography.Text>Preview</Typography.Text>
      <Asset imgURL={ipfsHash} {...{ name, description }} />
    </Col>
  );
};

function CreateNFT() {
  const [form] = Form.useForm();
  const router = useRouter();
  const { user } = useAuth();
  const [updatedValue, setUpdatedValue] = useState(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(values) {
    try {
      setLoading(true);
      await mintNft(user?.addr, 1, values.name, values.description, values.ipfsHash);
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
      <Col offset={4} span={10}>
        <Typography.Title>Create New Collection</Typography.Title>
      </Col>
      <FormComponent refresh={setUpdatedValue} {...{ router, form, onSubmit, loading }} />
      <PreviewComponent updatedValue={updatedValue} values={form.getFieldsValue()} />
    </CreateNFTWrapper>
  );
}

export default CreateNFT;
