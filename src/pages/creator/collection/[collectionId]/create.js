import { useState, useMemo } from 'react';
import { Col, Form, Typography, Modal, Result, Row } from 'antd';
import { useRouter } from 'next/router';
import MinusCircleOutlined from '@ant-design/icons/MinusCircleOutlined';
import PlusOutlined from '@ant-design/icons/PlusOutlined';
import { useMutation } from '@apollo/react-hooks';

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
import useAuth from '~/hooks/useAuth';
import { uploadFile } from '~/utils/upload';
import Seo from '~/components/seo/seo';
import { CREATE_TEMPLATE } from '~/store/server/mutations';
import { getImageURL } from '~/utils/getImageUrl';

const FormComponent = ({ onSubmit, loading }) => {
  const [, forceUpdate] = useState({});
  const [form] = Form.useForm();
  const formValues = form.getFieldsValue();

  const disabled = useMemo(() => {
    const { templateName, description, file } = formValues;

    if (!templateName || !description || !file) {
      return true;
    }

    return false;
  }, [formValues]);

  return (
    <Col offset={6} span={12}>
      <Form onBlur={forceUpdate} onFinish={onSubmit} form={form}>
        <UploadWrapper>
          <Typography.Text>Add a template image</Typography.Text>
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
          name="templateName"
          shouldUpdate={false}
          rules={[
            {
              required: true,
              message: 'Please insert a template name'
            }
          ]}
          label="Template Name"
          labelCol={{ span: 24 }}>
          <StyledInput placeholder="Template Name" />
        </Form.Item>
        <Form.Item
          name="description"
          shouldUpdate={false}
          label="Description"
          rules={[
            {
              required: true,
              message: 'Please insert a description'
            }
          ]}
          labelCol={{ span: 24 }}>
          <StyledTextArea name="description" placeholder="Description" multiline />
        </Form.Item>
        <Form.List name="fields">
          {(fields, { add, remove }) => (
            <>
              <Row>
                {fields.map((field, index) => (
                  <>
                    <Col span={10}>
                      <Form.Item
                        {...field}
                        key={`field=${index}`}
                        name={[field.name, 'key']}
                        fieldKey={[field.fieldKey, 'key']}
                        shouldUpdate={false}
                        rules={[
                          {
                            required: true,
                            message: 'Please insert a key name'
                          }
                        ]}>
                        <StyledInput placeholder="Key" />
                      </Form.Item>
                    </Col>
                    <Col span={10} offset={1}>
                      <Form.Item
                        key={`field=${index}`}
                        {...field}
                        name={[field.name, 'value']}
                        fieldKey={[field.fieldKey, 'value']}
                        shouldUpdate={false}
                        rules={[
                          {
                            required: true,
                            message: 'Please insert a value name'
                          }
                        ]}>
                        <StyledInput placeholder="Value" />
                      </Form.Item>
                    </Col>
                    <Col span={2} offset={1}>
                      <MinusCircleOutlined
                        style={{ fontSize: 24, paddingTop: 10 }}
                        onClick={() => remove(field.name)}
                      />
                    </Col>
                  </>
                ))}
              </Row>
              <Form.Item>
                <CreatorUploadButton
                  type="primary"
                  shape="round"
                  onClick={add}
                  block
                  icon={<PlusOutlined />}
                  size="large">
                  Add New Attribute
                </CreatorUploadButton>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Centralizer>
          <SubmitButton type="primary" htmlType="submit" shape="round" {...{ disabled, loading }}>
            Create
          </SubmitButton>
        </Centralizer>
      </Form>
    </Col>
  );
};

function CreateTemplate() {
  const router = useRouter();
  const { query } = router;
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [createTemplate] = useMutation(CREATE_TEMPLATE);

  async function onSubmit(values) {
    try {
      setLoading(true);
      const ipfsHash = await uploadFile(values.file);

      const metadata = {
        name: values.templateName,
        description: values.description,
        image: getImageURL(ipfsHash)
      };

      if (values.fields) {
        values.fields.forEach(field => {
          metadata[field.key] = field.value;
        });
      }

      await createTemplate({
        variables: {
          metadata,
          id: Number(query.collectionId)
        }
      });

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
        <Typography.Title>Create New Template</Typography.Title>
      </Col>
      <FormComponent {...{ router, onSubmit, loading }} />
    </CreateNFTWrapper>
  );
}

export default CreateTemplate;
