import NextLink from 'next/link';

import * as Styled from '~/styles/privacyPolicy/styles.js';

const SectionTen = () => {
  return (
    <>
      <Styled.Heading component="li">ACCESS AND CHOICE</Styled.Heading>
      <Styled.Text>
        We recognize that certain users have relatively higher privacy concerns, and we make several
        opt-out options to accommodate as follows.
        <ol>
          <Styled.SubHeading component="li">
            Change or Removal of Personally Identifiable Information
          </Styled.SubHeading>
          <Styled.Text>
            You may update or change the Personally Identifiable Information you have provided to us
            by logging into the Platform and providing such additional information where applicable.
            You also have a right to remove your Personally Identifiable Information. To do this,
            please disable your Account from the settings menu in our Platform. We may, for a
            reasonable time, maintain a residual copy of your data as a backup. If you have any
            questions about your Personally Identifiable Information, please email us at
            <NextLink href="mailto: privacy@nftgenius.com" passHref={true}>
              <Styled.CustomLink>privacy@nftgenius.com</Styled.CustomLink>
            </NextLink>
            .
          </Styled.Text>
          <Styled.SubHeading component="li">
            Marketing Communications Opt-Out (Unsubscribe)
          </Styled.SubHeading>
          <Styled.Text>
            Where you have provided us with the appropriate permissions, or where we are legally
            entitled to do so, we will provide you with marketing materials by email or other
            electronic correspondence. If you would like to opt-out of receiving marketing
            communications, please email us at
            <NextLink href="mailto: privacy@nftgenius.com" passHref={true}>
              <Styled.CustomLink>privacy@nftgenius.com</Styled.CustomLink>
            </NextLink>
            , or follow the unsubscribe instructions that can normally be found at the bottom
            (footer) of each marketing email or correspondence.
          </Styled.Text>
          <Styled.SubHeading component="li">Third Parties Opt-Out</Styled.SubHeading>
          <Styled.Text>
            Requests to opt-out of transfers of your information to our business partners will also
            be considered, but technical and other limitations on data sharing may make it difficult
            or impossible to provide the Platform in this manner. If you would like us to consider
            this special accommodation, please email us at
            <NextLink href="mailto: privacy@nftgenius.com" passHref={true}>
              <Styled.CustomLink>privacy@nftgenius.com</Styled.CustomLink>
            </NextLink>
            .
          </Styled.Text>
        </ol>
      </Styled.Text>
    </>
  );
};

export default SectionTen;
