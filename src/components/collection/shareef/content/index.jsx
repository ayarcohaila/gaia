import React, { useMemo } from 'react';
import { useTheme } from '@emotion/react';
import Image from 'next/image';

import { Typography, Divider, Grid } from '@mui/material';
import { Button } from '~/base';
import { useBreakpoints } from '~/hooks';
import { VideoPlayer } from '~/components';

import * as Styled from './styles';

const ShareefCollectionContent = ({ data }) => {
  const {
    palette: { grey }
  } = useTheme();
  const { isMediumDevice, isExtraMediumDevice } = useBreakpoints();

  const contentSection = useMemo(
    () => (
      <Grid item>
        <Styled.ContentSection container>
          <Styled.ContentSectionItem item xs={isMediumDevice ? 12 : 4}>
            <Image
              src="/collections/shareef/raffle.png"
              alt="raffle"
              width="283px"
              height="283px"
            />
          </Styled.ContentSectionItem>
          <Styled.ContentSectionItem
            item
            xs={isMediumDevice ? 12 : 8}
            pl={!isMediumDevice && '20px'}>
            <Typography variant="h4" mb="10px" mt={isMediumDevice && '30px'}>
              EXCLUSIVE RAFFLES
            </Typography>
            <Styled.TextContainer>
              <Typography variant="h5" fontWeight="normal">
                {`Just by holding NFTs from Shareef's genesis collection, you'll be entered to win one
              of:`}
              </Typography>
              <Typography variant="h5" fontWeight="normal">
                <Grid component="ul">
                  <Grid component="li">
                    Custom Shareef BALLERZ (minted into the original 10k set)
                  </Grid>
                  <Grid component="li">Signed pair of game-worn sneakers</Grid>
                  <Grid component="li">Meet-and-greet with Shareef</Grid>
                  <Grid component="li">Play a game of Fortnite with Shareef</Grid>
                </Grid>
                <Styled.CustomLinkText
                  href="/collections/shareef/Shareef_Sweepstakes_Rules.pdf"
                  target="_blank">
                  Read the official rules
                </Styled.CustomLinkText>
              </Typography>
            </Styled.TextContainer>
          </Styled.ContentSectionItem>
        </Styled.ContentSection>
        <Divider />
        <Styled.ContentSection container>
          <Styled.ContentSectionItem item xs={isMediumDevice ? 12 : 4}>
            <Image
              src="/collections/shareef/benefits.jpeg"
              alt="benefits"
              width="283px"
              height="283px"
            />
          </Styled.ContentSectionItem>
          <Styled.ContentSectionItem
            item
            xs={isMediumDevice ? 12 : 8}
            pl={!isMediumDevice && '20px'}>
            <Typography variant="h4" mb="10px" mt={isMediumDevice && '30px'}>
              HOLDER BENEFITS
            </Typography>
            <Typography variant="h5" fontWeight="normal" mb="20px">
              {`Genesis Collection holders will receive early access to future O'Neal releases,
              airdropped never-before-seen family photos, and eligible to win autographed jerseys,
              digital wearables, in-person experiences and more.`}
              <br />
              <br />
              {`We're also pleased to introduce an O'Neal Discord coming in Winter/Spring 2022, with
              exclusive channels set aside for holders and behind-the-scenes access to O'Neal family
              content.`}
              <br />
              <br />
              {`We're committed to rewarding those who are here at the beginning. Rookie trading
              cards, future sneaker or clothing lines, metaverse experiences -- ownership of O'Neal
              NFTs is your gateway to become a part of the family.`}
            </Typography>
          </Styled.ContentSectionItem>
        </Styled.ContentSection>
      </Grid>
    ),
    [isMediumDevice]
  );

  return (
    <>
      <Styled.Container container>
        {data.map((item, index) => (
          <Styled.CustomCard
            key={index}
            md={4}
            sm={12}
            item
            container
            styled={{ border: '1px solid red' }}>
            <VideoPlayer
              loop
              src={item?.video}
              poster={item?.asset}
              height={[
                !isExtraMediumDevice ? 'auto' : '400px',
                !isMediumDevice ? 'auto' : '400px',
                !isMediumDevice ? 'auto' : '400px',
                !isMediumDevice ? 'auto' : '400px'
              ]}
              width={[
                !isExtraMediumDevice ? 'auto' : '332px',
                !isExtraMediumDevice ? 'auto' : '332px',
                '332px',
                'auto'
              ]}
            />

            <Typography variant="h4" mt="10px">
              {item?.name}
            </Typography>
            <Typography variant="h6" mb="16px">
              Limited Edition of {item?.limit}
            </Typography>
            <Button
              sx={{
                width: '100%',
                marginBottom: '16px',
                maxWidth: '332px'
              }}>
              <Typography variant="h6" fontWeight="600" letterSpacing={1}>
                Purchase - ${item?.price}
              </Typography>
            </Button>
            <Typography variant="h6" color={grey[600]}>
              {item?.available} available
            </Typography>
          </Styled.CustomCard>
        ))}
      </Styled.Container>
      <Grid container justifyContent="center">
        {contentSection}
      </Grid>
    </>
  );
};

export default React.memo(ShareefCollectionContent);
