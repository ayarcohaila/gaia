import Head from 'next/head';
import { Row, Col } from 'antd';
import { SlidersFilled } from '@ant-design/icons';
import { useMemo, useState } from 'react';

import Address from '~/components/Address/Address';
import TokenCard from '~/components/TokenCard/TokenCard';
import DropDown from '~/components/DropDown/DropDown';

import { Banner, ProfileWrapper } from './styled';

const mockedTokens = [
  {
    id: 0,
    imgUrl:
      'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    collection: 'Hashmarks',
    name: 'Great Oracle War of 2023 by the Powerful Mystic',
    price: 3,
    createdAt: '2000-03-23T17:30:05.389Z'
  },
  {
    id: 1,
    imgUrl:
      'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    collection: 'Hashmarks',
    name: 'Great Oracle War of 2023 by the Powerful Mystic',
    price: 5.6,
    createdAt: '2020-03-23T17:30:05.389Z'
  },
  {
    id: 2,
    imgUrl:
      'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    collection: 'Hashmarks',
    name: 'Great Oracle War of 2023 by the Powerful Mystic',
    price: 30,
    createdAt: '2019--23T17:30:05.389Z'
  },
  {
    id: 3,
    imgUrl:
      'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    collection: 'Hashmarks',
    name: 'Great Oracle War of 2023 by the Powerful Mystic',
    price: 17.423,
    createdAt: '2021-03-10T17:30:05.389Z'
  },
  {
    id: 4,
    imgUrl:
      'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    collection: 'Hashmarks',
    name: 'Great Oracle War of 2023 by the Powerful Mystic',
    price: 3.001,
    createdAt: '1998-03-23T17:30:05.389Z'
  },
  {
    id: 5,
    imgUrl:
      'https://images.unsplash.com/photo-1616361889157-7b095931aea5?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    collection: 'Hashmarks',
    name: 'Great Oracle War of 2023 by the Powerful Mystic',
    price: 3,
    createdAt: '2010-03-23T17:30:05.389Z'
  },
  {
    id: 6,
    imgUrl:
      'https://images.unsplash.com/photo-1616361889157-7b095931aea5?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    collection: 'Hashmarks',
    name: 'Great Oracle War of 2023 by the Powerful Mystic',
    price: 9.875,
    createdAt: '2021-01-23T17:30:05.389Z'
  },
  {
    id: 7,
    imgUrl:
      'https://images.unsplash.com/photo-1616361889157-7b095931aea5?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    collection: 'Hashmarks',
    name: 'Great Oracle War of 2023 by the Powerful Mystic',
    price: 7,
    createdAt: '2021-03-22T17:30:05.389Z'
  },
  {
    id: 8,
    imgUrl:
      'https://images.unsplash.com/photo-1616361889157-7b095931aea5?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    collection: 'Hashmarks',
    name: 'Great Oracle War of 2023 by the Powerful Mystic',
    price: 7,
    createdAt: '2001-01-23T17:30:05.389Z'
  },
  {
    id: 9,
    imgUrl:
      'https://images.unsplash.com/photo-1616361889157-7b095931aea5?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    collection: 'Hashmarks',
    name: 'Great Oracle War of 2023 by the Powerful Mystic',
    price: 7,
    createdAt: '2011-03-23T17:30:05.389Z'
  }
];

const Profile = () => {
  const [filter, setFilter] = useState(null);
  const data = useMemo(() => {
    if (!filter) {
      return mockedTokens;
    }

    if (filter === 'highestPrice') {
      return [...mockedTokens].sort((a, b) => b.price - a.price);
    }

    if (filter === 'lowestPrice') {
      return [...mockedTokens].sort((a, b) => a.price - b.price);
    }

    if (filter === 'createdAt') {
      return [...mockedTokens].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }
  }, [filter, mockedTokens]);

  const options = [
    { title: 'Recently added', action: () => setFilter('createdAt') },
    { title: 'Lowest price', action: () => setFilter('lowestPrice') },
    { title: 'Highest price', action: () => setFilter('highestPrice') },
    { title: 'None', action: () => setFilter(null) }
  ];

  return (
    <ProfileWrapper>
      <Head>
        <title>Profile | NiftyBeats</title>
      </Head>
      <Banner src="/images/inventory-banner.png" />
      <Address>0xb64e2823b293829383f7a</Address>
      <Col span={18} offset={3}>
        <Row justify="end">
          <DropDown title="Filter & Sort" icon={<SlidersFilled />} {...{ options }} />
        </Row>
        <Row justify="space-between">
          {data.map(token => (
            <TokenCard key={`token-${token.id}`} {...token} />
          ))}
        </Row>
      </Col>
    </ProfileWrapper>
  );
};

export default Profile;
