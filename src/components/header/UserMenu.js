import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Popover } from 'antd';
import React from 'react';
import useAuth from '~/hooks/useAuth';
import useProfile from '~/hooks/useProfile';
import { getImageURL } from '~/utils/getImageUrl';
import UserMenuContent from './UserMenuContent';
import { UserName } from './styled';
function UserMenu() {
  const { user, login } = useAuth();
  const { userProfile } = useProfile(user?.addr);

  return user?.loggedIn ? (
    <Popover
      content={
        <UserMenuContent
          handleOptionClick={() => alert('clicado no content')}
          loggedIn={user?.loggedIn}
        />
      }
      trigger="hover"
      placement="bottomRight">
      <div>
        <UserName>{userProfile?.name ?? user?.addr}</UserName>
        <Avatar
          icon={<UserOutlined />}
          src={userProfile?.avatar && getImageURL(userProfile?.avatar)}
        />
      </div>
    </Popover>
  ) : (
    <Button type="link" onClick={login}>
      Login
    </Button>
  );
}

export default UserMenu;
