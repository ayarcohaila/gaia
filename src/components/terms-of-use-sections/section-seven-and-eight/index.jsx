import NextLink from 'next/link';

import * as Styled from '~/styles/privacy-policy/styles.js';

const SectionSevenAndEight = () => {
  return (
    <>
      <Styled.Heading component="li">INTELLECTUAL PROPERTY RIGHTS</Styled.Heading>
      <Styled.Text>
        Any trademarks and service marks (e.g., NFT GeniusTM and our logos, slogans, and phrases),
        trade dresses, copyright-protected works, rights of publicity, patents, know-how, trade
        secrets, proprietary ideas, and publicity rights that are reproduced, distributed,
        displayed, performed, transmitted, or otherwise appearing on the Platform or any Content
        therein (collectively, the “IP”) are the property of their respective owners; they are
        either owned by us, have been licensed to us, or are being used by us in a merely
        descriptive manner, under the fair use doctrine, under the first-sale doctrine, with an open
        source license, by virtue of being in the public domain, or in accordance with some other
        legal exception(s) or exemption(s). Other than as expressly allowed by us in writing,
        nothing herein or in the Platform may be implied as granting any license, assignment, or
        right to copy or use of our trade name or any of our IP without our prior authorization. You
        agree not to use such IP in any manner without the prior written permission of the Company’s
        authorized representative. Any unauthorized reproduction or distribution of any part of the
        Platform, and Content found therein, is expressly prohibited and may result in civil
        litigation, damages, injunctive relief and possibly even criminal penalties under law.
        Please inform us if you become aware of any infringement or violation of intellectual
        property rights, by emailing us at:{' '}
        <NextLink href="mailto:info@nftgenius.com" passHref={true}>
          <Styled.CustomLink>info@nftgenius.com</Styled.CustomLink>
        </NextLink>
      </Styled.Text>
      <Styled.Heading component="li">INDEMNIFICATION</Styled.Heading>
      <Styled.Text>
        You agree to defend, indemnify, reimburse, and hold harmless the Company as well as our
        shareholders, directors, officers, employees, agents, advisors, subsidiaries, affiliates,
        assignors and licensors from and against any and all claims, causes of action, actions or
        demands, liabilities, damages, losses, fines, penalties, costs and expenses of any kind, and
        settlements including without limitation, reasonable attorneys’ fees, paralegals’ fees,
        expert witness’ fees, investigation fees, and accounting fees, arising from or related to
        (i) your unauthorized use of the Platform, (ii) any Content you Post or that is otherwise
        introduced to the Platform from your Account, (iii) your breach of any provision in the
        Agreement, (iv) any of your representations or warranties made herein, (v) your use or
        misuse of the Platform, Content appearing on the Platform, or any part(s) thereof, or (vi)
        your violation of any law or rights of any third party. We will have the option to assume
        the exclusive defense and control of any action to which the Company is named a party and
        you agree to cooperate with us in asserting any available defenses we find appropriate.
        NOTHING STATED IN THIS TERMS OF USE SHALL BE DEEMED TO EXCLUDE OR LIMIT YOUR LIABILITY IN
        RESPECT OF ANY INDEMNITY GIVEN BY YOU HEREIN.
      </Styled.Text>
    </>
  );
};

export default SectionSevenAndEight;
