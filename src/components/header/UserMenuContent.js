import { Menu, Row, Modal } from 'antd';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { setupAccount } from '~/flow/setupAccount';
import useAuth from '~/hooks/useAuth';
import useProfile from '~/hooks/useProfile';
import { URLs } from '~/routes/urls';
import { ColStyled } from '~/components/header/styled';

function UserMenuContent({ loggedIn }) {
  const { user, logout } = useAuth();
  const [modalVisible, setModalVisible] = useState(false);
  const { initialized, hasSetup } = useProfile(user?.addr);
  const router = useRouter();

  const handleGoToEditProfile = async () => {
    if ((await initialized) && (await hasSetup)) {
      router.push(URLs.editProfile);
    } else {
      setModalVisible(true);
    }
  };

  const handleInitializeProfile = async () => {
    setModalVisible(false);
    await setupAccount();
    router.push(URLs.editProfile);
  };
  return loggedIn ? (
    <>
      <Row>
        <ColStyled span={24}>
          <Menu>
            <Menu.Item onClick={handleGoToEditProfile}>Edit Profile</Menu.Item>
            <Menu.Item onClick={logout}>Logout</Menu.Item>
          </Menu>
        </ColStyled>
      </Row>
      <Modal
        visible={modalVisible}
        title="You need to initialize your profile before edititing it"
        onOk={handleInitializeProfile}
        onCancel={() => setModalVisible(false)}
        onRefuse={() => setModalVisible(false)}>
        <p>Would you like to initialize it?</p>
      </Modal>
    </>
  ) : null;
}

export default UserMenuContent;
