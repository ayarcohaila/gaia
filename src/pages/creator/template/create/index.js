import { useState } from 'react';
import FileUploader from '../../../../components/shared/FileUploader';
import { uploadFile } from '../../../../utils/upload';
import { Input, Col, Form, Row, Typography, Button, Divider } from 'antd';
import FormButtonContainer from '../../../../components/template/FormButtonContainer';
import MinusCircleOutlined from '@ant-design/icons/MinusCircleOutlined';
import PlusOutlined from '@ant-design/icons/PlusOutlined';
const { Title } = Typography;
import { createTemplate } from '../../../../flow/createTemplate';
import { Container } from '../../../../components/template/styled';

export const AttributeTypeOptions = [
  { label: 'Text', value: 'string' },
  { label: 'Image', value: 'image' },
  { label: 'Integer Number', value: 'uint64' },
  { label: 'IPFS Hash', value: 'ipfs' }
];

function TemplateCreation() {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState();
  const [backImage, setBackImage] = useState();
  async function onFinish(values) {
    try {
      if (!image) {
        return;
      }

      setLoading(true);
      let newValues = [
        { key: 'name', value: values.name },
        { key: 'img', value: image }
      ];

      if (values.fields) {
        newValues.push(...values.fields);
      }

      if (backImage) {
        newValues.push({ key: 'backImg', value: backImage });
      }

      await createTemplate(newValues);

      setLoading(false);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }

  async function onUpload(options, setFunction) {
    const { file, onError } = options;

    const imageIfps = await uploadFile(file, onError);

    setFunction(imageIfps);
  }
  return (
    <Container>
      <Col sm={24}>
        <Title level={3}>Create Template</Title>
        <Divider style={{ marginTop: 0 }} />
      </Col>
      <Row justify="center">
        <Form name="dynamic_template_fields" onFinish={onFinish} autoComplete="off">
          <Row gutter={[50, 24]} justify="space-around">
            <Col lg={8} sm={24}>
              <Form.Item>
                <FileUploader
                  contentTitle="Add a template photo"
                  customRequest={options => onUpload(options, setImage)}
                  image={image}
                />
              </Form.Item>
              <Form.Item>
                <FileUploader
                  contentTitle="Add a template's back photo"
                  customRequest={options => onUpload(options, setBackImage)}
                  image={backImage}
                />
              </Form.Item>
            </Col>
            <Col span={16} lg={16} sm={24}>
              <Row gutter={[8, 8]}>
                <Col span={11} offset={1}>
                  <Input defaultValue="name" size="large" disabled />
                </Col>
                <Col span={11}>
                  <Form.Item
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: 'Attribute value is required'
                      }
                    ]}>
                    <Input size="large" />
                  </Form.Item>
                </Col>
              </Row>
              <Form.List name="fields">
                {(fields, { add, remove }) => (
                  <>
                    <Row gutter={[8, 8]}>
                      {fields.map(field => (
                        <>
                          <Col span={11} offset={1}>
                            <Form.Item
                              {...field}
                              name={[field.name, 'key']}
                              fieldKey={[field.fieldKey, 'key']}
                              rules={[
                                {
                                  required: true,
                                  message: 'Attribute name is required'
                                }
                              ]}>
                              <Input placeholder="New attribute name" size="large" />
                            </Form.Item>
                          </Col>
                          <Col span={11}>
                            <Form.Item
                              {...field}
                              name={[field.name, 'value']}
                              fieldKey={[field.fieldKey, 'value']}
                              rules={[
                                {
                                  required: true,
                                  message: 'Attribute value is required'
                                }
                              ]}>
                              <Input placeholder="Value" size="large" />
                            </Form.Item>
                          </Col>
                          <Col span={1}>
                            <MinusCircleOutlined
                              style={{ fontSize: 24, paddingTop: 10 }}
                              onClick={() => remove(field.name)}
                            />
                          </Col>
                        </>
                      ))}
                      <Col span={24}>
                        <Form.Item>
                          <Button onClick={() => add()} block icon={<PlusOutlined />} size="large">
                            Add New Attribute
                          </Button>
                        </Form.Item>
                      </Col>
                    </Row>
                  </>
                )}
              </Form.List>
              <FormButtonContainer loading={loading} buttonText={'Create Schema'} />
            </Col>
          </Row>
        </Form>
      </Row>
    </Container>
  );
}

export default TemplateCreation;
