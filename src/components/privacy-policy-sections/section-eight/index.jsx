import NextLink from 'next/link';
import { Table, TableHead, TableBody } from '@mui/material';
import * as Styled from '~/styles/privacy-policy/styles.js';

const SectionEight = () => {
  return (
    <>
      <Styled.Heading component="li">YOUR PRIVACY RIGHTS UNDER LAW</Styled.Heading>
      <Styled.Text>
        Our Platform is hosted and operated in the State of California, U.S.A. (“California”). Any
        Personally Identifiable Information will be gathered, stored, and processed through the
        Platform in California and solely in accordance with U.S.A. federal and California law. By
        using the Platform (including but not limited to our website(s) and mobile application(s) or
        otherwise providing us with Personal information, you consent to such gathering, storage,
        and processing of Personally Identifiable Information. BEWARE THAT U.S. FEDERAL LAW AND
        CALIFORNIA LAW MAY NOT PROVIDE THE SAME LEVELS OF PROTECTION AS THE DATA PROTECTION, DATA
        PRIVACY, OR DATA SECURITY LAWS OF YOUR OWN COUNTRY, STATE, OR LOCATION. Except for the
        Privacy Shield Notice for Users in the European set forth below, no other laws are intended
        to govern or have any effect regarding the use of your Personally Identifiable Information.
        Your use of the Platform or submission of any Personally Identifiable Information
        constitutes your consent to the transfer of your Personally Identifiable Information outside
        of your location, as well as your stipulation to the personal jurisdiction of California and
        U.S.A. federal and California laws as stated in the{' '}
        <NextLink href="/" passHref={true}>
          <Styled.CustomLink target="_blank">Terms of Use</Styled.CustomLink>
        </NextLink>
        .
        <ol>
          <Styled.SubHeading component="li">Exception for California Residents</Styled.SubHeading>
          <Styled.Text>
            As an exception to the foregoing, under California’s “Shine the Light” law, California
            residents who provide Personally Identifiable Information in obtaining products or
            services for personal, family, or household use are entitled to request from us, once a
            calendar year, information about the user information we shared, if any, with other
            third parties and businesses for their own direct marketing uses. If applicable, this
            information would include the categories of customer information and the names and
            addresses of those businesses with which we shared customer information for the
            immediately prior calendar year (e.g., residents who make the request in 2015 will
            receive information regarding 2014 sharing activities). If you are a California resident
            and wish to obtain this information, please e-mail us{' '}
            <NextLink href="mailto: privacy@nftgenius.com" passHref={true}>
              <Styled.CustomLink>privacy@nftgenius.com</Styled.CustomLink>
            </NextLink>{' '}
            with “Request for California Privacy Information” in the subject line and body of your
            message. We will respond with the requested information to the same e-mail address from
            which you sent the request. Please be aware that not all information sharing is covered
            by the “Shine the Light” requirements and only information on covered sharing will be
            included in our response. We will not accept requests via the telephone or by facsimile,
            and we are not responsible for notices that are not labeled properly, delivered
            properly, or that do not have the complete information as requested herein.
          </Styled.Text>
          <Styled.SubHeading component="li">
            Summary of Your Rights if You are a Resident of California or Nevada
          </Styled.SubHeading>
          <Styled.Text>
            Notwithstanding the foregoing, the following applies to California residents:
          </Styled.Text>
          <Table sx={{ margin: '20px 0px 48px' }}>
            <TableHead>
              <Styled.CustomRow>
                <Styled.CustomCell align="center" colSpan={2}>
                  For California Residents
                </Styled.CustomCell>
              </Styled.CustomRow>
            </TableHead>
            <TableBody>
              <Styled.CustomRow>
                <Styled.CustomCell sx={{ width: '250px' }}>
                  You have the right to know what information is being collected about you and to
                  access that data
                </Styled.CustomCell>
                <Styled.CustomCell>
                  We collect the following data:
                  <ul>
                    <Styled.Text component="li" list>
                      name;
                    </Styled.Text>
                    <Styled.Text component="li" list>
                      email address;
                    </Styled.Text>
                    <Styled.Text component="li" list>
                      mailing address;
                    </Styled.Text>
                    <Styled.Text component="li" list>
                      telephone number;
                    </Styled.Text>
                    <Styled.Text component="li" list>
                      username;
                    </Styled.Text>
                    <Styled.Text component="li" list>
                      payment details;
                    </Styled.Text>
                    <Styled.Text component="li" list>
                      IP address;
                    </Styled.Text>
                    <Styled.Text component="li" list>
                      device identifiers;
                    </Styled.Text>
                    <Styled.Text component="li" list>
                      browser information; and
                    </Styled.Text>
                    <Styled.Text component="li" list>
                      cookie data (as explained in the Cookie Policy).
                    </Styled.Text>
                  </ul>
                  <Styled.Text>
                    Please e-mail privacy@nftgenius.com to access your collected data
                  </Styled.Text>
                </Styled.CustomCell>
              </Styled.CustomRow>
              <Styled.CustomRow>
                <Styled.CustomCell sx={{ width: '250px' }}>
                  You have the right to know what data is sold or shared and to whom.
                </Styled.CustomCell>
                <Styled.CustomCell>
                  We share the following data with our analytics partner, Google Analytics:
                </Styled.CustomCell>
              </Styled.CustomRow>
              <Styled.CustomRow>
                <Styled.CustomCell sx={{ width: '250px' }}>
                  You have the right to correct personal data.
                </Styled.CustomCell>
                <Styled.CustomCell>
                  Please email privacy@nftgenius.com to delete your personal data.
                </Styled.CustomCell>
              </Styled.CustomRow>
              <Styled.CustomRow>
                <Styled.CustomCell sx={{ width: '250px' }}>
                  You have the right to delete personal data.
                </Styled.CustomCell>
                <Styled.CustomCell>
                  Please email privacy@nftgenius.com to delete your personal data.
                </Styled.CustomCell>
              </Styled.CustomRow>
              <Styled.CustomRow>
                <Styled.CustomCell sx={{ width: '250px' }}>
                  You have the right to data portability.
                </Styled.CustomCell>
                <Styled.CustomCell>
                  Please email privacy@nftgenius.com to exercise your right of data portability.
                </Styled.CustomCell>
              </Styled.CustomRow>
              <Styled.CustomRow>
                <Styled.CustomCell sx={{ width: '250px' }}>
                  You have the right to opt out of sale or sharing of your data.
                </Styled.CustomCell>
                <Styled.CustomCell>
                  You can opt out of sale or sharing by pressing the “opt out button.”
                </Styled.CustomCell>
              </Styled.CustomRow>
              <Styled.CustomRow>
                <Styled.CustomCell sx={{ width: '250px' }}>
                  You have the right to limit the use and disclosure of sensitive personal
                  information
                </Styled.CustomCell>
                <Styled.CustomCell>
                  Please email privacy@nftgenius.com with your limitation request
                </Styled.CustomCell>
              </Styled.CustomRow>
            </TableBody>
          </Table>

          <Styled.Text>
            Notwithstanding the foregoing, the following applies to Nevada residents:
          </Styled.Text>

          <Table sx={{ margin: '20px 0px 48px' }}>
            <TableHead>
              <Styled.CustomRow>
                <Styled.CustomCell align="center" colSpan={2}>
                  <Styled.Text>For Nevada Residents</Styled.Text>
                </Styled.CustomCell>
              </Styled.CustomRow>
            </TableHead>
            <TableBody>
              <Styled.CustomRow>
                <Styled.CustomCell>
                  You have the right to know what information is being collected about you
                </Styled.CustomCell>
                <Styled.CustomCell>
                  We collect
                  <br />
                  name;
                  <br />
                  email address;
                  <br />
                  mailing address;
                  <br />
                  telephone number;
                  <br />
                  username;
                  <br />
                  payment details;
                  <br />
                  IP address;
                  <br />
                  device identifiers;
                  <br />
                  browser information; and
                  <br />
                  cookie data (as explainedin the Cookie Policy).
                </Styled.CustomCell>
              </Styled.CustomRow>
              <Styled.CustomRow>
                <Styled.CustomCell sx={{ width: '50%' }}>
                  You have the right to correct the collected data
                </Styled.CustomCell>
                <Styled.CustomCell sx={{ width: '50%' }}>
                  Please email privacy@nftgenius.com to correct your data.
                </Styled.CustomCell>
              </Styled.CustomRow>
              <Styled.CustomRow>
                <Styled.CustomCell sx={{ width: '50%' }}>
                  Please email privacy@nftgenius.com to correct your data.
                </Styled.CustomCell>
                <Styled.CustomCell sx={{ width: '50%' }}>
                  You can opt out of data sharing by pressing “button”
                </Styled.CustomCell>
              </Styled.CustomRow>
            </TableBody>
          </Table>
        </ol>
      </Styled.Text>
    </>
  );
};

export default SectionEight;
