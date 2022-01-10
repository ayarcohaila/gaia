import NextLink from 'next/link';

import * as Styled from '~/styles/privacyPolicy/styles.js';

const SectionOne = () => {
  return (
    <>
      <Styled.Heading component="li">INFORMATION WE COLLECT</Styled.Heading>
      <Styled.Text>
        In this Privacy Policy, “Personally Identifiable Information” (a.k.a. “PII”) means data that
        uniquely identifies or allows for the identification of an individual, whereas “Non-PII”
        means de-identified or anonymized information frequently used for research, statistical or
        aggregate purposes as well as to improve services, products, and user experience. We collect
        your Personally Identifiable Information for the purpose for which you engage us including,
        but not limited to the following:
        <ol>
          <Styled.SubHeading component="li">User-Provided Information</Styled.SubHeading>
          <Styled.Text>
            When you register for a user account to use any part of the Platform (“Account”), we may
            ask you to provide certain information such as your full name, user name, password,
            email address, phone number, age, geography as well as your company name (if any). You
            may also provide additional email address(es) and other information when you send us an
            email or other communication, when you update information previously provided, or at
            other times when accessing the Platform. When you conduct searches and queries on the
            Platform, you provide search terms.
          </Styled.Text>
          <Styled.SubHeading component="li">Third-Party Login Information</Styled.SubHeading>
          <Styled.Text>
            We may provide you the option of accessing and registering for the Platform with your
            user name and password from another service (“Integrated Service”), such as through the
            use of your Facebook, Google+, or other account credentials. By connecting your Account
            with any such Integrated Service, you understand and authorize us to access and store
            the credentials you provide, a unique identifying number or string of characters
            associated with you, your name, email address(es), date of birth, gender, current city,
            address information, profile picture, uniform resource locator (“URL”), and other
            information associated with your Integrated Service account (e.g., Facebook account or
            Google+ account) that you permit the Integrated Service provider to make available to
            us. We suggest you review your Integrated Service privacy settings to understand and
            change the information available to us through Facebook Connect or similar Integrated
            Service portal. You also understand that we may learn information about your affiliation
            with and activity on such Integrated Service(s), as well as about your online behavior,
            activities, tastes, and preferences.
          </Styled.Text>
          <Styled.SubHeading component="li">Automatically-Recognized Information</Styled.SubHeading>
          <Styled.Text>
            We may collect usage information each time you visit any part of our Platform. This
            usage information is made available through your Web browser or mobile device, and may
            include information about your hardware, software, operating system, Web browser,
            connection speed, language, links, images, or other materials you click; your Internet
            protocol address (“IP Address”) and other information that may enable us to approximate
            your location; the pages and contents you view on the Platform; the dates and times you
            access the Platform; the websites and webpages that you visited just before or just
            after accessing the Platform; your advertisement click-through rates, articles you read
            and the time you spent reading them, pictures and videos viewed; and other information
            about how you use the Platform. This information is collected through the use of
            different types of technologies:
            <ol>
              <Styled.SubHeading component="li">Log Files</Styled.SubHeading>
              <Styled.Text>
                As is true with most websites, we gather certain information automatically and store
                it in log files. This information includes IP Addresses as well as browser, internet
                service provider, referring or exit pages, operating system, date or time stamp, and
                click stream data. We generally use this information as we would any usage data, to
                analyze trends, administer and maintain the Platform, or track usage of various
                features within the Platform.
              </Styled.Text>
              <Styled.SubHeading component="li">Cookies</Styled.SubHeading>
              <Styled.Text>
                Another form of “automatically collected” information we may record is information
                stored by “Cookies,” which are small text files containing a string of alphanumeric
                characters. Cookies simplify and authenticate the log-in process for users of the
                Platform, facilitate online transactions, and enable traffic monitoring, among other
                useful purposes. Whenever you access or use the Platform, we may send, receive, and
                store one or more Cookies to your computer. By sending Cookies with values that are
                unique, we may be able to uniquely identify your Web browser or device each time you
                access the Platform. The Cookies we use will receive and record information on our
                server logs from your browser, including your IP address, session time, click-path
                analysis, browsing patterns, and the pages you request. We may use both “Session”
                and “Persistent” Cookies to collect, store, and sometimes track various types of
                information. A Session Cookie is one that is intended to disappear after you close
                your browser. A Persistent Cookie remains after you close your browser (and may be
                used by your browser to identify itself when you later return to the Platform). You
                can disable Cookies and also remove Persistent Cookies from your computer by
                changing your browser settings. Most browsers allow you to either turn off the
                Cookies function or turn on a “Do Not Track” function. However, if you limit, block,
                or remove Cookies, it is possible that some webpages on the Platform may not load
                properly, your access to certain information or content may be denied, and you may
                have to enter information about yourself more than once. Please review the “Help”
                file in your web browser or mobile device to learn the proper way to modify your
                Cookies settings. To learn more about Cookies, or how to control or delete them,
                please visit{' '}
                <NextLink href="http://www.aboutcookies.org" passHref={true}>
                  <Styled.CustomLink target="_blank">http://www.aboutcookies.org</Styled.CustomLink>
                </NextLink>{' '}
                for detailed guidance.
                <ol>
                  <Styled.SubHeading component="li">Google Analytics</Styled.SubHeading>
                  <Styled.Text>
                    We may use a tool called “Google Analytics or similar analytics tool, to collect
                    information about users of our Platform. Google Analytics collects information
                    such as how often users visit our website site, what pages they visit when they
                    do so, and what other sites they used prior to coming to our website. We use the
                    information we get from Google Analytics only to improve our website, including
                    to help customize our website for users. Google Analytics collects only the user
                    ID assigned to you on the date you visit our website, rather than your name or
                    other personally identifiable information. We do not combine the information
                    collected through the use of Google Analytics with personally identifiable
                    information, but if you previously provided us with personally identifiable
                    information, the information collected through Google Analytics may be
                    associated with such information. Although Google Analytics places a Persistent
                    Cookie on your browser to identify you as a unique user the next time you visit
                    our website, the Cookie cannot be used by anyone but Google. Google’s ability to
                    use and share information collected by Google Analytics about your visits to
                    this site is restricted by the{' '}
                    <NextLink href="/" passHref={true}>
                      <Styled.CustomLink target="_blank">
                        Google Analytics Terms of Use
                      </Styled.CustomLink>
                    </NextLink>{' '}
                    and the{' '}
                    <NextLink href="/" passHref={true}>
                      <Styled.CustomLink target="_blank">Google Privacy Policy</Styled.CustomLink>
                    </NextLink>
                    . You can prevent Google Analytics from collecting information about you and
                    recognizing you on return visits to our website by disabling Cookies on your
                    browser. To learn more about this feature from Google, click{' '}
                    <NextLink href="/" passHref={true}>
                      <Styled.CustomLink target="_blank">here</Styled.CustomLink>
                    </NextLink>
                    .
                  </Styled.Text>
                  <Styled.SubHeading component="li">Marketing Cookies</Styled.SubHeading>
                  <Styled.Text>
                    We may partner with third party advertisement networks to either display
                    advertising in our websites and mobile applications or to manage our advertising
                    on other sites or mobile applications. The advertisement network partner may use
                    Cookies and Web beacons to collect usage, navigational or other statistical data
                    about your activities on this and other websites, webpages, applications, and
                    services to provide you targeted advertising based upon your interests, limit
                    the number of times you see the same advertisement on our Platform and to help
                    measure the effectiveness of advertising campaigns. We may also use third
                    parties to collect information that assists us in other methods of “remarketing”
                    our Platform to visitors and users of the Platform, including customized email
                    communications. This information does not include Personally Identifiable
                    Information, though we may reassociate this information with Personal
                    information we have collected when it is received. You have a right to opt out
                    of Marketing Cookies. Please visit the links below to opt-out of cookies from
                    over 50+ major third party behavioral advertising providers:
                    <ul>
                      <Styled.Text component="li" list>
                        Network Advertising Initiative:{' '}
                        <NextLink href="http://www.NetworkAdvertising.org/choices/" passHref={true}>
                          <Styled.CustomLink target="_blank">
                            http://www.NetworkAdvertising.org/choices/
                          </Styled.CustomLink>
                        </NextLink>
                      </Styled.Text>

                      <Styled.Text component="li" list>
                        European Interactive Digital Advertising Alliance:{' '}
                        <NextLink href="http://www.youronlinechoices.eu/" passHref={true}>
                          <Styled.CustomLink target="_blank">
                            http://www.youronlinechoices.eu/
                          </Styled.CustomLink>
                        </NextLink>
                      </Styled.Text>
                      <Styled.Text component="li" list>
                        Network Advertising Initiative: Digital Advertising Alliance:{' '}
                        <NextLink href="http://www.aboutads.info/choices/" passHref={true}>
                          <Styled.CustomLink target="_blank">
                            http://www.aboutads.info/choices/
                          </Styled.CustomLink>
                        </NextLink>
                      </Styled.Text>
                    </ul>
                  </Styled.Text>
                </ol>
              </Styled.Text>
              <Styled.SubHeading component="li">Web Beacons</Styled.SubHeading>
              <Styled.Text>
                We may also employ web beacons to help us better manage content in the Platform by
                informing us what content is effective. Web beacons are tiny graphics with a unique
                identifier, similar in function to Cookies, and are used to track the online
                movements of internet users. Unlike Cookies, which are stored on a user’s computer
                hard drive, web beacons are embedded invisibly on websites. We tie the information
                gathered by web beacons to Personally Identifiable Information we otherwise collect,
                and use them in our HTML-based emails to learn which emails have been opened by
                recipients. This allows us to gauge the effectiveness of our marketing campaigns as
                well as to operate and improve the Platform. You can opt- out of these emails by
                following the unsubscribe instructions within such marketing emails.
              </Styled.Text>
              <Styled.SubHeading component="li">Analytics</Styled.SubHeading>
              <Styled.Text>
                We may use analytics software to allow us to better understand the functionality of
                our Platform on your mobile device or television. This software may record
                information such as how often you use the Platform, the events that occur when you
                use the Platform, your user behavior on the Platform, your aggregated usage of and
                time spent on the Platform, performance data concerning your use of the Platform,
                and where the Platform is accessed from.
              </Styled.Text>
              <Styled.SubHeading component="li">Push Notifications</Styled.SubHeading>
              <Styled.Text>
                We may send you push notifications from time-to-time in order to update you about
                any content, events or promotions that may interest you. If you no longer wish to
                receive these types of communications, you may turn them off at the application or
                operating system level. To ensure you receive proper notifications, we will need to
                collect certain information about your device such as operating system and user or
                device identification information, as well as your responsiveness or desire to
                receive push notifications.
              </Styled.Text>
              <Styled.SubHeading component="li">Geo-Locations</Styled.SubHeading>
              <Styled.Text>
                We may collect your location-based information for the purpose of locating a place
                that you may be searching for in your area. If you no longer wish to allow us to
                track your geo-location information in the mobile application you may turn this off
                at the device level.
              </Styled.Text>
            </ol>
          </Styled.Text>
          <Styled.SubHeading component="li">Usage Data</Styled.SubHeading>
          <Styled.Text>
            Personally Identifiable Information does not include “Usage Data” which we define as
            encoded or anonymized information or aggregated data we collect about a group or
            category of services, features or users which does not contain personally identifying
            information. Usage Data helps us understand trends in usage of the Platform so that we
            can better consider new features or otherwise tailor the Platform. In addition to
            collecting and using Usage Data ourselves, we may share Usage Data with third parties,
            including our customers, partners and service providers, for various purposes, including
            to help us better understand our customers’ needs and improve the Platform as well as
            for advertising and marketing purposes. We do not share Usage Data with third parties in
            a way that would enable them to identify you personally.
          </Styled.Text>
          <Styled.SubHeading component="li">Retention Period</Styled.SubHeading>
          <Styled.Text>
            We will retain your Personally Identifiable Information in a private electronic database
            for the period that we find to be necessary to fulfill the purposes outlined in this
            Privacy Policy, unless we believe a longer retention period is required or permitted by
            law. When your Personally Identifiable Information in our possession is no longer
            needed, we may shred, erase, destroy, or otherwise modify it in whole or part, at our
            sole discretion.
          </Styled.Text>
        </ol>
      </Styled.Text>
    </>
  );
};

export default SectionOne;
