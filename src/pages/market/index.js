import Head from 'next/head';
import { Row, Col } from 'antd';
import { SlidersFilled } from '@ant-design/icons';
import { useMemo, useState } from 'react';

import { MarketPlaceWrapper } from '~/components/profile/styled';
import Asset from '~/components/asset/Asset';
import DropDown from '~/components/dropdown/DropDown';
import useAuth from '~/hooks/useAuth';
import useMarketplace from '~/hooks/useMarketplace';
import { CardLoading } from '~/components/skeleton/CardLoading';

const MarketPlace = () => {
  const [filter, setFilter] = useState(null);
  const { user } = useAuth();
  const { assets, isLoading } = useMarketplace(user?.addr);

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
    <MarketPlaceWrapper>
      <Head>
        <title>MarketPlace | NiftyBeats</title>
      </Head>
      <Col span={22} offset={1}>
        <Row justify="space-between">
          <h2>Marketplace</h2>
          <DropDown title="Filter & Sort" icon={<SlidersFilled />} {...{ options }} />
        </Row>
        <Row align="center">
          {isLoading
            ? [...Array(12).keys()].map(index => <CardLoading hasTopBar key={index} />)
            : data.map(token => (
                <Asset className="marketplace-asset" key={`token-${token.id}`} {...token} />
              ))}
        </Row>
      </Col>
    </MarketPlaceWrapper>
  );
};

export default MarketPlace;
