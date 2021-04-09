import { useState, useEffect } from 'react';
import Head from 'next/head';
import ArrowRightOutlined from '@ant-design/icons/ArrowRightOutlined';
import LoadingOutlined from '@ant-design/icons/LoadingOutlined';
import { Col, Divider, Row } from 'antd';

import Banner from '~/components/home/Banner';
import RecentlyAddedHeader, {
  RecentlyAddedHeaderContent,
  RecentlyAddedHeaderSpan
} from '~/components/home/RecentlyAddedHeader';
import SetsList from '~/components/home/SetsList';
import LinkStyled, { LinkContent, LinkText } from '~/components/shared/LinkStyled';
import { getSales } from '~/flow/getSales';
import { getAsset } from '~/flow/getAsset';
import useAuth from '~/hooks/useAuth';

import { HomeWrapper } from '~/components/profile/styled';
import { URLs } from '~/routes/urls';

export default function Home() {
  const { user } = useAuth();
  const [loading] = useState(false);
  const [sets, setSets] = useState([]);

  useEffect(async () => {
    if (user?.addr) {
      const sales = await getSales(user.addr);
      const data = await Promise.all(
        sales.map(async (sale, index) => {
          const result = await getAsset(user.addr, sale.id);
          return { ...result, price: sales[index].price };
        })
      );
      setSets(data);
    }
  }, [user]);

  function renderSets() {
    if (loading) {
      return <LoadingOutlined />;
    }
    return <SetsList {...{ sets }} />;
  }

  return (
    <HomeWrapper>
      <Head>
        <title>Home | NiftyBeats</title>
      </Head>
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
          <Col span={24}>
            <Row align="center" gutter={[20, 20]}>
              {renderSets()}
            </Row>
          </Col>
        </Row>
      </Col>
    </HomeWrapper>
  );
}
