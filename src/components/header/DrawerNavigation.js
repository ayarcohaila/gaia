import { List } from 'antd';
import Link from 'next/link';
import useAuth from '~/hooks/useAuth';
import { ListItem } from './styled';

const DrawerNavigation = ({ URLs, currentRoute }) => {
  const { user, logout } = useAuth();
  const isSelected = route => {
    return currentRoute === route;
  };
  return (
    <List split={true}>
      <List.Item></List.Item>
      <List.Item key="/">
        <ListItem isSelected={isSelected(URLs.home)} href={URLs.home}>
          Home
        </ListItem>
      </List.Item>
      <List.Item key={URLs.marketplace}>
        <ListItem isSelected={isSelected(URLs.marketplace)} href={URLs.marketplace}>
          Marketplace
        </ListItem>
      </List.Item>
      {user?.loggedIn && (
        <List.Item key="inventory">
          <ListItem isSelected={isSelected(URLs.user?.addr)} href={URLs.profile(user?.addr)}>
            Inventory
          </ListItem>
        </List.Item>
      )}
      <List.Item key={URLs.create}>
        <Link href={URLs.create} passHref>
          <ListItem isSelected={isSelected(URLs.create)}>Create NFT</ListItem>
        </Link>
      </List.Item>
      {user?.loggedIn && (
        <List.Item key="logout">
          <ListItem onClick={logout}>Logout</ListItem>
        </List.Item>
      )}
      <List.Item></List.Item>
    </List>
  );
};

export default DrawerNavigation;
