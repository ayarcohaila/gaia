import NextLink from 'next/link';

import * as Styled from '~/styles/privacy-policy/styles.js';

const SectionElevenAndTwelve = () => {
  return (
    <>
      <Styled.Heading component="li">THIS PRIVACY POLICY MAY CHANGE</Styled.Heading>
      <Styled.Text>
        Laws, regulations, and company policies change over time. We reserve the right to change,
        update, amend, or modify this Privacy Policy at any time and from time to time. We will
        maintain the updated version of this Privacy Policy, with any such changes, on this page. We
        encourage you to review this page frequently because you will be subject to the latest
        version of this Privacy Policy as it appears each time you visit. To the extent we are able,
        we will also attempt to send you notices of material changes to this Privacy Policy at your
        last known email address or on other conspicuous places of the Platform. It is YOUR
        RESPONSIBILITY to keep us updated about any changes to your email address and contact
        information for purposes of receiving notices and updates about the Platform.
      </Styled.Text>

      <Styled.Heading component="li">COMPLIANCE REVIEW AND QUESTIONS</Styled.Heading>
      <Styled.Text>
        If you have any questions, concerns, or comments about this Privacy Policy or our privacy
        practices, please email us at:{' '}
        <NextLink href="mailto: privacy@nftgenius.com" passHref={true}>
          <Styled.CustomLink>privacy@nftgenius.com</Styled.CustomLink>
        </NextLink>
        .
      </Styled.Text>
    </>
  );
};

export default SectionElevenAndTwelve;
