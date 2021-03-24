import { useState } from 'react';
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
import { HomeWrapper } from '~/pages/styled';

export default function Home() {
  const [loading] = useState(false);
  const fakeSets = [
    {
      owner: 'cleiton',
      id: 1,
      price: 10,
      collection: 'Collection',
      name: 'Asset Name',
      imgUrl:
        'https://wax.atomichub.io/ipfs/QmeSXAbzuDQDkwBhspzyj9Ltz5m58UcBypCLvjcDRg4eAT/Base/19-GUILE-Base.png'
    },
    {
      owner: 'cleiton',
      id: 2,
      price: 56.9,
      collection: 'Collection',
      name: 'Asset Name',
      imgUrl:
        'https://wax.atomichub.io/ipfs/QmeSXAbzuDQDkwBhspzyj9Ltz5m58UcBypCLvjcDRg4eAT/Base/19-GUILE-Base.png'
    },
    {
      owner: 'cleiton',
      id: 3,
      price: 22,
      collection: 'Collection',
      name: 'Asset Name',
      imgUrl:
        'https://wax.atomichub.io/ipfs/QmeSXAbzuDQDkwBhspzyj9Ltz5m58UcBypCLvjcDRg4eAT/Base/19-GUILE-Base.png'
    },
    {
      owner: 'cleiton',
      id: 4,
      price: 99,
      collection: 'Collection',
      name: 'Asset Name',
      imgUrl:
        'https://wax.atomichub.io/ipfs/QmeSXAbzuDQDkwBhspzyj9Ltz5m58UcBypCLvjcDRg4eAT/Base/19-GUILE-Base.png'
    },
    {
      owner: 'cleiton',
      id: 5,
      price: 99,
      collection: 'Collection',
      name: 'Asset Name',
      imgUrl:
        'https://wax.atomichub.io/ipfs/QmeSXAbzuDQDkwBhspzyj9Ltz5m58UcBypCLvjcDRg4eAT/Base/19-GUILE-Base.png'
    },
    {
      owner: 'cleiton',
      id: 6,
      price: 99,
      collection: 'Collection',
      name: 'Asset Name',
      imgUrl:
        'https://wax.atomichub.io/ipfs/QmeSXAbzuDQDkwBhspzyj9Ltz5m58UcBypCLvjcDRg4eAT/Base/19-GUILE-Base.png'
    },
    {
      owner: 'cleiton',
      id: 7,
      price: 99,
      collection: 'Collection',
      name: 'Asset Name',
      imgUrl:
        'https://wax.atomichub.io/ipfs/QmeSXAbzuDQDkwBhspzyj9Ltz5m58UcBypCLvjcDRg4eAT/Base/19-GUILE-Base.png'
    },
    {
      owner: 'cleiton',
      id: 8,
      price: 99,
      collection: 'Collection',
      name: 'Asset Name',
      imgUrl:
        'https://wax.atomichub.io/ipfs/QmeSXAbzuDQDkwBhspzyj9Ltz5m58UcBypCLvjcDRg4eAT/Base/19-GUILE-Base.png'
    }
  ];
  function renderSets() {
    if (loading) {
      return <LoadingOutlined />;
    }
    return <SetsList sets={fakeSets} />;
  }

  return (
    <HomeWrapper>
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
                <LinkStyled href={'somehref'}>
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
            <Row gutter={[20, 20]}>{renderSets()}</Row>
          </Col>
        </Row>
      </Col>
    </HomeWrapper>
  );
}
