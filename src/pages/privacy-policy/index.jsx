import NextLink from 'next/link';
import Divider from '~/base/divider';
import * as Styled from '~/styles/privacyPolicy/styles.js';
import SectionOne from '~/components/privacyPolicySections/sectionOne';
import SectionTwo from '~/components/privacyPolicySections/sectionTwo';
import SectionThree from '~/components/privacyPolicySections/sectionThree';
import SectionFourToSix from '~/components/privacyPolicySections/sectionFourToSix';
import SectionSeven from '~/components/privacyPolicySections/sectionSeven';
import SectionEight from '~/components/privacyPolicySections/sectionEight';
import SectionNine from '~/components/privacyPolicySections/sectionNine';
import SectionTen from '~/components/privacyPolicySections/sectionTen';
import SectionElevenAndTwelve from '~/components/privacyPolicySections/sectionElevenAndTwelve';
import Seo from '~/components/seo';

const PrivacyPolicy = () => {
  const paragraphDivider = (
    <>
      <br />
      <br />
    </>
  );
  return (
    <>
      <Seo title="Privacy Policy" />
      <Divider customProps={{ margin: 'auto', width: 'calc(100% - 160px)' }} />
      <Styled.Container>
        <Styled.Content component="section">
          <Styled.Title variant="h1">Privacy Policy</Styled.Title>
          <Styled.Text variant="p">
            Your privacy is important. Please carefully read this Privacy Policy of NFT Genius Inc.
            (hereinafter, “we” “us” and “our”), which describes our practices relating to the
            information we receive, collect, use, disclose, share, and protect when you visit and
            use our website (
            <NextLink href="https://www.nftgenius.com/" passHref={true}>
              <Styled.CustomLink target="_blank">NFTGenius.com</Styled.CustomLink>
            </NextLink>
            ) and all websites, webpages, applications, marketplace, tools, features, API’s and
            other Internet-based services that we operate (collectively, the “Platform”). It also
            describes the choices available to you regarding our use of your personal information
            and how you can access, update, modify, or delete this information.
            {paragraphDivider}
            This Privacy Policy is a part of the overall agreement governing your relationship with
            Company, as defined in the{' '}
            <NextLink href="/" passHref={true}>
              <Styled.CustomLink>Terms of Use</Styled.CustomLink>
            </NextLink>
            . By accessing or using this Platform for any purpose, you consent to information
            collection, processing, retention, disclosure, transfer and other use limited to the
            purpose for which you engage us and other purposes explicitly set forth in this Privacy
            Policy. Any discussion of your use of the Platform in this Privacy Policy is meant to
            include your visit and other interaction with our Platform, regardless of whether you
            are a visitor, consumer, content licensor, buyer, seller, or other type of user.
            {paragraphDivider}
            If you object to anything in this Privacy Policy or the Terms of Use, you are not
            authorized to use the Platform and must immediately discontinue your use of our
            Platform.
          </Styled.Text>

          <ol>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFourToSix />
            <SectionSeven />
            <SectionEight />
            <SectionNine />
            <SectionTen />
            <SectionElevenAndTwelve />
          </ol>
        </Styled.Content>
      </Styled.Container>
    </>
  );
};

export default PrivacyPolicy;
