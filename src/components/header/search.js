import SearchOutlined from '@ant-design/icons/SearchOutlined';
import { Col, Row } from 'antd';
import { AutoCompleteStyled } from '~/components/header/styled';

function Search() {
  return (
    <>
      <AutoCompleteStyled
        value={''}
        size="large"
        placeholder={
          <Row justify="space-between">
            <Col>Search items</Col>
            <Col>
              <SearchOutlined />
            </Col>
          </Row>
        }
        allowClear
      />
    </>
  );
}

export default Search;
