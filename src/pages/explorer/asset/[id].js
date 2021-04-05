import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Row, Col } from 'antd';
import { useMemo, useState, useEffect } from 'react';

import {
  StyledImage,
  Heading,
  OwnerName,
  ReadMore,
  Description,
  StyledButton,
  InfoHeading,
  InfoWrapper,
  TokenWrapper
} from '~/components/asset/styled';
import UserInfo from '~/components/UserInfo/UserInfo';
import { getAsset } from '~/flow/getAsset';
import useAuth from '~/hooks/useAuth';
import useMarket from '~/hooks/useMarket';
import useProfile from '~/hooks/useProfile';
import { getImageURL } from '~/utils/getImageUrl';
import { URLs } from '~/routes/urls';

const Explorer = () => {
  const router = useRouter();
  const {
    query: { id }
  } = router;
  const { user } = useAuth();
  const { userProfile } = useProfile(user?.addr);
  const { sales } = useMarket(user?.addr);

  const [completeDescription, setCompleteDescription] = useState(false);
  const [nft, setNft] = useState({
    name: '',
    description: '',
    imgURL: '',
    isSale: false
  });

  const description = useMemo(() => {
    if (completeDescription || nft.description.length < 330) {
      return nft.description;
    } else {
      return `${nft.description.substr(0, 330)}...`;
    }
  }, [completeDescription, nft]);

  useEffect(async () => {
    if (user?.addr) {
      const asset = await getAsset(user.addr, Number(id));
      const isSale = sales.filter(sale => sale.id === Number(id)).length > 0;
      setNft({ ...asset, isSale });
    }
  }, [id, user, sales]);

  return (
    <TokenWrapper>
      <Head>
        <title>Details | NiftyBeats</title>
      </Head>
      <Col span={18} offset={3}>
        <Row justify="flex-start" wrap={false}>
          <StyledImage src={getImageURL(nft.imgURL)} />
          <div className="content">
            <Heading>{nft.name}</Heading>
            <p>
              Owned by{' '}
              <Link href={URLs.profile(user?.addr)}>
                <OwnerName>{userProfile?.name}</OwnerName>
              </Link>
            </p>
            <Description>
              {description}{' '}
              {description.length > 330 && (
                <ReadMore onClick={() => setCompleteDescription(prevState => !prevState)}>
                  Show {completeDescription ? 'less' : 'more'}
                </ReadMore>
              )}
            </Description>
            <InfoWrapper>
              <InfoHeading>Info</InfoHeading>
              <UserInfo
                name={userProfile?.name}
                src={getImageURL(userProfile?.avatar ?? '')}
                type="Creator"
              />
              {nft.isSale && (
                <StyledButton
                  type="primary"
                  shape="round"
                  onClick={() => router.push(URLs.sale(id))}>
                  Go to sale
                </StyledButton>
              )}
            </InfoWrapper>
          </div>
        </Row>
      </Col>
    </TokenWrapper>
  );
};

export default Explorer;
