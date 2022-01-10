import NextLink from 'next/link';

import * as Styled from '~/styles/privacyPolicy/styles.js';

const SectionFour = () => {
  return (
    <>
      <Styled.Heading component="li">YOUR INTERACTION WITH OTHER USERS</Styled.Heading>
      <Styled.Text>
        To maintain a safe and supportive community on the Platform, users are expected to behave in
        a respectful manner at all times. However, you are solely responsible for your interactions
        with other users.
        <ol>
          <Styled.SubHeading component="li">Your Conduct on the Platform</Styled.SubHeading>
          <Styled.Text>
            You agree that you will not engage in any of the following rules regarding behaviors
            that are prohibited on the Platform:
            <ol id="alpha">
              <Styled.Text component="li" mt="12px">
                No stalking, harassing, intimidating, and bullying others.
              </Styled.Text>
              <Styled.Text component="li">
                No invading the privacy or revealing the personal information of others without
                their consent. This prohibition includes revealing the personal information of
                others than has been illegally made public.
              </Styled.Text>
              <Styled.Text component="li">
                No copying, adapting, distributing or otherwise using the copyrights, trademarks,
                publicity rights or other intellectual properties of others without their consent.
              </Styled.Text>
              <Styled.Text component="li">
                No obscene or sexually explicit language, photos, or videos.
              </Styled.Text>
              <Styled.Text component="li">
                No hate speech (speech that attacks a person or group on the basis of race,
                ethnicity, religion, disability, gender, age, or sexual orientation).
              </Styled.Text>
              <Styled.Text component="li">
                No SPAM or contacting other users for commercial purposes without our prior written
                consent.
              </Styled.Text>
              <Styled.Text component="li">
                No encouragement or participation in any criminal or other illegal conduct.
              </Styled.Text>
            </ol>
          </Styled.Text>
          <Styled.SubHeading component="li">Conduct of Other Users</Styled.SubHeading>
          <Styled.Text>
            We cannot guarantee full compliance with the above rules by each of the many users of
            the Platform. You may report problems with other users you experienced by writing an
            email to:{' '}
            <NextLink href="mailto:info@nftgenius.com" passHref={true}>
              <Styled.CustomLink>info@nftgenius.com</Styled.CustomLink>
            </NextLink>
            . However, you understand that the Company: (1) is NOT required to regularly supervise
            or control the interactions between any users or third parties, (2) does NOT control the
            availability or provision of goods and services by Commercial Users and their suppliers
            (3) does NOT get involved in any way with the transfer of financial information between
            you and other users or third parties, including payment processing companies (e.g.,
            PayPal and credit card companies), (4) does NOT verify the true identity, age,
            nationality, or representations of Platform users, and (5) does NOT conduct background
            checks or verifications of its users. You agree that you will not hold the Company, or
            any our shareholders, officers, directors, agents, employees, affiliates, subsidiaries,
            or licensees, liable (directly or indirectly) or responsible in any way for the conduct
            of any user of the Platform, or for any claims, demands, loss, or damages whatsoever,
            whether direct, indirect, general, special, compensatory, consequential, or incidental,
            arising out of or relating to the conduct of any user in connection with the use of the
            Platform; including, without limitation, death, bodily injury, emotional distress, or
            any other damages resulting from communications or meetings with other users or persons
            you meet through the Platform. You agree to take all necessary precautions in all
            interactions with other users, particularly if you decide to send money to another user,
            communicate off the Platform, or meet in person.
          </Styled.Text>
        </ol>
      </Styled.Text>
    </>
  );
};

export default SectionFour;
