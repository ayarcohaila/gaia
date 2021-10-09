import NextLink from 'next/link';
import { Divider } from '~/base';

import * as Styled from '~/styles/privacy-policy/styles.js';

const PrivacyPolicy = () => {
  return (
    <>
      <Divider customProps={{ margin: 'auto', width: 'calc(100% - 160px)' }} />
      <Styled.Container>
        <Styled.Content component="section">
          <Styled.Title variant="h1">Privacy Policy</Styled.Title>
          <Styled.Heading variant="h2">Welcome</Styled.Heading>
          <Styled.Text variant="p">
            Foundation Labs, Inc. (“Foundation,” “we,” “us,” “our”) provides its marketplace and
            services (described below) to you (“you” or “User” through its website, platform, and
            marketplace located at www.foundation.app (the “Platform”), subject to the following
            Terms of Service (as amended from time to time, the “Terms”). By signing up for an
            account on the Platform or otherwise using or accessing the Platform, you acknowledge
            that you have read and agree to these Terms. The Privacy Policy and all such additional
            terms, guidelines, and rules as set forth on the Platform are hereby incorporated by
            reference into these Terms and expressly agreed to and acknowledged by the User.
            <br />
            <br />
            We reserve the right, at our sole discretion, to{' '}
            <NextLink href="/">change or modify</NextLink> portions of these Terms of Service at any
            time. If we do this, we will post the changes on this page and will indicate at the top
            of this page the date these terms were last revised. We will also notify you, either
            through the Platform user interface, in an email notification or through other
            reasonable means. Any such changes will become effective no earlier than fourteen (14)
            days after they are posted, except that changes addressing new functions of the Platform
            will be effective immediately. Your continued use of the Platform and after the date any
            such changes become effective constitutes your acceptance of the new{' '}
            <NextLink href="/">Terms of Service</NextLink>.
          </Styled.Text>

          <Styled.Heading variant="h2">What is Gaia?</Styled.Heading>
          <Styled.Text>
            When using Foundation, no User is allowed to:
            <ul>
              <li>
                Manipulate the price of a Digital Artwork in any way, including bidding on your own
                items, preventing bidding, or using Foundation to conceal economic activity.
              </li>
              <li>
                Manipulate the price of a Digital Artwork in any way, including bidding on your own
                items, preventing bidding, or using Foundation to conceal economic activity. Email
                or otherwise upload any content that (i) infringes any intellectual property or
                other proprietary rights of any party; (ii) you do not have a right to upload under
                any law or under contractual or fiduciary relationships; (iii) contains software
                viruses or any other computer code, files or programs designed to interrupt, destroy
                or limit the functionality of any computer software or hardware or
                telecommunications equipment; (iv) poses or creates a privacy or security risk to
                any person; (v) constitutes unsolicited or unauthorized advertising, promotional
                materials, commercial activities and/or sales, “junk mail,” “spam,” “chain letters,”
                “pyramid schemes,” “contests,” “sweepstakes,” or any other form of solicitation;
                (vi) is unlawful, harmful, threatening, abusive, harassing, tortious, excessively
                violent, defamatory, vulgar, obscene, pornographic, libelous, invasive of another’s
                privacy, hateful racially, ethnically or otherwise objectionable; or (vii) in the
                sole judgment of Foundation, is objectionable or which restricts or inhibits any
                other person from using or enjoying the Platform, or which may expose Foundation or
                its users to any harm or liability of any type; Interfere with or disrupt the
                Platform or servers or networks connected to the Platform, or disobey any
                requirements, procedures, policies or regulations of networks connected to the
                Platform ; or Violate any applicable local, state, national or international law, or
                any regulations having the force of law, including but not limited to the U.S.
                Department of Treasury’s Office of Foreign Assets Control (“OFAC”), or which would
                involve proceeds of any unlawful activity; Impersonate any person or entity, or
                falsely state or otherwise misrepresent your affiliation with a person or entity;
                Solicit personal information from anyone under the age of 18;
              </li>
              <li>
                Interfere with or disrupt the Platform or servers or networks connected to the
                Platform, or disobey any requirements, procedures, policies or regulations of
                networks connected to the Platform ; or
              </li>
              <li>
                Violate any applicable local, state, national or international law, or any
                regulations having the force of law, including but not limited to the U.S.
                Department of Treasury’s Office of Foreign Assets Control (“OFAC”), or which would
                involve proceeds of any unlawful activity;
              </li>
              <li>
                Impersonate any person or entity, or falsely state or otherwise misrepresent your
                affiliation with a person or entity;
              </li>
              <li>Solicit personal information from anyone under the age of 18;</li>
            </ul>
          </Styled.Text>
        </Styled.Content>
      </Styled.Container>
    </>
  );
};

export default PrivacyPolicy;
