import * as Styled from '~/styles/privacy-policy/styles.js';

const SectionTwo = () => {
  return (
    <>
      <Styled.Heading component="li">INFORMATION USE</Styled.Heading>
      <Styled.Text>
        We may use the information you provide or that we collect, including any Personally
        Identifiable Information, to develop, operate, administer, support, maintain, improve, and
        enhance user experience and our Platform, to develop new services and offerings, to
        customize, personalize, and target content that may be more interesting, relevant, or useful
        to you, including targeted advertisements, promotions, marketing campaigns, offers, content,
        products and services (subject to your opt-out option), and for other administrative
        purposes, including to:
      </Styled.Text>

      <ol type="a" id="alpha">
        <Styled.Text component="li">
          send notices, updates, and contact you for feedback about the Platform;
        </Styled.Text>
        <Styled.Text component="li">
          conduct research, audits, data analysis, quality control, and improve user experience;
        </Styled.Text>
        <Styled.Text component="li">
          provide anonymous reporting for internal and external purposes;
        </Styled.Text>
        <Styled.Text component="li">
          notify you of technical updates or changes in policy; and
        </Styled.Text>
        <Styled.Text component="li">
          contact you for marketing and promotional purposes.
        </Styled.Text>
      </ol>

      <Styled.Text>
        We will contact you to ask your consent before using your information for a purpose other
        than those set forth in this Privacy Policy.
      </Styled.Text>
    </>
  );
};

export default SectionTwo;
