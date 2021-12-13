import NextLink from 'next/link';

import * as Styled from '~/styles/privacy-policy/styles.js';

const SectionOne = () => {
  const paragraphDivider = (
    <>
      <br />
      <br />
    </>
  );

  return (
    <>
      <Styled.Heading component="li">AGREEMENT TO USE THE PLATFORM</Styled.Heading>
      <Styled.Text>
        <ol>
          <Styled.SubHeading component="li">
            You Accept the Agreement by Using the Platform
          </Styled.SubHeading>
          <Styled.Text>
            This Terms of Use, along with our separately stated{' '}
            <NextLink href="/privacy-policy" passHref={true}>
              <Styled.CustomLink target="_blank">Privacy Policy</Styled.CustomLink>
            </NextLink>{' '}
            and{' '}
            <NextLink href="/" passHref={true}>
              <Styled.CustomLink target="_blank">Copyright Policy</Styled.CustomLink>
            </NextLink>
            , (all three documents together, hereinafter the “Agreement”), constitute the entire,
            complete, and binding agreement between you and the Company with respect to the subject
            matter discussed herein, except to the extent any terms herein are superseded by
            conflicting terms of another agreement that you may have or enter into with the Company.
            The Platform is offered to you conditioned upon your acceptance of the Agreement. By
            using the Platform for any purpose, with or without a user account and from any device
            and location, you represent that (1) you have read and understood this Terms of Use and
            our Privacy Policy and Copyright Policy, (2) you meet all of the eligibility
            requirements described below and (3) you accept and agree to be bound by the Agreement
            as it appears on each respective date you use the Platform.
            {paragraphDivider}
            IF YOU DO NOT AGREE TO THE ENTIRE AGREEMENT OR ARE INCAPABLE OF COMPLYING WITH IT, OR
            ANY PART OF IT, YOU ARE NOT ALLOWED TO ACCESS OR USE THE PLATFORM IN ANY WAY.
          </Styled.Text>
          <Styled.SubHeading component="li">
            Location Where the Agreement is Executed and Performed
          </Styled.SubHeading>
          <Styled.Text>
            The Platform is offered and provided at our business location in Los Angeles,
            California, U.S.A. (the “Business Location”). You agree that, by accessing or using the
            Platform, or any part thereof, you are voluntarily reaching into the Business Location
            to access the Platform, execute and enter into this Agreement, and purposefully avail
            yourself to the services offered by the Company solely at the Business Location;
            regardless of your own location. Moreover, if you access the Platform from outside of
            the Business Location, you acknowledge that you are solely responsible for compliance
            with all applicable local laws and regulations of your location. YOU ACCESS AND USE THE
            PLATFORM AT YOUR OWN RISK. THE COMPANY MAKES NO REPRESENTATIONS OR WARRANTIES THAT YOUR
            ACCESS TO THIS SITE OR ITS CONTENT IS APPROPRIATE, AVAILABLE FOR USE, OR EVEN LEGAL IN
            CERTAIN LOCATIONS OUTSIDE THE BUSINESS LOCATION.
          </Styled.Text>
          <Styled.SubHeading component="li">Future Changes to the Agreement</Styled.SubHeading>
          <Styled.Text>
            The Company may modify, amend, supplement, or otherwise change this Terms of Use as well
            as other parts of the Agreement, in whole or in part, at any time and at its sole
            discretion. Such changes to the Agreement will take effect as of the “Last updated” date
            stated at the top of this page. Each time you access the Platform, you consent to be
            bound by the most recently modified version of the Agreement. We will notify you of any
            such changes that are material (i.e., that substantially affect your rights) by either
            sending a notice to the last email address you provided to us or by placing a notice on
            this page or another area of the Platform. You are encouraged to review this page for
            any changes to the Agreement before using the Platform. For reasons of commercial
            practicality, you may not change any terms in the Agreement without our prior written
            consent.
          </Styled.Text>
          <Styled.SubHeading component="li">Future Changes to the Platform</Styled.SubHeading>
          <Styled.Text>
            The Company may modify, withdraw, suspend or discontinue at any time in our sole
            discretion, with or without reason or notice, your access to and use of the Platform or
            any of its functions, tools, features, materials or content.
          </Styled.Text>
        </ol>
      </Styled.Text>
    </>
  );
};

export default SectionOne;
