import * as Styled from '~/styles/privacy-policy/styles.js';

const SectionSix = () => {
  const paragraphDivider = (
    <>
      <br />
      <br />
    </>
  );

  return (
    <>
      <Styled.Heading component="li">THIRD PARTY CONTENT</Styled.Heading>
      <Styled.Text>
        You are solely responsible for your interactions with third parties you may meet or connect
        with on the Platform.
        <ol>
          <Styled.SubHeading component="li">
            Links to Third Party Locations and Offerings
          </Styled.SubHeading>
          <Styled.Text>
            The Company may allow or provide, or authorize certain Commercial Users or third parties
            to provide, advertisements, links, or API’s on or through the Platform to websites,
            webpages, social media platforms (i.e., Twitter, Facebook, Instagram, YouTube, and
            others), applications, services, products, software, documents, materials, and other
            resources operated by a party(s) other than the Company (“Third Party Offerings”). These
            Third Part Offerings may include (without limitation) blockchain protocols such as the
            Flow network and Wallets such as The Dapper Wallet. Company is NOT endorsing any such
            Third Party Offerings unless our endorsement is expressly stated. You acknowledge and
            agree to not hold the Company, or any our officers, directors, shareholders, agents,
            employees, affiliates, or subsidiaries, responsible or liable for the availability,
            quantity, or quality of any such Third Party Offerings or for any content, information,
            advertisement, product, service or other material on or available therefrom. You also
            acknowledge and agree to not hold the Company responsible or liable, directly or
            indirectly, for any damage or loss caused or alleged to be caused by or in connection
            with the use of or reliance on any such content, goods or services available on or
            through any such websites or resource.
            {paragraphDivider}
            If you link to our website or any other part of our Platform, you hereby agree to remove
            or disable such link should we so demand in writing.
          </Styled.Text>
          <Styled.SubHeading component="li">Dealings of Users and Third Parties</Styled.SubHeading>
          <Styled.Text>
            Purchases and other business dealings with users or other third parties found on or
            through the Platform, including payment and delivery of related goods or services, and
            any other terms, conditions, warranties or representations associated with such
            dealings, are solely between the users or other third party. Buyer beware: you provide
            your financial information (for example, your credit card or bank account information),
            or wire or otherwise send money, to Commercial Users, other users, or third parties
            solely at your own risk. Should you choose to make purchases from or provide your
            financial information to any users or third parties, you do so solely AT YOUR OWN RISK.
            WE DO NOT EXERCISE CONTROL OVER YOUR BUSINESS TRANSACTIONS (INCLUDING BUT NOT LIMITED TO
            PURCHASES) WITH OTHER USERS OR THIRD PARTIES, AND WE MAKE NO EXPRESS OR IMPLIED
            WARRANTIES OF ANY KIND REGARDING YOUR PURCHASES FROM THEM, INCLUDING BUT NOT LIMITED TO
            THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE (WHETHER OR NOT WE
            ARE IN FACT AWARE OF ANY SUCH PURPOSE), TITLE, SATISFACTORY QUALITY, ACCURACY, QUIET
            ENJOYMENT, NON-INFRINGEMENT OF INTELLECTUAL PROPERTY, OPERABILITY, FUNCTIONALITY, AND
            COMPLETENESS. YOU AGREE THAT THE COMPANY SHALL NOT BE RESPONSIBLE OR LIABLE FOR ANY LOSS
            OR DAMAGE OF ANY SORT INCURRED AS THE RESULT OF ANY SUCH DEALINGS OR AS THE RESULT OF
            THE CONDUCT OF ANY USER OR OTHER THIRD PARTIES ON THE PLATFORM.
            {paragraphDivider}
            The information on the PLATFORM does not constitute the rendering of legal, accounting,
            tax or other such professional advice; and to the extent any Content on the Platform
            contains such professional advice, and you agree you will not rely on any such advice
            but in the event you decide to rely on such advice, you agree the Company is not liable
            for such advice.
          </Styled.Text>
        </ol>
      </Styled.Text>
    </>
  );
};

export default SectionSix;
