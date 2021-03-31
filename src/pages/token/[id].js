import Head from 'next/head';
import { Row, Col } from 'antd';
import { useMemo, useState } from 'react';

import {
  StyledImage,
  Heading,
  OwnerName,
  ReadMore,
  Description,
  Price,
  StyledButton,
  InfoHeading,
  InfoWrapper,
  TokenWrapper
} from './styled';

import UserInfo from '~/components/UserInfo/UserInfo';

const mockedToken = {
  id: 0,
  imgURL:
    'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  collection: 'Hashmarks',
  name: 'Great Oracle War of 2023 by the Powerful Mystic',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempus tincidunt elit, eleifend feugiat dui gravida sed. Aliquam nec feugiat orci, et hendrerit est. Nam pulvinar imperdiet dapibus. Pellentesque vitae sapien nec ligula condimentum posuere. Nullam dictum consequat venenatis. Vivamus nec nunc id sem laoreet vulputate. In sed imperdiet nulla. In aliquet, libero tempus laoreet consectetur, eros nisl dapibus lorem, sed hendrerit augue tortor in tortor. Aenean mi velit, finibus eu hendrerit et, bibendum non ligula. Mauris ac scelerisque tellus. In imperdiet sodales pretium. Vestibulum scelerisque at dui a tempor. Ut velit leo, aliquam nec congue id, egestas vel dui. Vestibulum in mauris quis mi vulputate luctus. Etiam commodo odio lectus, quis commodo elit semper eget. Pellentesque ultrices diam eu urna eleifend, non ornare neque pulvinar.',
  price: 3,
  createdAt: '2000-03-23T17:30:05.389Z',
  owner: {
    name: 'Jueen iShoTas1.37',
    src: 'https://randomuser.me/api/portraits/women/90.jpg',
    role: 'Creator'
  }
};

const Profile = () => {
  const [completeDescription, setCompleteDescription] = useState(false);
  const description = useMemo(() => {
    if (completeDescription) {
      return mockedToken.description;
    } else {
      return `${mockedToken.description.substr(0, 330)}...`;
    }
  }, [completeDescription]);

  return (
    <TokenWrapper>
      <Head>
        <title>Details | NiftyBeats</title>
      </Head>
      <Col span={18} offset={3}>
        <Row justify="flex-start" wrap={false}>
          <StyledImage src={mockedToken.imgURL} />
          <div className="content">
            <Heading>{mockedToken.name}</Heading>
            <p>
              Owned by <OwnerName>{mockedToken.owner.name}</OwnerName>
            </p>
            <Description>
              {description}{' '}
              <ReadMore onClick={() => setCompleteDescription(prevState => !prevState)}>
                Show {completeDescription ? 'less' : 'more'}
              </ReadMore>
            </Description>
            <InfoWrapper>
              <InfoHeading>Info</InfoHeading>
              <UserInfo {...mockedToken.owner} />
              <p>
                Price: <Price>{mockedToken.price.toFixed(4)}</Price>
              </p>
              <StyledButton type="primary" shape="round">
                Purchase Now
              </StyledButton>
            </InfoWrapper>
          </div>
        </Row>
      </Col>
    </TokenWrapper>
  );
};

export default Profile;
