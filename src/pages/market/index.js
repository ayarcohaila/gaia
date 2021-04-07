import Head from 'next/head';
import { Row, Col } from 'antd';
import { SlidersFilled } from '@ant-design/icons';
import { useEffect, useMemo, useState } from 'react';

import { MarketPlaceWrapper } from '~/components/profile/styled';
import Asset from '~/components/asset/Asset';
import DropDown from '~/components/dropdown/DropDown';
import useAuth from '~/hooks/useAuth';
import { getSales } from '~/flow/getSales';
import { getAsset } from '~/flow/getAsset';
import { getProfile } from '~/flow/getProfile';

const MarketPlace = () => {
  const [filter, setFilter] = useState(null);
  const { user } = useAuth();
  const [assets, setAssets] = useState([]);

  useEffect(async () => {
    if (user?.addr) {
      const sales = await getSales(user.addr);
      const data = await Promise.all(
        sales.map(async (sale, index) => {
          const result = await getAsset(user.addr, sale.id);
          const owner = await getProfile(sale.owner);
          return { ...result, price: sales[index].price, owner: { src: owner.avatar } };
        })
      );
      setAssets(data);
    }
  }, [user]);

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
        <Row justify="space-between">
          {data.map(token => (
            <Asset key={`token-${token.id}`} {...token} />
          ))}
        </Row>
      </Col>
    </MarketPlaceWrapper>
  );
};

export default MarketPlace;
