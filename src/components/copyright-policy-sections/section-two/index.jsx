import NextLink from 'next/link';

import * as Styled from '~/styles/privacy-policy/styles.js';

const SectionTwo = () => {
  return (
    <>
      <Styled.Heading component="li">COPYRIGHT ISSUES ON OTHER PLATFORMS</Styled.Heading>
      <Styled.Text>
        <ol>
          <Styled.Text>
            Pursuant to our{' '}
            <NextLink href="/terms-of-use" passHref={true}>
              <Styled.CustomLink target="_blank">Terms of Use</Styled.CustomLink>
            </NextLink>
            , the Company has no duty or obligation to attempt to remove allegedly infringing
            content from websites, webpages, applications, and services which we do not operate or
            control, including any digital wallet owned or operated by any third-party user or
            entity. If you are the copyright owner of content that is reproduced, distributed,
            transmitted, or otherwise used without your authorization on a third-party platform,
            please contact the relevant third-party for information about their infringement
            notification policy.
          </Styled.Text>
        </ol>
      </Styled.Text>
    </>
  );
};

export default SectionTwo;
