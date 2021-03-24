import Head from 'next/head';
import { Row, Col } from 'antd';

import Address from '~/components/Address/Address';
import TokenCard from '~/components/TokenCard/TokenCard';

import { Banner, ProfileWrapper } from './styled';

const mockedTokens = [
  {
    id: 0,
    imgUrl:
      'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    collection: 'Hashmarks',
    name: 'Great Oracle War of 2023 by the Powerful Mystic',
    price: 3
  },
  {
    id: 1,
    imgUrl:
      'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    collection: 'Hashmarks',
    name: 'Great Oracle War of 2023 by the Powerful Mystic',
    price: 5.6
  },
  {
    id: 2,
    imgUrl:
      'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    collection: 'Hashmarks',
    name: 'Great Oracle War of 2023 by the Powerful Mystic',
    price: 30
  },
  {
    id: 3,
    imgUrl:
      'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    collection: 'Hashmarks',
    name: 'Great Oracle War of 2023 by the Powerful Mystic',
    price: 17.423
  },
  {
    id: 4,
    imgUrl:
      'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    collection: 'Hashmarks',
    name: 'Great Oracle War of 2023 by the Powerful Mystic',
    price: 3.001
  },
  {
    id: 5,
    imgUrl:
      'https://images.unsplash.com/photo-1616361889157-7b095931aea5?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    collection: 'Hashmarks',
    name: 'Great Oracle War of 2023 by the Powerful Mystic',
    price: 3
  },
  {
    id: 6,
    imgUrl:
      'https://images.unsplash.com/photo-1616361889157-7b095931aea5?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    collection: 'Hashmarks',
    name: 'Great Oracle War of 2023 by the Powerful Mystic',
    price: 9.875
  },
  {
    id: 7,
    imgUrl:
      'https://images.unsplash.com/photo-1616361889157-7b095931aea5?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    collection: 'Hashmarks',
    name: 'Great Oracle War of 2023 by the Powerful Mystic',
    price: 7
  },
  {
    id: 8,
    imgUrl:
      'https://images.unsplash.com/photo-1616361889157-7b095931aea5?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    collection: 'Hashmarks',
    name: 'Great Oracle War of 2023 by the Powerful Mystic',
    price: 7
  },
  {
    id: 9,
    imgUrl:
      'https://images.unsplash.com/photo-1616361889157-7b095931aea5?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    collection: 'Hashmarks',
    name: 'Great Oracle War of 2023 by the Powerful Mystic',
    price: 7
  }
];

const Profile = () => {
  return (
    <ProfileWrapper>
      <Head>
        <title>Profile | NiftyBeats</title>
      </Head>
      <Banner src="/images/inventory-banner.png" />
      <Address>0xb64e2823b293829383f7a</Address>
      <Row>
        <Col span={18} offset={3}>
          <Row justify="space-around">
            {mockedTokens.map(token => (
              <TokenCard key={`token-${token.id}`} {...token} />
            ))}
          </Row>
        </Col>
      </Row>
    </ProfileWrapper>
  );
};

export default Profile;
