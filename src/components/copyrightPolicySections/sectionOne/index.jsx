import NextLink from 'next/link';

import * as Styled from '~/styles/privacyPolicy/styles.js';

const SectionOne = () => {
  const paragraphDivider = (
    <>
      <br />
      <br />
    </>
  );

  return (
    <>
      <Styled.Heading component="li">COPYRIGHT ISSUES</Styled.Heading>
      <Styled.Text>
        <ol>
          <Styled.Text>
            In accordance with the Digital Millennium Copyright Act of 1998, 17 U.S.C. § 512, et
            seq. (the “DMCA”), (available via the U.S. Copyright Office website:{' '}
            <NextLink href="https://www.copyright.gov/legislation/dmca.pdf" passHref={true}>
              <Styled.CustomLink target="_blank">
                https://www.copyright.gov/legislation/dmca.pdf
              </Styled.CustomLink>
            </NextLink>
            ), we will investigate and respond to all claims of copyright infringement alleged
            involving our Platform that are reported to the Company’s Designated Copyright Agent,
            whose name and contact information are identified below.
            {paragraphDivider}
            The following notice requirements are intended to comply with our rights and obligations
            under the DMCA and, in particular, section 512(c), and do not constitute legal advice.
            Before serving either a notification of copyright-infringing material or a
            counter-notification that such material is not infringing, you may wish to contact an
            experienced copyright lawyer to better understand your rights and obligations under the
            DMCA and other applicable laws.
            {paragraphDivider}
            Warning: Misrepresenting that material infringes on your copyright MAY SUBJECT YOU TO
            LIABILITY FOR DAMAGES. If you are unsure whether questionable material on the Platform
            infringes on your copyright, please consult with an attorney before filing a DMCA
            notification or counter-notification.
          </Styled.Text>
          <Styled.SubHeading component="li">How To Report Copyright-Infringement</Styled.SubHeading>
          <Styled.Text>
            If you believe, in good faith, that a valid copyright-protected work that you own has
            been infringed, please deliver a notification containing the following information to
            our Designated Copyright Agent at the below-stated address:
          </Styled.Text>
          <ol id="alpha">
            <Styled.Text mt="14px" component="li">
              Identify the copyright-protected work that you claim has been infringed (include the
              relevant Copyright Registration number, if any);
            </Styled.Text>
            <Styled.Text mt="14px" component="li">
              Identify the material on the Platform that you claim is infringing, with enough detail
              so that we may locate and review it;
            </Styled.Text>
            <Styled.Text mt="14px" component="li">
              Provide your mailing address, telephone number, and email address;
            </Styled.Text>
            <Styled.Text mt="14px" component="li">
              Provide the legal name, and the electronic or physical signature of the person
              authorized to act on behalf of the owner of the copyright interest;
            </Styled.Text>
            <Styled.Text mt="14px" component="li">
              Include both of the following two statements in the body of the notice:
              <Styled.Text ml="14px">
                “I hereby state that I have a good faith belief that the disputed use of the
                copyrighted material or reference or link to such material is not authorized by the
                copyright owner, its agent, or the law (e.g., as a fair use).”
              </Styled.Text>
              <Styled.Text mt="14px" ml="14px">
                “I hereby state that the information in this Notice is accurate and, under penalty
                of perjury, that I am the owner, or authorized to act on behalf of the owner, of the
                copyright or of an exclusive right under the copyright that is allegedly infringed.”
              </Styled.Text>
            </Styled.Text>
            <Styled.Text mt="14px" component="li">
              Your physical or electronic signature.
            </Styled.Text>
          </ol>
          <Styled.Text>
            Deliver this notice, with all items completed, to our Designated Copyright Agent via
            certified mail or email:
            <ul>
              <Styled.Text component="li" list>
                Name: NFT Genius, Inc. Attn: Copyright Agent
              </Styled.Text>
              <Styled.Text component="li" list>
                Address: 22431 Antonio Parkway B160-458, Rancho Santa Margarita CA 92688
              </Styled.Text>
              <Styled.Text component="li" list>
                Email: ip@nftgenius.com
              </Styled.Text>
            </ul>
            <br />
            Please note that whether or not the Company ultimately decides to disable access to,
            suspend, takedown, delete or otherwise remove the allegedly infringing content, we may
            also attempt to forward your written notification, including the complaining party’s
            contact information, to the specific user who posted, uploaded, or created the content
            or take other steps to notify that user that the Company has received notice of an
            alleged copyright violation. The accused user will have an opportunity to respond to the
            complaint with a counter-notification in the event they believe the complaint is
            improper.
          </Styled.Text>
          <Styled.SubHeading component="li">
            How To File A Counter-Notification if You are Wrongfully Accused of Infringement
          </Styled.SubHeading>
          <Styled.Text>
            If you believe that a notification of copyright infringement has been improperly
            submitted against you, you may submit a counter-notification pursuant to Sections
            512(g)(2) and (3) of the DMCA. To do so, please provide the following information to our
            Designated Copyright Agent, identified above:
          </Styled.Text>
          <ol id="alpha">
            <Styled.Text mt="14px" component="li">
              Your full name, your email address, your mailing address;
            </Styled.Text>
            <Styled.Text mt="14px" component="li">
              Identification of the material removed or to which access has been disabled;
            </Styled.Text>
            <Styled.Text mt="14px" component="li">
              A statement under penalty of perjury that you have a good faith belief that removal or
              disablement of the material was a mistake or that the material was misidentified;
            </Styled.Text>
            <Styled.Text mt="14px" component="li">
              statement that you consent to the jurisdiction of the Federal District court (i) in
              the judicial district where your address is located if the address is in the United
              States, or (ii) located in the County of Los Angeles, State of California, U.S.A. if
              your address is located outside the United States, and that you will accept service of
              process from the complainant submitting the notice or the complainant’s authorized
              agent; and
            </Styled.Text>
            <Styled.Text mt="14px" component="li">
              Your physical or electronic signature.
            </Styled.Text>
          </ol>
        </ol>
      </Styled.Text>
    </>
  );
};

export default SectionOne;
