import { Typography, Row, Col } from 'antd';
import SearchOutlined from '@ant-design/icons/SearchOutlined';
import Image from 'next/image';
import {
  SearchCol,
  SearchInput,
  SearchButton,
  Header as LayoutHeader,
  UserCol,
  UserButton,
  UserName
} from './styles';
function Header() {
  return (
    <LayoutHeader className="header">
      <Row align="middle">
        <Col span={8}>
          <Typography.Text>Nifty Beats</Typography.Text>
        </Col>
        <SearchCol span={8}>
          <SearchInput
            size="large"
            suffix={
              <SearchButton>
                <SearchOutlined />
              </SearchButton>
            }
            placeholder="Search items"
          />
        </SearchCol>
        <UserCol span={8}>
          <UserButton>
            <UserName>Nifty Beats</UserName>
            <Image src="/UserCircle.svg" width={30} height={30} />
          </UserButton>
        </UserCol>
      </Row>
    </LayoutHeader>
  );
}

export default Header;
