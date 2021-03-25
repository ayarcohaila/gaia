import { Typography, Row, Col, Menu, Dropdown, Button } from 'antd';
import { useRouter } from 'next/router';
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
import useAuth from '~/hooks/useAuth';
import { URLs } from '~/routes/urls';
function Header() {
  const { user, login, logout } = useAuth();
  const router = useRouter();

  const menu = (
    <Menu>
      <Menu.Item>
        <Button type="text" onClick={() => router.push(URLs.editProfile)}>
          Edit Profile
        </Button>
      </Menu.Item>
      <Menu.Item>
        <Button type="text" onClick={() => router.push(URLs.profile(user?.address))}>
          My Profile
        </Button>
      </Menu.Item>
      <Menu.Item>
        <Button type="text" danger onClick={logout}>
          Logout
        </Button>
      </Menu.Item>
    </Menu>
  );
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
          {user?.loggedIn || user?.name ? (
            <Dropdown overlay={menu} placement="bottomLeft">
              <UserButton>
                <UserName>{user?.name || user?.address}</UserName>
                <Image src="/UserCircle.svg" width={30} height={30} />
              </UserButton>
            </Dropdown>
          ) : (
            <UserButton onClick={login}>
              <UserName>Login</UserName>
            </UserButton>
          )}
        </UserCol>
      </Row>
    </LayoutHeader>
  );
}

export default Header;
