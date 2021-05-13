import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Popover } from 'antd';
import React from 'react';
import useAuth from '~/hooks/useAuth';
import useProfile from '~/hooks/useProfile';
import { getImageURL } from '~/utils/getImageUrl';
import UserMenuContent from '~/components/header/UserMenuContent';
import { UserContainerCenter, UserAvatarContainer, UserInfo } from './styled';
function UserMenu() {
  const { user, login } = useAuth();
  const { userProfile } = useProfile(user?.addr);

  return user?.loggedIn ? (
    <Popover
      content={<UserMenuContent loggedIn={user?.loggedIn} />}
      trigger="hover"
      placement="bottomRight">
      <UserContainerCenter>
        <UserContainerCenter wrap>
          <UserInfo>{userProfile?.name ?? user?.addr}</UserInfo>
          <UserInfo small> {user?.balance} FLOW</UserInfo>
        </UserContainerCenter>
        <UserAvatarContainer>
          <Avatar
            icon={<UserOutlined />}
            src={userProfile?.avatar && getImageURL(userProfile?.avatar)}
          />
        </UserAvatarContainer>
      </UserContainerCenter>
    </Popover>
  ) : (
    <Button type="link" onClick={login}>
      Login
    </Button>
  );
}

export default UserMenu;
