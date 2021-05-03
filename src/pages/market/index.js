import Head from 'next/head';
import { Row, Col } from 'antd';
import { SlidersFilled } from '@ant-design/icons';
import { useMemo, useState } from 'react';
import { useSubscription } from '@apollo/react-hooks';

import { MarketPlaceWrapper } from '~/components/profile/styled';
import Asset from '~/components/asset/Asset';
import DropDown from '~/components/dropdown/DropDown';
import { CardLoading } from '~/components/skeleton/CardLoading';

import { GET_NFTS_ON_SALE } from '~/store/server/subscriptions';

const MarketPlace = () => {
  const [filter, setFilter] = useState(null);
  const { data: { nft_sale_offer } = { nft_sale_offer: [] }, loading: isLoading } = useSubscription(
    GET_NFTS_ON_SALE
  );

  const data = useMemo(() => {
    if (!filter) {
      return nft_sale_offer;
    }

    if (filter === 'highestPrice') {
      return [...nft_sale_offer].sort((a, b) => b.price - a.price);
    }

    if (filter === 'lowestPrice') {
      return [...nft_sale_offer].sort((a, b) => a.price - b.price);
    }

    if (filter === 'createdAt') {
      return [...nft_sale_offer].sort(
        (a, b) => new Date(b.nft.created_at) - new Date(a.nft.created_at)
      );
    }
  }, [filter, nft_sale_offer]);

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
            : data.map(({ nft, price }) => (
                <Asset
                  className="marketplace-asset"
                  key={nft.id}
                  id={nft.id}
                  imgURL={nft.template.metadata.imgURL}
                  description={nft.template.metadata.description}
                  name={nft.template.metadata.name}
                  price={Number(price)}
                />
              ))}
        </Row>
      </Col>
    </MarketPlaceWrapper>
  );
};

export default MarketPlace;
