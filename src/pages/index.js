/* eslint-disable no-unused-vars */
import ArrowRightOutlined from '@ant-design/icons/ArrowRightOutlined';
import { Col, Divider, Row, List } from 'antd';
import { useSubscription } from '@apollo/react-hooks';

import Banner from '~/components/home/Banner';
import RecentlyAddedHeader, {
  RecentlyAddedHeaderContent,
  RecentlyAddedHeaderSpan
} from '~/components/home/RecentlyAddedHeader';
import SetsList from '~/components/home/SetsList';
import LinkStyled, { LinkContent, LinkText } from '~/components/shared/LinkStyled';
import Seo from '~/components/seo/seo';

import {
  HomeWrapper,
  ListContainer,
  CardContainer,
  PaginationStyled
} from '~/components/profile/styled';
import { URLs } from '~/routes/urls';
import { CardLoading } from '~/components/skeleton/CardLoading';

import { GET_NFTS_ON_SALE } from '~/store/server/subscriptions';
import basicAuthCheck from '~/utils/basicAuthCheck';
import { PaginationGridOptions } from '~/utils/paginationGridOptions';

export default function Home() {
  const { data: { nft_sale_offer } = { nft_sale_offer: [] }, loading } =
    useSubscription(GET_NFTS_ON_SALE);
  function renderSets(nft, price) {
    if (loading) {
      return [...Array(8).keys()].map(index => <CardLoading hasTopBar key={index} />);
    }
    return <SetsList nft={nft} price={price} />;
  }

  return (
    <HomeWrapper>
      <Seo title="Home" />
      <Col span={20} offset={2}>
        <Row>
          <Col span={24}>
            <Banner />
          </Col>
        </Row>
        <Row gutter={[21, 21]}>
          <Col span={24}>
            <RecentlyAddedHeader>
              <RecentlyAddedHeaderContent>
                <RecentlyAddedHeaderSpan>Recently Added</RecentlyAddedHeaderSpan>
                <LinkStyled href={URLs.marketplace}>
                  <LinkContent>
                    <LinkText>View All</LinkText>
                    <ArrowRightOutlined />
                  </LinkContent>
                </LinkStyled>
              </RecentlyAddedHeaderContent>
              <Divider />
            </RecentlyAddedHeader>
          </Col>
          <ListContainer>
            <PaginationStyled
              grid={() => PaginationGridOptions(nft_sale_offer)}
              pagination={{
                showSizeChanger: true,
                pageSizeOptions: ['10', '50', '100', '1000'],
                position: 'top'
              }}
              dataSource={nft_sale_offer}
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
}
export async function getServerSideProps(ctx) {
  const { req, res } = ctx;
  await basicAuthCheck(req, res);

  return {
    props: {}
  };
}
