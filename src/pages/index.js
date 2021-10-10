import { useState, useEffect, useCallback } from 'react';
import { Col, Row, List } from 'antd';
import { useSubscription } from '@apollo/react-hooks';

import {
  HomeWrapper,
  ListContainer,
  CardContainer,
  PaginationStyled
} from '~/components/profile/styled';
import Banner from '~/components/home/Banner';
import SetsList from '~/components/home/SetsList';
import Seo from '~/components/seo/seo';
import { CardLoading } from '~/components/skeleton/CardLoading';
import { CollectionsFilter } from '~/components';

import { Divider } from '~/base';
import { GET_NFTS_ON_SALE } from '~/store/server/subscriptions';
import basicAuthCheck from '~/utils/basicAuthCheck';
import { PaginationGridOptions } from '~/utils/paginationGridOptions';

const Home = () => {
  const { data: { nft_sale_offer } = { nft_sale_offer: [] }, loading } =
    useSubscription(GET_NFTS_ON_SALE);
  const [nftList, setNftList] = useState([]);

  const renderSets = useCallback(
    (nft, price) => {
      if (loading) {
        return [...Array(8).keys()].map(index => <CardLoading hasTopBar key={index} />);
      }
      return <SetsList nft={nft} price={price} />;
    },
    [loading]
  );

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
        <Row gutter={[21, 21]}>
          <ListContainer>
            <PaginationStyled
              grid={() => PaginationGridOptions(nftList)}
              pagination={{
                showSizeChanger: true,
                pageSizeOptions: ['10', '50', '100', '1000'],
                position: 'top'
              }}
              dataSource={nftList}
              renderItem={({ price, nft }) => {
                return (
                  <List.Item>
                    <CardContainer>{renderSets(nft, price)}</CardContainer>
                  </List.Item>
                );
              }}
            />
          </ListContainer>
        </Row>
      </Col>
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
