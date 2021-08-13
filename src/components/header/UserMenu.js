import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button } from 'antd';
import React, { useState } from 'react';
import UserMenuContent from '~/components/header/UserMenuContent';
import useBalance from '~/hooks/useBalance';
import useAuth from '~/hooks/useAuth';
import useProfile from '~/hooks/useProfile';
import { getImageURL } from '~/utils/getImageUrl';
import {
  UserContainerCenter,
  UserAvatarContainer,
  UserInfo,
  UserBalance,
  UserPopover
} from './styled';
import config from '~/utils/config';

function UserMenu({ drawerOpen, user }) {
  const { login } = useAuth();
  const { userProfile } = useProfile(user?.addr);
  const { fusdBalance } = useBalance();
  const [openPopover, setOpenPopover] = useState(false);
  const visibilityControl = drawerOpen
    ? {
        visible: openPopover,
        onClick: () => setOpenPopover(!openPopover)
      }
    : { trigger: 'hover' };

  return user?.loggedIn ? (
    <UserPopover
      content={
        <UserMenuContent
          loggedIn={user?.loggedIn}
          isDrawer={drawerOpen}
          setOpenPopover={setOpenPopover}
        />
      }
      placement="bottomRight"
      {...visibilityControl}>
      <UserContainerCenter>
        <UserInfo>{userProfile?.name ?? user?.addr}</UserInfo>
        <UserAvatarContainer>
          <Avatar
            icon={<UserOutlined />}
            src={userProfile?.avatar && getImageURL(userProfile?.avatar)}
          />
        </UserAvatarContainer>
      </UserContainerCenter>
      <UserBalance small>
        {fusdBalance} {config.currency}
      </UserBalance>
    </UserPopover>
  ) : (
    <Button type="link" onClick={login}>
      Login
    </Button>
  );
}

export default UserMenu;
