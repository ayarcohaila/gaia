import { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Twitter as TwitterIcon } from '@mui/icons-material';
import { useTheme } from 'styled-components';
import NextLink from 'next/link';
import NextImage from 'next/image';

import useBreakpoints from '~/hooks/useBreakpoints';
import usePrevious from '~/hooks/usePrevious';
import { validateEmail } from '~/utils/validations';

import * as Styled from './styles';
import { ITEMS, iconStyles } from './constants';

const Footer = () => {
  const [email, setEmail] = useState('');
  const previousEmailValue = usePrevious(email);
  const [hasError, setHasError] = useState(false);
  const [isSigned, setIsSigned] = useState(false);
  const { isMediumDevice, isSmallDevice } = useBreakpoints();
  const {
    palette: { secondary, grey }
  } = useTheme();

  const handleSubmit = event => {
    event.preventDefault();
    const isEmailValid = validateEmail(email);
    if (!isEmailValid && !isSigned) {
      setHasError(true);
      return;
    }
    setIsSigned(true);
    //TODO: Register email on newsletter when integrate it
  };

  useEffect(() => {
    if (hasError && previousEmailValue !== email) {
      setHasError(false);
    }
  }, [email, hasError, previousEmailValue]);

  return (
    <Grid bgcolor={secondary.main} component="footer" width="100%">
      <Grid
        maxWidth="1440px"
        p={isSmallDevice ? '32px' : '48px 188px 48px 82px'}
        mx="auto"
        width="100%">
        <Grid container flexWrap="wrap" justifyContent="space-between">
          <Box component="form" onSubmit={handleSubmit} width={isMediumDevice ? 'auto' : '35%'}>
            <Typography color="white" mb="16px" variant="subtitle1">
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
          </Box>
          <Grid item width="160px">
            <Typography
              color="white"
              mb="12px"
              mt={isSmallDevice ? '32px' : '0px'}
              letterSpacing="0.2px"
              variant="subtitle2">
              Our Network
            </Typography>
            {ITEMS.map(({ label, href }) => (
              <Styled.CustomLink
                key={label}
                fontSize="1rem"
                href={href}
                mb="4px"
                target="_blank"
                underline="none">
                {label}
              </Styled.CustomLink>
            ))}
          </Grid>
        </Grid>

        <Grid alignItems="flex-end" container justifyContent="space-between" mt="108px">
          <Box width={isMediumDevice ? 'auto' : '35%'}>
            <NextImage width={90} height={40} src="/static/img/gaia_logo-white.png" />
            <Grid alignItems="center" container mt="24px">
              <Styled.CustomLink
                href="https://nftgenius.com/contact/"
                target="_blank"
                underline="none">
                Contact Us
              </Styled.CustomLink>
              <Styled.CustomLink
                href="https://twitter.com/geniusnft"
                mr="18px"
                target="_blank"
                underline="none">
                <TwitterIcon sx={iconStyles} />
              </Styled.CustomLink>
            </Grid>
          </Box>

          <Box width="160px" my={isSmallDevice ? '24px' : '0'}>
            <Typography color={grey[600]} mb="4px" variant="subtitle2" lineHeight="1.54">
              © 2021 Gaia
            </Typography>
            <Typography color={grey[600]} variant="subtitle2">
              An NFT Genius company
            </Typography>
          </Box>

          <Box width="160px">
            <Styled.CustomLink href="/" target="_blank" underline="none">
              Terms of Use
            </Styled.CustomLink>
            <NextLink href="/privacy-policy">
              <Styled.CustomLink underline="none">Privacy Policy</Styled.CustomLink>
            </NextLink>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
