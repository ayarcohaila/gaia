import { useState } from 'react';
import SearchOutlined from '@ant-design/icons/SearchOutlined';
import { Col, Row } from 'antd';
import { AutoCompleteStyled, SubmitInput, StyledForm } from '~/components/header/styled';
import { useRouter } from 'next/router';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  function onSubmit(e) {
    e.preventDefault();
    if (searchQuery.length === 0 || searchQuery.replaceAll(' ', '').length === 0) {
      return;
    }

    router.push(`/market?q=${searchQuery}`);
  }

  return (
    <StyledForm onSubmit={onSubmit}>
      <AutoCompleteStyled
        value={searchQuery}
        size="large"
        onChange={setSearchQuery}
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
      <SubmitInput type="submit" hidefocus="true" />
    </StyledForm>
  );
}

export default Search;
