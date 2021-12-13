import NextLink from 'next/link';

import * as Styled from '~/styles/privacy-policy/styles.js';

const SectionNine = () => {
  return (
    <>
      <Styled.Heading component="li">
        PRIVACY SHIELD NOTICE FOR USERS IN THE EUROPEAN UNION
      </Styled.Heading>
      <Styled.Text>
        The Company complies with the EU-US Privacy Shield Framework as set forth by the U.S.
        Department of Commerce regarding the collection, use, and retention of Personally
        Identifiable Information transferred from the European Union to the United States. We intend
        to self-certify to the Department of Commerce that it adheres to the Privacy Shield
        Principles. In cases of onward transfer to third parties of data of EU individuals received
        pursuant to the EU-US Privacy Shield, NFT Genius Inc. is potentially liable. If there is any
        conflict between the terms in this Privacy Policy and the Privacy Shield Principles, the
        Privacy Shield Principles shall govern. To learn more about the Privacy Shield program,
        please visit{' '}
        <NextLink href="https://www.privacyshield.gov" passHref={true}>
          <Styled.CustomLink target="_blank">www.privacyshield.gov</Styled.CustomLink>
        </NextLink>
        . In compliance with the EU-US Privacy Shield Principles, we commit to resolve complaints
        about collection, use or sharing of your Personally Identifiable Information. Individuals in
        the EU with inquiries or complaints regarding our Private Shield Policy should first email
        us at{' '}
        <NextLink href="mailto: privacy@nftgenius.com" passHref={true}>
          <Styled.CustomLink>privacy@nftgenius.com</Styled.CustomLink>
        </NextLink>
        . We are further committed to refer unresolved Privacy Shield complaints to the EU Data
        Protection Authorities. Contact details for the EU data protection authorities can be found
        at{' '}
        <NextLink
          href="http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"
          passHref={true}>
          <Styled.CustomLink>
            http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm
          </Styled.CustomLink>
        </NextLink>
        . We will cooperate with the appropriate EU Data Protection Authorities during investigation
        and resolution of complaints brought under Privacy Shield. These recourse mechanisms are
        available at no cost to you. The Federal Trade Commission has jurisdiction over our
        compliance with this Policy and the EU-US Privacy Shield Framework. As a last resort,
        privacy complaints that remain unresolved after pursuing these and other channels may be
        subject to binding arbitration before the Privacy Shield Panel to be created jointly by the
        US Department of Commerce and the European Commission.
      </Styled.Text>
    </>
  );
};

export default SectionNine;
