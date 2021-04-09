import { useState, useEffect } from 'react';
import Head from 'next/head';
import ArrowRightOutlined from '@ant-design/icons/ArrowRightOutlined';
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
import { CardLoading } from '~/components/skeleton/CardLoading';

export default function Home() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [sets, setSets] = useState([]);

  useEffect(async () => {
    if (user?.addr) {
      setLoading(true);
      const sales = await getSales(user.addr);
      const data = await Promise.all(
        sales.map(async (sale, index) => {
          const result = await getAsset(user.addr, sale.id);
          return { ...result, price: sales[index].price };
        })
      );
      setLoading(false);
      setSets(data);
    }
  }, [user]);

  function renderSets() {
    if (loading) {
      return [...Array(8).keys()].map(index => <CardLoading hasTopBar={false} key={index} />);
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
