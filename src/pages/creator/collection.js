import { useState, useMemo } from 'react';
import { Col, Form, Typography, Row, Spin, notification } from 'antd';
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
import { URLs } from '~/routes/urls';

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
              label="Market Fee (max: 15%)"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}>
              <StyledInput min={0} max={15} placeholder="Market Fee" type="number" />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          {formValues.fee && (
            <p>* You will make for {100 - formValues.fee}% every secondary sale</p>
          )}
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
    const { collectionName, fee } = values;
    const marketFee = Number(fee) === 0 ? Number(fee).toFixed(2) : fee / 100;
    try {
      setLoading(true);
      notification.open({
        key: `create_collection_${collectionName}`,
        icon: <Spin />,
        message: `Creating collection ${collectionName}`,
        description: 'Sending transaction to the blockchain',
        duration: null
      });
      await createSet({
        variables: {
          name: collectionName,
          marketFee,
          creator: user?.addr
        }
      });
      notification.open({
        key: `create_collection_${collectionName}`,
        type: 'success',
        message: `You have created ${collectionName} collection `,
        description: `Your have successfully created ${collectionName} collection which market fee is ${fee}`
      });
      router.push(URLs.create);
    } catch (error) {
      console.error(error);
      notification.open({
        key: `create_collection_${collectionName}`,
        type: 'error',
        message: `Error on create ${collectionName} collection  `,
        description: `Your collection creation failed for ${collectionName}`
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
