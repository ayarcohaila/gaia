import Head from 'next/head';
import { Row, Col } from 'antd';
import { SlidersFilled } from '@ant-design/icons';
import { useMemo, useState } from 'react';

import TokenCard from '~/components/TokenCard/TokenCard';
import DropDown from '~/components/DropDown/DropDown';
import useMarket from '~/hooks/useMarket';
import useAuth from '~/hooks/useAuth';
import { MarketPlaceWrapper } from './styled';

const MarketPlace = () => {
  const [filter, setFilter] = useState(null);
  const { user } = useAuth();
  const { sales, isLoading } = useMarket(user?.address);
  const data = useMemo(() => {
    if (!filter) {
      return sales;
    }

    if (filter === 'highestPrice') {
      return [...sales].sort((a, b) => b.price - a.price);
    }

    if (filter === 'lowestPrice') {
      return [...sales].sort((a, b) => a.price - b.price);
    }

    if (filter === 'createdAt') {
      return [...sales].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }
  }, [filter, sales]);

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
        {isLoading ? (
          <span>Loading</span>
        ) : (
          <Row justify="space-between">
            {data.map(token => (
              <TokenCard key={`token-${token.id}`} {...token} />
            ))}
          </Row>
        )}
        <Row justify="space-between">
          {sales.map(token => (
            <TokenCard key={`token-${token.id}`} {...token} />
          ))}
        </Row>
      </Col>
    </MarketPlaceWrapper>
  );
};

export default MarketPlace;
