import { Typography, Row, Col, Menu, Dropdown, Button, Modal } from 'antd';
import { useRouter } from 'next/router';
import SearchOutlined from '@ant-design/icons/SearchOutlined';
import Image from 'next/image';
import { useState } from 'react';

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
  const [modalVisible, setModalVisible] = useState(false);
  const { user, login, logout } = useAuth();
  const { initialized, initProfile, userProfile } = useProfile(user?.addr);
  const router = useRouter();

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
        <Button type="text" onClick={() => router.push(URLs.profile(user?.addr))}>
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
          {user?.loggedIn || userProfile?.name ? (
            <Dropdown overlay={menu} placement="bottomLeft">
              <UserButton>
                <UserName>{userProfile?.name || user?.addr}</UserName>
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
