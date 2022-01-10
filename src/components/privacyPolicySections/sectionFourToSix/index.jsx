import NextLink from 'next/link';

import * as Styled from '~/styles/privacyPolicy/styles.js';

const SectionFour = () => {
  return (
    <>
      <Styled.Heading component="li">INFORMATION SECURITY</Styled.Heading>
      <Styled.Text>
        We are committed to the security of your Personally Identifiable Information. To that end,
        we endeavor to use, among other things, commercially reasonable precautions and techniques,
        by employing adequate technological, physical and administrative security safeguards, such
        as firewalls, encryption, and mobile application monitoring to help protect your Personally
        Identifiable Information. For example, when you enter sensitive information (such as login
        credentials and all your activity on our Platform platform) we encrypt the transmission of
        that information using secure socket layer technology (SSL). These technologies, procedures,
        and other measures are used in an effort to ensure that your data is safe, secure, and only
        available to you and to those you authorized to access your data. Internally, we will
        restrict access to your Personally Identifiable Information to only those employees who need
        access to the information in order to perform their jobs. These employees will likely be
        limited in number those who are committed to this Privacy Policy. Unfortunately, no data
        transmission over the Internet can be guaranteed as 100% safe or secure from accidental or
        unauthorized access, use, disclosure, loss, destruction, hacking, misappropriation, and
        theft. As a result, WE CANNOT AND DO NOT REPRESENT, WARRANT, ENSURE OR GUARANTEE THE
        SECURITY OF ANY INFORMATION YOU TRANSMIT TO US OR RECEIVE FROM US OR THROUGH THE PLATFORM.
        This is especially true for information you transmit to us via email. We have no way of
        protecting that information until it reaches us. As stated throughout the Terms of Use, you
        use the Platform AT YOUR OWN RISK.
      </Styled.Text>
      <Styled.Heading component="li">THIRD PARTIES’ PRIVACY PRACTICES</Styled.Heading>
      <Styled.Text>
        The Platform (including{' '}
        <NextLink href="http://www.nftgenius.com" passHref={true}>
          <Styled.CustomLink target="_blank">www.nftgenius.com</Styled.CustomLink>
        </NextLink>
        website and relevant applications) may provide links, hyperlinks, and advertisements to the
        websites, webpages, applications, and services of third parties, including digital wallet
        providers; none of which we operate or control (collectively, the “Third Party Sites”). We
        take no responsibility for the content and privacy practices of such Third Party Sites. We
        do not endorse or make any representations about Third-Party Sites, and the personal data
        you choose to provide to Third-Party Sites is not covered by this Privacy Policy. Our Policy
        applies only to information collected by the Platform. We encourage you to be aware when you
        leave the Platform, and read the terms of use and privacy statements of other websites and
        web applications linked to the Platform. Please be aware that operators of those Third Party
        Sites may place their own Cookies on your computer and we do not have any control over such
        Cookies, even if they are linked to from the Platform. We are NOT RESPONSIBLE OR LIABLE for
        the privacy practices, security practices, or content provided by any third parties.
      </Styled.Text>
      <Styled.Heading component="li">DO NOT TRACK</Styled.Heading>
      <Styled.Text>
        Our Platform does not respond to “Do Not Track” signals. Each browser and device works
        differently and there is no consensus across the industry relating to these signals.
      </Styled.Text>
    </>
  );
};

export default SectionFour;
