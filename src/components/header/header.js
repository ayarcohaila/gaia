import { useEffect, useState } from 'react';
import { Row, Col, Menu, Space, Drawer, Button } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useMedia from 'use-media';

import Search from '~/components/header/search';
import UserMenu from '~/components/header/UserMenu';
import Logo from '~/components/logo/Logo';

import useAuth from '~/hooks/useAuth';

import { URLs } from '~/routes/urls';

import { CustomHeader, SearchContainer, StyledMenu } from './styled';
import DrawerNavigation from './DrawerNavigation';
import { MenuOutlined } from '@ant-design/icons';

function MyHeader() {
  const { user } = useAuth();
  const router = useRouter();
  const [currentRoute, setCurrentRoute] = useState('');
  const mediumBreakpoint = useMedia({ maxWidth: '990px' });
  const smallBreakpoint = useMedia({ maxWidth: '530px' });
  const [openDraw, setOpenDraw] = useState(false);

  const getCurrentKey = () => {
    const routes = [
      URLs.marketplace,
      `/profile/${user?.addr || '[id]'}`,
      `/explorer`,
      URLs.editProfile,
      URLs.create,
      URLs.root
    ];
    let whichRoute = routes.filter(route => router.asPath.includes(route))[0];
    if (whichRoute === routes[1] || whichRoute === routes[2]) return setCurrentRoute('inventory');
    if (whichRoute === routes[5]) return setCurrentRoute(URLs.root);
    if (whichRoute === routes[3]) return setCurrentRoute('login');
    setCurrentRoute(whichRoute);
  };
  useEffect(getCurrentKey, [router.pathname]);
  return (
    <CustomHeader>
      <Row justify="space-between" align="middle" gutter={[20, 0]}>
        {!mediumBreakpoint ? (
          <>
            <a href={URLs.home}>
              <Logo />
            </a>
            <Col flex="1 1 auto">
              <SearchContainer>
                <Search />
              </SearchContainer>
            </Col>
          </>
        ) : (
          <a href={URLs.home}>
            <Logo />
          </a>
        )}
        {!mediumBreakpoint && (
          <Col flex="1 1 315px">
            <StyledMenu
              mode="horizontal"
              style={{ justifyContent: 'flex-end' }}
              selectedKeys={currentRoute}>
              <Menu.Item key="/">
                <Link href={URLs.home}>Home</Link>
              </Menu.Item>
              <Menu.Item key={URLs.marketplace}>
                <Link href={URLs.marketplace}>Marketplace</Link>
              </Menu.Item>
              {user?.loggedIn && (
                <Menu.Item key="inventory">
                  <Link href={URLs.profile(user?.addr)}>Inventory</Link>
                </Menu.Item>
              )}
              <Menu.Item key={URLs.create}>
                <Link href={URLs.create}>Create NFT</Link>
              </Menu.Item>
              <Menu.Item key="login">
                <Space align="baseline">
                  <UserMenu user={user} />
                </Space>
              </Menu.Item>
            </StyledMenu>
          </Col>
        )}
        {!smallBreakpoint && !!mediumBreakpoint && (
          <SearchContainer>
            <Search />
          </SearchContainer>
        )}
        {!!mediumBreakpoint && (
          <>
            <Button onClick={() => setOpenDraw(!openDraw)} icon={<MenuOutlined />} />
            <Drawer
              placement="right"
              closable
              onClose={() => setOpenDraw(false)}
              visible={openDraw}
              width="50%"
              height="100%">
              <Space align="baseline">
                <UserMenu drawerOpen={openDraw} user={user} />
              </Space>
              <DrawerNavigation URLs={URLs} currentRoute={currentRoute} />
              {!!smallBreakpoint && (
                <SearchContainer>
                  <Search />
                </SearchContainer>
              )}
            </Drawer>
          </>
        )}
      </Row>
    </CustomHeader>
  );
}

export default MyHeader;
