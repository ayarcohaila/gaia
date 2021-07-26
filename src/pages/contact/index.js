import Link from 'next/link';
import { Row, Col, Collapse, Typography } from 'antd';
const { Title } = Typography;
const { Panel } = Collapse;

export default function Contact() {
  return (
    <Row align="center">
      <Col span={12}>
        <Title>FAQ</Title>
        <Collapse defaultActiveKey={[]}>
          <Panel header="This is the first question" key="1">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac vestibulum
              neque, at facilisis nisi. In egestas dui at mi auctor faucibus. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce quis mi
              magna. Sed sed dictum leo. Cras ullamcorper viverra purus sit amet imperdiet.
              Phasellus tincidunt at magna vitae convallis. Curabitur sodales massa quis blandit
              ullamcorper.
            </p>
          </Panel>
          <Panel header="This is the second question" key="2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac vestibulum
              neque, at facilisis nisi. In egestas dui at mi auctor faucibus. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce quis mi
              magna. Sed sed dictum leo. Cras ullamcorper viverra purus sit amet imperdiet.
              Phasellus tincidunt at magna vitae convallis. Curabitur sodales massa quis blandit
              ullamcorper.
            </p>
          </Panel>
          <Panel header="This is the third question" key="3">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac vestibulum
              neque, at facilisis nisi. In egestas dui at mi auctor faucibus. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce quis mi
              magna. Sed sed dictum leo. Cras ullamcorper viverra purus sit amet imperdiet.
              Phasellus tincidunt at magna vitae convallis. Curabitur sodales massa quis blandit
              ullamcorper.
            </p>
          </Panel>
        </Collapse>

        <Title>Contact us via Email</Title>
        <Link href={'mailto:email@gaia.com'}>email@gaia.com</Link>
      </Col>
    </Row>
  );
}
