import { Col, Row } from 'antd';
import Image from 'next/image';

import {
  LayoutFooter,
  SummaryCol,
  CustomRow,
  Title,
  Text,
  LinkContainer,
  CustomLink as Link
} from './styles';

const placeholderText =
  'The world’s largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs), including ERC721 and ERC1155 assets. Buy, sell, and discover exclusive digital assets like Axies.';

export default function Footer() {
  const Summary = () => (
    <SummaryCol span={8}>
      <Title level={4}>Nifty Beats</Title>
      <Text>{placeholderText}</Text>
    </SummaryCol>
  );
  const Contact = () => (
    <Col span={6}>
      <Title level={4}>Get in touch</Title>
      <LinkContainer>
        <Link margin>Home</Link>
        <Link margin>Create NFT</Link>
        <Link margin>Marketplace</Link>
        <Link margin>Login</Link>
      </LinkContainer>
    </Col>
  );
  const About = () => (
    <Col span={6}>
      <Title level={4}>About us</Title>
      <LinkContainer>
        <Link margin>Global Value</Link>
        <Link margin>Social</Link>
        <Link margin>History</Link>
        <Link margin>Press</Link>
      </LinkContainer>
    </Col>
  );
  const Spacer = () => <Col span={3} />;

  return (
    <LayoutFooter>
      <Row justify="space-around">
        <Summary />
        <Contact />
        <About />
        <Spacer />
      </Row>
      <CustomRow>
        <Col span={12}>
          <Row>
            <Link>Privacy Policy</Link>
            <Text>{`‎‎‎‏‏‎ ‎-‏‏‎ ‎`}</Text>
            <Link>Modern Day Statement</Link>
            <Text>{'‏‏‎ ‎-‏‏‎ ‎'}</Text>
            <Link>Social Impact Statement</Link>
          </Row>
        </Col>
        <Col span={6}></Col>
        <Col span={6}>
          <Row justify="space-around">
            <Image src="/discord.svg" width={20} height={20} />
            <Image src="/facebook.svg" width={20} height={20} />
            <Image src="/telegram.svg" width={20} height={20} />
            <Image src="/twitter.svg" width={20} height={20} />
            <Image src="/signal.svg" width={20} height={20} />
            <Image src="/instagram.svg" width={20} height={20} />
          </Row>
        </Col>
      </CustomRow>
    </LayoutFooter>
  );
}
