import Head from 'next/head';
import { Row, Col } from 'antd';
import { SlidersFilled } from '@ant-design/icons';
import { useMemo, useState } from 'react';
import { useRouter } from 'next/router';

import Address from '~/components/address/Address';
import Card from '~/components/asset/Asset';
import DropDown from '~/components/dropdown/DropDown';
import useInventory from '~/hooks/useInventory';

import { Banner, ProfileWrapper } from '../../components/profile/styled';

const Profile = () => {
  const router = useRouter();
  const { id } = router.query;
  const [filter, setFilter] = useState(null);
  const { assets, isLoading } = useInventory(id);
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
      <Col span={24}>
        <Banner src="/images/inventory-banner.png" />
        <Address>{id || 'NO ADDRESS FOUND'}</Address>
      </Col>
      <Col span={18} offset={3}>
        <Row justify="end">
          <DropDown title="Filter & Sort" icon={<SlidersFilled />} {...{ options }} />
        </Row>
        {isLoading ? (
          <span>LOADING</span>
        ) : (
          <Row justify="space-between">
            {data.map(token => (
              <Card key={`token-${token.id}`} {...token} />
            ))}
          </Row>
        )}
      </Col>
    </ProfileWrapper>
  );
};

export default Profile;
