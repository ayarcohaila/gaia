import * as Styled from '~/styles/privacy-policy/styles.js';

const SectionTwo = () => {
  return (
    <>
      <Styled.Heading component="li">WHO MAY USE THE PLATFORM</Styled.Heading>
      <Styled.Text>
        Except as otherwise expressly restricted below, anyone may use the Platform in accordance
        with the Agreement and all provisions of the Agreement apply to all users of the Platform.
        <ol>
          <Styled.SubHeading component="li">Age Restrictions</Styled.SubHeading>
          <Styled.Text>
            The Platform is intended for persons eighteen (18) years of age or older. If you are
            between thirteen (13) and seventeen (17) years of age, you may use the Platform under
            the supervision of your parent or legal guardian who has explained the Agreement to you
            and agrees to be bound to it on your behalf. YOU MAY NOT USE THE PLATFORM IF YOU ARE
            UNDER THIRTEEN (13) YEARS OF AGE.
          </Styled.Text>
          <Styled.SubHeading component="li">Geographic Restrictions</Styled.SubHeading>
          <Styled.Text>
            If you access the Platform from outside the Business Location, beware that the Platform
            may contain content, references, or links to other websites, webpages, products, or
            services that are prohibited or restricted by the laws or regulations of your country,
            territory, or jurisdiction. YOU MAY NOT USE THE PLATFORM IN ANY JURISDICTION THAT DOES
            NOT GIVE EFFECT TO ALL PROVISIONS OF THESE TERMS OF USE.
          </Styled.Text>
          <Styled.SubHeading component="li">Commercial User Restrictions</Styled.SubHeading>
          <Styled.Text>
            The Company may require certain users who provide content, advertisements, or other
            commercial material (collectively, “Commercial Users”) to enter into a special
            relationship with the Company governed by the terms of another agreement(s)
            (collectively, “Commercial Terms”), such as a media distribution agreement or
            advertising agreement, in addition to the Agreement. Commercial Users may only use the
            Platform in accordance with both the Agreement and the applicable Commercial Terms. To
            the extent there is any conflict(s) between any of the applicable Commercial Terms and
            these Terms of Use, the applicable Commercial Terms will control as to the conflicting
            provision(s).
          </Styled.Text>
        </ol>
      </Styled.Text>
    </>
  );
};

export default SectionTwo;
