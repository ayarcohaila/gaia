import NextLink from 'next/link';

import * as Styled from '~/styles/privacy-policy/styles.js';

const SectionFour = () => {
  return (
    <>
      <Styled.Heading component="li">CONTENT ON THE PLATFORM</Styled.Heading>
      <Styled.Text>
        For purposes of the Agreement, “Content” is defined as any idea, information, data, text,
        tag, script, message, comment, question, slogan, newsletter, description, pricing, table,
        statistic, ranking, rating, review, list, map, spreadsheet, model, picture, photo,
        presentation, drawing, graphic, infographic, logo, design, brand, image, button, icon,
        widget, interface, application, application programming interface (“API”), software, source
        code, object code, digital file, compilation, composition, sound, sound recording, audio
        clip, music, jingle, spoken word, performance, speech, audio-visual work, interactive work,
        game, video game, movie, film, show, video, video clip, commercial, infomercial,
        advertisement, and all other material, feature, or function that may be reproduced on,
        posted to, distributed, delivered, streamed, displayed, or otherwise made available on or
        through the Platform.
        <ol>
          <Styled.SubHeading component="li">You are Responsible for Your Content</Styled.SubHeading>
          <Styled.Text>
            The Company may allow you to post, upload, publish, create on, link to, transmit,
            display, contribute, supply or otherwise make available on or through the Platform
            (hereinafter, “Post”) Content using your Account. You are solely responsible for all
            Content that you individually Post in publicly accessible areas of the Platform and also
            for all Content you transmit to other users, including via chat fields, comment boxes,
            forums, text messages, profiles, and albums. All information you provide in or related
            to the Content will be true, accurate, current, and complete. You may not Post or
            privately transmit (either on or off the Platform) any Content containing offensive,
            inaccurate, incomplete, abusive, obscene, profane, threatening, intimidating, harassing,
            racially offensive, or illegal material or Content that infringes or violates another
            person’s rights (including intellectual property rights, and rights of privacy and
            publicity). Moreover, you agree that all the Content you provide about yourself in your
            personal profile, or in any other area of the Platform, including Content submitted from
            a third party service (e.g., your Facebook account or Google+ account), is and remains
            truthful and accurate, and that you will promptly update any Content you supplied that
            subsequently becomes inaccurate, incomplete, misleading, or false.
          </Styled.Text>
          <Styled.SubHeading component="li">
            Content Rights and Takedown of Infringing Content
          </Styled.SubHeading>
          <Styled.Text>
            You must have full rights to reproduce, distribute, and transmit all Content you ever
            Post to the Platform. You agree, promise, represent, and warrant that the Content you
            Post will not infringe the rights of any third party, and that you will take all steps
            necessary to avoid placing any Content which contains infringing material on the
            Platform. Additionally, to the extent you find any other Content on the Platform to be
            infringing of your intellectual property, your recourse is to submit a notice pursuant
            to our{' '}
            <NextLink href="/" passHref={true}>
              <Styled.CustomLink>Copyright Policy</Styled.CustomLink>
            </NextLink>{' '}
            Copyright Policy with regard to copyright issues or, with regard to any other
            intellectual property issues, write us an email to the following address describing the
            suspected infringement:{' '}
            <NextLink href="mailto:info@nftgenius.com" passHref={true}>
              <Styled.CustomLink>info@nftgenius.com</Styled.CustomLink>
            </NextLink>
            .
          </Styled.Text>
          <Styled.SubHeading component="li">
            Ownership and License of Content You Post
          </Styled.SubHeading>
          <Styled.Text>
            With respect to each piece of Content you Post to the Platform, you will retain any
            ownership rights you are entitled to by applicable law and hereby agree that the Company
            will be automatically granted a worldwide, perpetual, non-exclusive, sublicensable,
            transferrable and royalty-free license to that piece of Content when you first upload it
            onto, transmit through, or create it on or using the Platform. If you later edit,
            modify, or delete any Content you Post (e.g., if you delete or edit a comment), you
            understand that prior versions of such Content will continue to be licensed to and
            freely used by the Company, and may persist in backup copies for a period of time (but
            that following modification or removal, we will not make them available publicly on the
            Platform) or may remain with users who have previously accessed, downloaded, or
            otherwise saved such prior versions of your modified or deleted Content. You also grant
            the Company a worldwide, perpetual, non-exclusive, sublicenseable, transferrable and
            royalty-free license to use your name, biographic information, and photograph or
            likeness in connection with such Content. You acknowledge that we may choose to use and
            reuse the Content in any way, with or without attribution to you, and at our sole
            discretion. Moreover, Commercial Users may be subject to Commercial Terms that contain
            special provisions governing specific types of Content which supersede any inconsistent
            provisions in this Terms of Use; though any Content supplied by a Commercial User that
            is not covered by or subject to the Commercial Terms will be governed by this Terms of
            Use.
          </Styled.Text>
          <Styled.SubHeading component="li">
            Company’s Full Editorial Discretion Over Content
          </Styled.SubHeading>
          <Styled.Text>
            The Company has full discretion and rights to provide, edit, modify, remove, delete, and
            discontinue the availability of any piece or group of Content, in whole or in part, to
            and from the Platform at any time without providing any reason or notice to you;
            including with regard to our own Content and all Content supplied by you, other users,
            and third parties. You understand and agree that the Company may, but is not obligated
            to, monitor or review any Content existing on the Platform, including Content you Post
            and other users’ or third party Content which you find offensive, inaccurate, deceptive,
            harmful or otherwise objectionable. You agree that your use of the Platform is at your
            own risk, and that you will not seek to hold the Company responsible or liable in any
            manner for the Content of other users or third parties.
          </Styled.Text>
        </ol>
      </Styled.Text>
    </>
  );
};

export default SectionFour;
