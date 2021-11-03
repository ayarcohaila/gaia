import NextLink from 'next/link';
import { Divider } from '~/base';
import * as Styled from '~/styles/privacy-policy/styles.js';
import {
  SectionOne,
  SectionTwo,
  SectionThree,
  SectionFour,
  SectionFive,
  SectionSix,
  SectionSevenAndEight,
  SectionNine,
  SectionTen,
  SectionEleven,
  SectionTwelve,
  SectionThirteen
} from '~/components/terms-of-use-sections';

const TermsOfUse = () => {
  const paragraphDivider = (
    <>
      <br />
      <br />
    </>
  );
  return (
    <>
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
        </Styled.Content>
      </Styled.Container>
    </>
  );
};

export default TermsOfUse;
