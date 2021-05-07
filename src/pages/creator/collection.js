import { useState, useMemo } from 'react';
import { Col, Form, Typography, Modal, Result, Row } from 'antd';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/react-hooks';

import {
  CreateNFTWrapper,
  StyledInput,
  SubmitButton,
  Centralizer
} from '~/components/profile/styled';
import useAuth from '~/hooks/useAuth';
import Seo from '~/components/seo/seo';
import { CREATE_SET } from '~/store/server/mutations';

const FormComponent = ({ onSubmit, loading }) => {
  const [, forceUpdate] = useState({});
  const [form] = Form.useForm();
  const formValues = form.getFieldsValue();

  const disabled = useMemo(() => {
    const { collectionName, fee } = formValues;

    if (!collectionName || !fee) {
      return true;
    }

    return false;
  }, [formValues]);

  return (
    <Col offset={6} span={12}>
      <Form onBlur={forceUpdate} onFinish={onSubmit} form={form}>
        <Row>
          <Col span={19}>
            <Form.Item
              wrapperCol={{ span: 24 }}
              name="collectionName"
              shouldUpdate={false}
              label="Collection Name"
              labelCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: 'Please insert a collection name'
                }
              ]}>
              <StyledInput placeholder="Collection Name" />
            </Form.Item>
          </Col>
          <Col offset={1} span={4}>
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
              <StyledInput
                step={0.01}
                min={0.0}
                max={0.15}
                placeholder="Market Fee"
                type="number"
              />
            </Form.Item>
          </Col>
        </Row>
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
  const [createSet] = useMutation(CREATE_SET);

  async function onSubmit(values) {
    try {
      setLoading(true);

      await createSet({
        variables: {
          name: values.collectionName,
          marketFee: values.fee,
          creator: user?.addr
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
        <Typography.Title>Create New Collection</Typography.Title>
      </Col>
      <FormComponent {...{ router, onSubmit, loading }} />
    </CreateNFTWrapper>
  );
}

export default CreateNFT;
