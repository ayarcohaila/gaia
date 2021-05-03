import { useState, useMemo } from 'react';
import { Col, Form, Typography, Modal, Result, Row } from 'antd';
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
import { mintNft } from '~/flow/mintNft';
import useAuth from '~/hooks/useAuth';
import { uploadFile } from '~/utils/upload';
import Seo from '~/components/seo/seo';

const FormComponent = ({ onSubmit, loading }) => {
  const [, forceUpdate] = useState({});
  const [form] = Form.useForm();
  const formValues = form.getFieldsValue();

  const disabled = useMemo(() => {
    const { collectionName, displayName, fee } = formValues;

    if (!collectionName || !displayName || !fee) {
      return true;
    }

    return false;
  }, [formValues]);

  return (
    <Col offset={6} span={12}>
      <Form onBlur={forceUpdate} onFinish={onSubmit} form={form}>
        <UploadWrapper>
          <Typography.Text>Add a collection photo</Typography.Text>
          <Form.Item name="file" trigger={null} shouldUpdate={false}>
            <CreatorUpload
              customRequest={async ({ file, onSuccess }) => {
                form.setFieldsValue({ file });
                onSuccess();
              }}
              onRemove={() => {
                form.setFieldsValue({ file: null });
              }}
              maxCount={1}
              accept=".png,.gif,.webp,.jpeg,.jpg">
              <CreatorUploadButton type="primary" shape="round">
                Choose file
              </CreatorUploadButton>
            </CreatorUpload>
          </Form.Item>
        </UploadWrapper>
        <Form.Item
          name="collectionName"
          shouldUpdate={false}
          rules={[
            {
              required: true,
              message: 'Please insert a collection name'
            }
          ]}
          label="Collection Name"
          labelCol={{ span: 24 }}>
          <StyledInput placeholder="Collection Name" />
        </Form.Item>
        <Form.Item
          name="displayName"
          shouldUpdate={false}
          rules={[
            {
              required: true,
              message: 'Please insert a display name'
            }
          ]}
          label="Display Name"
          labelCol={{ span: 24 }}>
          <StyledInput placeholder="Display Name" />
        </Form.Item>
        <Row>
          <Col span={4}>
            <Form.Item
              name="fee"
              shouldUpdate={false}
              rules={[
                {
                  required: true,
                  message: 'Please insert a market fee'
                }
              ]}
              label="Market Fee (%)"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}>
              <StyledInput placeholder="Market Fee" type="number" />
            </Form.Item>
          </Col>
          <Col offset={1} span={19}>
            <Form.Item
              wrapperCol={{ span: 24 }}
              name="website"
              shouldUpdate={false}
              label="Website URL"
              labelCol={{ span: 24 }}>
              <StyledInput placeholder="Website URL" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          name="description"
          shouldUpdate={false}
          label="Description"
          labelCol={{ span: 24 }}>
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

function CreateNFT() {
  const router = useRouter();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);

  async function onSubmit(values) {
    try {
      setLoading(true);
      const ipfsHash = await uploadFile(values.file);

      const tx = await mintNft(user?.addr, 1, values.name, values.description, ipfsHash);
      tx.onceSealed();

      router.push(`/profile/${user?.addr}`);
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
      <Seo title="Create Collection" />
      <Col offset={6} span={12}>
        <Typography.Title>Create New Collection</Typography.Title>
      </Col>
      <FormComponent {...{ router, onSubmit, loading }} />
    </CreateNFTWrapper>
  );
}

export default CreateNFT;
