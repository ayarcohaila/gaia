import { Col, Typography } from 'antd';
const { Text } = Typography;
import Price from '~/components/shared/Price';
import { CustomRow as Row, Wrapper } from './styled';

function AssetInfo({ id, mintNumber, collection, price }) {
  return (
    <Wrapper>
      <Row>
        <Col span={8}>
          <Text strong>Id:</Text>
        </Col>
        <Col span={16}>
          <Text>{id}</Text>
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <Text strong>Mint Number:</Text>
        </Col>
        <Col span={16}>
          <Text>{mintNumber}</Text>
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <Text strong>Collection:</Text>
        </Col>
        <Col span={16}>
          <Text>{collection}</Text>
        </Col>
      </Row>
      {price && (
        <Row>
          <Col span={8}>
            <Text strong>Price:</Text>
          </Col>
          <Col span={16}>
            <Price value={price} />
          </Col>
        </Row>
      )}
    </Wrapper>
  );
}

export default AssetInfo;
