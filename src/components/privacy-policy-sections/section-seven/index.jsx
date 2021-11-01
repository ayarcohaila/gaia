import NextLink from 'next/link';

import * as Styled from '~/styles/privacy-policy/styles.js';

const SectionSeven = () => {
  return (
    <>
      <Styled.Heading component="li">CHILDREN’S PRIVACY</Styled.Heading>
      <Styled.Text>
        We do not knowingly collect, retain, or use any Personally Identifiable Information from
        children and minors under 13 years of age. You must be at least 18 years of age, or between
        13 and 18 years of age with parental consent and supervision, to use the Platform according
        to our{' '}
        <NextLink href="/" passHref={true}>
          <Styled.CustomLink target="_blank"></Styled.CustomLink>
        </NextLink>
        . IF YOU DO NOT MEET THESE AGE REQUIREMENTS, YOU ARE NOT ALLOWED TO USE OR ACCESS THE
        PLATFORM AT ANY TIME. If we become aware that we collected any Personally Identifiable
        Information from a child under 13 years of age or unauthorized minor under 18 years of age,
        we will take reasonable steps to delete such information from our databases.
        <ol>
          <Styled.Heading component="li">Note to Parents and Guardians</Styled.Heading>
          <Styled.Text>
            Because it is difficult for us to verify a person’s age online, it is entirely YOUR
            responsibility to supervise your child’s online activities at all times. Parental
            control tools like filtering software and hardware are commercially available to help
            you limit a child’s access to potentially harmful material on the Internet. If you
            discover that your child or minor has obtained an Account on our Platform, please email
            us immediately at{' '}
            <NextLink href="mailto: privacy@nftgenius.com" passHref={true}>
              <Styled.CustomLink>privacy@nftgenius.com</Styled.CustomLink>
            </NextLink>{' '}
            so we can promptly obtain parental consent or remove the child’s Personally Identifiable
            Information from our Platform.
          </Styled.Text>
        </ol>
      </Styled.Text>
    </>
  );
};

export default SectionSeven;
