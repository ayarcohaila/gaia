//TODO: Uncomment later when adding mail newsletter integration
// import { useEffect, useState } from 'react';
// import usePrevious from '~/hooks/usePrevious';
// import { validateEmail } from '~/utils/validations';
import { Box, Grid, Typography } from '@mui/material';
import { Twitter as TwitterIcon } from '@mui/icons-material';
import { useTheme } from 'styled-components';
import NextLink from 'next/link';
import NextImage from 'next/image';
import { Container } from '@mui/material';

import useBreakpoints from '~/hooks/useBreakpoints';

import * as Styled from './styles';
import { ITEMS, iconStyles } from './constants';

const Footer = () => {
  const { isMediumDevice, isSmallDevice, isLargeDevice } = useBreakpoints();
  const {
    palette: { secondary, grey }
  } = useTheme();

  //TODO: Uncomment later when adding mail newsletter integration
  // const previousEmailValue = usePrevious(email);
  // const [hasError, setHasError] = useState(false);
  // const [email, setEmail] = useState('');
  //  const [isSigned, setIsSigned] = useState(false);
  // const handleSubmit = event => {
  //   event.preventDefault();
  //   const isEmailValid = validateEmail(email);
  //   if (!isEmailValid && !isSigned) {
  //     setHasError(true);
  //     return;
  //   }
  //   setIsSigned(true);
  // };
  // useEffect(() => {
  //   if (hasError && previousEmailValue !== email) {
  //     setHasError(false);
  //   }
  // }, [email, hasError, previousEmailValue]);

  const sidePadding = isLargeDevice ? '80px' : '5.55%';

  return (
    <Grid bgcolor={secondary.main} mt="64px" component="footer" width="100%">
      <Container maxWidth="xll" disableGutters>
        <Grid p={isSmallDevice ? '32px' : `48px ${sidePadding} 40px`} mx="auto" width="100%">
          <Grid container flexWrap="wrap" justifyContent="space-between">
            {
              //TODO: Uncomment later when adding mail newsletter integration
              /* <Box component="form" onSubmit={handleSubmit} width={isMediumDevice ? 'auto' : '35%'}>
            <Typography color="white.main" mb="16px" variant="subtitle1">
              Join our newsletter for the latest drops & updates
            </Typography>
            <Styled.Input
              hasError={hasError}
              isSigned={isSigned}
              endAdornment={<Styled.CustomButton type="submit">Sign Up</Styled.CustomButton>}
              placeholder="Email Address"
              onChange={({ target: { value } }) => setEmail(value)}
              value={isSigned ? 'Confirmed!' : email}
            />
          </Box> */
            }
            <Box width={isMediumDevice ? 'auto' : '35%'}>
              <NextImage
                width={isMediumDevice ? 75 : 102.4}
                height={isMediumDevice ? 29.3 : 40}
                src="/static/img/gaia_logo-white.svg"
                alt="GaiaLogo"
              />
              <Grid alignItems="center" container mt="24px">
                <Styled.CustomLink
                  href="mailto:info@nftgenius.com"
                  target="_blank"
                  underline="none">
                  Contact Us
                </Styled.CustomLink>
                <Styled.CustomLink
                  href="https://twitter.com/gaiamarketplace"
                  mr="18px"
                  target="_blank"
                  underline="none"
                  aria-label="Twitter"
                  rel="noopener noreferrer">
                  <TwitterIcon sx={iconStyles} />
                </Styled.CustomLink>
              </Grid>
            </Box>
            <Grid item mt={isSmallDevice ? '32px' : 0} width={isSmallDevice ? '90%' : '160px'}>
              <Typography color="white.main" mb="12px" letterSpacing="0.2px" variant="subtitle2">
                Policies
              </Typography>
              <NextLink scroll passHref href="/terms-of-use">
                <Styled.CustomLink underline="none">Terms of Use</Styled.CustomLink>
              </NextLink>
              <NextLink scroll passHref href="/privacy-policy">
                <Styled.CustomLink underline="none">Privacy Policy</Styled.CustomLink>
              </NextLink>
              <NextLink scroll passHref href="/copyright-policy">
                <Styled.CustomLink underline="none">Copyright Policy</Styled.CustomLink>
              </NextLink>
            </Grid>
          </Grid>
          <Grid
            container
            flexDirection={isSmallDevice ? 'column' : 'row'}
            justifyContent="space-between"
            mt={isSmallDevice ? '24px' : '108px'}>
            <Box width="170px" my={isSmallDevice ? '24px' : '0'}>
              <Typography color={grey[600]} variant="subtitle2" lineHeight="1.54">
                © 2022 – NFT Genius Inc. All rights reserved.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Footer;
