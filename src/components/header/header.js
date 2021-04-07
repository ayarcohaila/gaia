import { Row, Col, Menu, Space } from 'antd';
import Link from 'next/link';
import useAuth from '~/hooks/useAuth';
import { URLs } from '~/routes/urls';
import Search from './Search';
import UserMenu from './UserMenu';
import { MenuCol, CustomHeader, JustifyCenter } from './styled';

function MyHeader() {
  const { user } = useAuth();
  return (
    <CustomHeader>
      <Row justify="space-between" align="middle" gutter={[20, 0]}>
        <Col>
          <Link href={URLs.home}>
            <a href="about:blank">Nifty Beats</a>
          </Link>
        </Col>
        <Col flex="auto">
          <JustifyCenter>
            <Search />
          </JustifyCenter>
        </Col>
        <MenuCol>
          <Menu mode="horizontal">
            <Menu.Item key="home">
              <Link href={URLs.home}>
                <a href="about:blank">Home</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="marketplace">
              <Link href={URLs.marketplace}>
                <a href="about:blank">Marketplace</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="inventory">
              <Link href={URLs.profile(user?.addr)}>
                <a href="about:blank">Inventory</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="create-nft">
              <Link href={URLs.createNFT}>
                <a href="about:blank">Create NFT</a>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Space align="baseline">
                <UserMenu />
              </Space>
            </Menu.Item>
          </Menu>
        </MenuCol>
      </Row>
    </CustomHeader>
  );
}

export default MyHeader;
