import { useState, useEffect } from 'react';
import { Col, Row } from 'antd';
import { useSubscription } from '@apollo/react-hooks';

import { HomeWrapper } from '~/components/profile/styled';
import Banner from '~/components/home/Banner';
import Seo from '~/components/seo/seo';
import { CollectionsFilter } from '~/components';

import { Divider } from '~/base';
import { GET_NFTS_ON_SALE } from '~/store/server/subscriptions';
import basicAuthCheck from '~/utils/basicAuthCheck';
import NFTList from '~/components/nftList';

const Home = () => {
  const { data: { nft_sale_offer } = { nft_sale_offer: [] } } = useSubscription(GET_NFTS_ON_SALE);
  const [nftList, setNftList] = useState([]);

  useEffect(() => {
    if (nft_sale_offer?.length) {
      setNftList([...nft_sale_offer.sort((a, b) => Number(a.price) - Number(b.price))]);
    }
  }, [nft_sale_offer]);

  return (
    <HomeWrapper>
      <Seo title="Home" />
      <Col span={20} offset={2}>
        <Row>
          <Col span={24}>
            <Banner />
          </Col>
        </Row>
        <CollectionsFilter nftQuantity={nftList?.length} setNftList={setNftList} />
        <Divider customProps={{ marginTop: '24px' }} />
      </Col>
      <NFTList nfts={nftList.length > 0 ? nftList : new Array(10).fill({})} />
    </HomeWrapper>
  );
};
export async function getServerSideProps(ctx) {
  const { req, res } = ctx;
  await basicAuthCheck(req, res);

  return {
    props: {}
  };
}

export default Home;
