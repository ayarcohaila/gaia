import NextLink from 'next/link';
import { Grid } from '@mui/material';

import Divider from '~/base/divider';
import * as Styled from '~/styles/privacyPolicy/styles.js';
import SectionOne from '~/components/termsOfUseSections/sectionOne';
import SectionTwo from '~/components/termsOfUseSections/sectionTwo';
import SectionThree from '~/components/termsOfUseSections/sectionThree';
import SectionFour from '~/components/termsOfUseSections/sectionFour';
import SectionFive from '~/components/termsOfUseSections/sectionFive';
import SectionSix from '~/components/termsOfUseSections/sectionSix';
import SectionSevenAndEight from '~/components/termsOfUseSections/sectionSevenAndEight';
import SectionNine from '~/components/termsOfUseSections/sectionNine';
import SectionTen from '~/components/termsOfUseSections/sectionTen';
import SectionEleven from '~/components/termsOfUseSections/sectionEleven';
import SectionTwelve from '~/components/termsOfUseSections/sectionTwelve';
import SectionThirteen from '~/components/termsOfUseSections/sectionThirteen';
import Seo from '~/components/seo';

const TermsOfUse = () => {
  const paragraphDivider = (
    <>
      <br />
      <br />
    </>
  );
  return (
    <>
      <Seo title="Terms of Use" />
      <Divider customProps={{ margin: 'auto', width: 'calc(100% - 160px)' }} />
      <Styled.Container>
        <Styled.Content component="section">
          <Styled.Title variant="h1">TERMS OF USE</Styled.Title>
          <Styled.Text variant="p">
            Welcome to NFT Genius™, a platform for minting and transacting non-fungible tokens (the
            “Platform”) which includes this website (located at www.nftgenius.com) and all websites,
            webpages, applications, marketplace, tools, features, API’s and other Internet-based
            services operated by NFT Genius Inc., a Delaware corporation (the “Company,” “we,” or
            “us”).
            {paragraphDivider}
            BEFORE YOU USE THE PLATFORM IN ANY WAY, CAREFULLY READ ALL OF THE FOLLOWING TERMS
            CONCERNING YOUR LEGAL RIGHTS AND LIMITATIONS AND PLEASE ASK ANY QUESTIONS YOU MAY HAVE
            BY WRITING US AN EMAIL TO:{' '}
            <NextLink href="mailto:info@nftgenius.com" passHref={true}>
              <Styled.CustomLink>info@nftgenius.com</Styled.CustomLink>
            </NextLink>
            {paragraphDivider}
            You may only use this Platform if you agree to all the following Terms of Use:
          </Styled.Text>

          <ol>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <SectionSix />
            <SectionSevenAndEight />
            <SectionNine />
            <SectionTen />
            <SectionEleven />
            <SectionTwelve />
            <SectionThirteen />
          </ol>
          <Grid sx={{ marginTop: '24px' }}>
            <Styled.Text variant="p" sx={{ fontWeight: 'bold' }}>
              Last Modified: November 4, 2021
            </Styled.Text>
          </Grid>
        </Styled.Content>
      </Styled.Container>
    </>
  );
};

export default TermsOfUse;
