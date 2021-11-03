import NextLink from 'next/link';

import * as Styled from '~/styles/privacy-policy/styles.js';

const SectionTwelve = () => {
  return (
    <>
      <Styled.Heading component="li">GENERAL PROVISIONS</Styled.Heading>
      <Styled.Text>
        The following provisions will govern any interpretation of this Terms of Use as well as all
        other parts of the Agreement:
        <ol>
          <Styled.SubHeading component="li">Independent Contractors</Styled.SubHeading>
          <Styled.Text>
            All parties hereto are independent contractors. You agree that no agency, partnership,
            joint venture, or employment relationship is created or exists between you and the
            Company or our affiliates unless expressly stated in another agreement. Other than the
            binding commitments stated herein, and unless stated otherwise herein, neither party has
            any authority of any kind to bind the other in any respect.
          </Styled.Text>
          <Styled.SubHeading component="li">Waivers</Styled.SubHeading>
          <Styled.Text>
            The failure of either party to exercise any right provided for herein shall not be
            deemed a waiver of any further rights hereunder. In order for any waiver of compliance
            with the Agreement to be binding, we must provide you with written notice of such waiver
            through one of our authorized representatives. However, such waiver of any provision of
            the Agreement shall not be considered a waiver of any other provision or of our right to
            require strict observance of each of the terms herein. Failure to insist upon strict
            enforcement of any provision of these Terms of Use will not be construed as a waiver of
            any provision or right held by Company.
          </Styled.Text>
          <Styled.SubHeading component="li">Severability</Styled.SubHeading>
          <Styled.Text>
            If any provision of the Agreement is deemed to be invalid, void, or otherwise
            unenforceable by any court or arbitrator of competent jurisdiction, for any reason, that
            provision will be limited or severed to the extent necessary so that the Agreement will
            otherwise remain in full force and effect.
          </Styled.Text>
          <Styled.SubHeading component="li">Assignments</Styled.SubHeading>
          <Styled.Text>
            You may not assign or transfer the Agreement, including any part of this Terms of Use or
            any licenses and rights discussed herein, without our prior written consent. Any attempt
            by you to assign, transfer, delegate or sublicense the Agreement, or any part thereof,
            without such consent will be null and void. We may assign, transfer, delegate or
            sublicense the Agreement or any licenses and rights discussed herein, at our sole
            discretion, without restriction. Subject to the foregoing, the Agreement will bind and
            inure to the benefit of the parties, their successors and permitted assigns.
          </Styled.Text>
          <Styled.SubHeading component="li">Force Majeure</Styled.SubHeading>
          <Styled.Text>
            Neither of the parties hereto will be deemed to be in violation or breach of contract if
            performance of the obligations required by the Agreement is delayed or rendered
            impossible because of any natural disaster, war, terrorist act, earthquake, fire,
            thunder, lightning, typhoon, tsunami, hurricane, flood, strike, civil commotion,
            accident, sickness, epidemic, pandemic, virus, act of government, act of God, alien
            invasion, rebellion, revolution, riots, explosion, marine accident, strike, lockout,
            labor dispute, shortage or regulation of energy supply or materials, or other unforeseen
            event that is beyond the control of either party hereto.
          </Styled.Text>
          <Styled.SubHeading component="li">Notices</Styled.SubHeading>
          <Styled.Text>
            All notices we are required to give you may be delivered electronically by email or
            through the Platform. Unless you indicate otherwise prior to our sending of the notice,
            we may send email notices to your last-supplied email address or the email address that
            is linked to your user profile. Notices to the Company must be sent to:{' '}
            <NextLink href="mailto:info@nftgenius.com" passHref={true}>
              <Styled.CustomLink>info@nftgenius.com</Styled.CustomLink>
            </NextLink>
            . Notices we send you will be deemed delivered when emailed or transmitted by us, and
            all notices you provide us will be deemed to have been delivered when emailed to us.
          </Styled.Text>
          <Styled.SubHeading component="li">All Rights Reserved</Styled.SubHeading>
          <Styled.Text>
            All rights not expressly granted to you herein are reserved and not waived by Company.
            We reserve the right to enforce our rights to the fullest extent permitted under the
            laws of any state, country, and international body, including criminal prosecution where
            available.
          </Styled.Text>
          <Styled.SubHeading component="li">Governing Law</Styled.SubHeading>
          <Styled.Text>
            The Agreement, which includes this Terms of Use, is made in, entered into, governed by,
            and will be construed in accordance with the laws of the State of California, U.S.A.,
            without resort to its conflict of laws provisions.
          </Styled.Text>
        </ol>
      </Styled.Text>
    </>
  );
};

export default SectionTwelve;
