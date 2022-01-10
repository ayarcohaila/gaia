import NextLink from 'next/link';

import * as Styled from '~/styles/privacyPolicy/styles.js';

const SectionThirteen = () => {
  return (
    <>
      <Styled.Heading component="li">CONTACT</Styled.Heading>
      <Styled.Text>
        If you have any questions regarding this Terms of Use or any other part of the Agreement,
        please contact us. All questions, comments, concerns, and notices to the Company should be
        directed via email to:{' '}
        <NextLink href="mailto:info@nftgenius.com" passHref={true}>
          <Styled.CustomLink>info@nftgenius.com</Styled.CustomLink>
        </NextLink>
      </Styled.Text>
    </>
  );
};

export default SectionThirteen;
