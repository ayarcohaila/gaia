import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Col, Form, Input, Typography, Upload, Button, Card, Modal, Result } from 'antd';
import { uploadFile } from '~/utils/upload';
import { mintNft } from '~/flow/publicMint';
import useAuth from '~/hooks/useAuth';

import { CreateNFTWrapper } from '../../components/profile/styled';

const FormComponent = ({ form, onSubmit, refresh, setFile }) => {
  const initialValues = {
    ipfsHash: null,
    file: null,
    description: null,
    name: null
  };
  return (
    <Col span={10}>
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
                setFile(file);
                refresh(Math.random());
                onSuccess();
              }}
              onRemove={() => {
                form.setFieldsValue({ ipfsHash: null });
                setFile(null);
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
          <Button type="primary" htmlType="submit" shape="round" className="form-submit-button">
            Create
          </Button>
        </Form.Item>
      </Form>
    </Col>
  );
};

const PreviewComponent = ({ values, file }) => {
  return (
    <Col span={6}>
      <Typography.Text>Preview</Typography.Text>
      <Card
        cover={
          file ? (
            <img className="preview-image" alt={file.name} src={URL.createObjectURL(file)} />
          ) : (
            <></>
          )
        }>
        <Card.Meta
          className="preview-meta"
          title={values?.name}
          description={values?.description}
        />
      </Card>
    </Col>
  );
};

function CreateNFT() {
  const [form] = Form.useForm();
  const router = useRouter();
  const { user } = useAuth();
  const [updatedValue, setUpdatedValue] = useState(null);
  const [file, setFile] = useState(null);

  async function onSubmit(values) {
    try {
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
    }
  }

  const Title = ({ text }) => (
    <>
      <Col span={4}></Col>
      <Col span={10}>
        <Typography.Title>{text}</Typography.Title>
      </Col>
      <Col span={10}></Col>
    </>
  );

  return (
    <CreateNFTWrapper>
      <Head>
        <title>Create NFT | NiftyBeats</title>
      </Head>
      <Title text="Create New Collection" />
      <Col span={4}></Col>
      <FormComponent
        router={router}
        form={form}
        setFile={setFile}
        onSubmit={onSubmit}
        refresh={setUpdatedValue}
      />
      <PreviewComponent file={file} updatedValue={updatedValue} values={form.getFieldsValue()} />
      <Col span={4}></Col>
    </CreateNFTWrapper>
  );
}

export default CreateNFT;
