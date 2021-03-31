import { useEffect, useState } from 'react';
import { Typography, Row, Col, Menu, Dropdown, Button, Modal } from 'antd';
import { useRouter } from 'next/router';
import SearchOutlined from '@ant-design/icons/SearchOutlined';
import Image from 'next/image';

import useAuth from '~/hooks/useAuth';
import useProfile from '~/hooks/useProfile';
import { URLs } from '~/routes/urls';

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
  const [currentRoute, setCurrentRoute] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const { user, login, logout } = useAuth();
  const { initialized, initProfile } = useProfile(user?.addr);
  const router = useRouter();

  const getCurrentKey = () => {
    const routes = ['/marketplace', `/profile/${user?.addr}`, '/create-nft', '/'];
    setCurrentRoute(routes.filter(item => router.asPath.includes(item))[0] || '');
  };

  const handleGoToEditProfile = async () => {
    if (await initialized) {
      router.push(URLs.editProfile);
    } else {
      setModalVisible(true);
    }
  };

  const handleInitializeProfile = async () => {
    setModalVisible(false);
    await initProfile();
    router.push(URLs.editProfile);
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <Button type="text" onClick={handleGoToEditProfile}>
          Edit Profile
        </Button>
      </Menu.Item>
      <Menu.Item>
        <Button type="text" danger onClick={logout}>
          Logout
        </Button>
      </Menu.Item>
    </Menu>
  );

  useEffect(getCurrentKey, [router.pathname]);

  const NavigationMenu = () => (
    <Menu
      onClick={e => e.key != 'login' && router.push(e.key)}
      selectedKeys={[currentRoute]}
      mode="horizontal">
      <Menu.Item key="/">Home</Menu.Item>
      <Menu.Item key="/marketplace">Marketplace</Menu.Item>
      {user?.loggedIn && <Menu.Item key={`/profile/${user?.addr}`}>Inventory</Menu.Item>}
      <Menu.Item key="/create-nft">Create NFT</Menu.Item>
      <Menu.Item className="user-button-height" key="login">
        {user?.loggedIn || user?.name ? (
          <Dropdown overlay={menu} placement="topLeft">
            <UserButton>
              <UserName>{user?.name || user?.addr}</UserName>
              <Image src="/UserCircle.svg" width={30} height={30} />
            </UserButton>
          </Dropdown>
        ) : (
          <UserButton onClick={login}>
            <UserName>Login</UserName>
          </UserButton>
        )}
      </Menu.Item>
    </Menu>
  );

  return (
    <LayoutHeader className="header">
      <Row align="middle">
        <Col span={3} xxl={8}>
          <Typography.Text>Nifty Beats</Typography.Text>
        </Col>
        <SearchCol span={6} xxl={8}>
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
        <UserCol span={15} xxl={8}>
          <NavigationMenu />
        </UserCol>
      </Row>
      <Modal
        visible={modalVisible}
        title="You need to initialize your profile before edititing it"
        onOk={handleInitializeProfile}
        onRefuse={() => setModalVisible(false)}>
        <p>Would you like to initialize it?</p>
      </Modal>
    </LayoutHeader>
  );
}

export default Header;
