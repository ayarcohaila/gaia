import NextLink from 'next/link';
import Divider from '~/base/divider';
import * as Styled from '~/styles/privacyPolicy/styles.js';
import SectionOne from '~/components/copyrightPolicySections/sectionOne';
import SectionTwo from '~/components/copyrightPolicySections/sectionTwo';
import Seo from '~/components/seo';
import useBreakpoints from '~/hooks/useBreakpoints';
import { SEO_DATA } from '~/constant';

const CopyrightPolicy = () => {
  const { isMediumDevice } = useBreakpoints();

  const paragraphDivider = (
    <>
      <br />
      <br />
    </>
  );
  return (
    <>
      <Seo title={SEO_DATA.title.copyrightPolicy} />
      <Divider
        customProps={{
          margin: 'auto',
          width: isMediumDevice ? 'calc(100% - 32px)' : 'calc(100% - 160px)'
        }}
      />
      <Styled.Container>
        <Styled.Content component="section">
          <Styled.Title variant="h1">COPYRIGHT POLICY</Styled.Title>
          <Styled.Text variant="p">
            NFT Genius Inc. (“Company,” “we,” or “us”) expects every user to respect all
            intellectual property rights, including copyrights, of others when using our website
            (located at{' '}
            <NextLink href="https://www.nftgenius.com" passHref={true}>
              <Styled.CustomLink target="_blank">www.nftgenius.com</Styled.CustomLink>
            </NextLink>
            ) and all websites, webpages, applications, marketplace, tools, features, API’s and
            other Internet-based services that we operate (the “Platform”).
            {paragraphDivider}
            The{' '}
            <NextLink href="/terms-of-use" passHref={true}>
              <Styled.CustomLink target="_blank">Terms of Use</Styled.CustomLink>
            </NextLink>{' '}
            for our Platform prohibits posting or transmitting any content that infringes on another
            person’s rights. If you wish to report a copyright complaint (i.e., if you believe your
            copyright-protected work is being copied without your consent or otherwise infringed by
            any content you find on our Platform) or a counter-argument (i.e., if you believe any
            allegations of infringement against you are false), please follow the below-stated
            procedures. As for any other intellectual property issues, including copyright,
            trademark, patent, or right of publicity issues, we welcome you to write us an email to
            the following address describing your concerns:{' '}
            <NextLink href="mailto:ip@nftgenius.com" passHref={true}>
              <Styled.CustomLink>ip@nftgenius.com</Styled.CustomLink>
            </NextLink>
          </Styled.Text>

          <ol>
            <SectionOne />
            <SectionTwo />
          </ol>
        </Styled.Content>
      </Styled.Container>
    </>
  );
};

export default CopyrightPolicy;
