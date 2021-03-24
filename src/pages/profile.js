import Head from 'next/head';
import { Row, Col } from 'antd';
import { SlidersFilled } from '@ant-design/icons';
import { useMemo, useState } from 'react';

import Address from '~/components/Address/Address';
import TokenCard from '~/components/TokenCard/TokenCard';
import DropDown from '~/components/DropDown/DropDown';
import useAuth from '~/hooks/useAuth';
import useInventory from '~/hooks/useInventory';

import { Banner, ProfileWrapper } from './styled';

const Profile = () => {
  const { user } = useAuth();
  const [filter, setFilter] = useState(null);
  const { assets, isLoading } = useInventory(user?.addr);
  const data = useMemo(() => {
    if (!filter) {
      return assets;
    }

    if (filter === 'highestPrice') {
      return [...assets].sort((a, b) => b.price - a.price);
    }

    if (filter === 'lowestPrice') {
      return [...assets].sort((a, b) => a.price - b.price);
    }

    if (filter === 'createdAt') {
      return [...assets].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }
  }, [filter, assets]);

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
      <Address>{user?.addr || 'NO ADDRESS FOUND'}</Address>
      <Col span={18} offset={3}>
        <Row justify="end">
          <DropDown title="Filter & Sort" icon={<SlidersFilled />} {...{ options }} />
        </Row>
        {isLoading ? (
          <span>LOADING</span>
        ) : (
          <Row justify="space-between">
            {data.map(token => (
              <TokenCard key={`token-${token.id}`} {...token} />
            ))}
          </Row>
        )}
      </Col>
    </ProfileWrapper>
  );
};

export default Profile;
