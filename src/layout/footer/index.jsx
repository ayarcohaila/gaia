import { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Instagram as InstagramIcon, Twitter as TwitterIcon } from '@mui/icons-material';
import { useTheme } from 'styled-components';

import Logo from '~/components/logo/Logo';
import useBreakpoints from '~/hooks/useBreakpoints';
import usePrevious from '~/hooks/usePrevious';
import { validateEmail } from '~/utils/validations';

import * as Styled from './styles';
import { COLUMNS, iconStyles } from './constants';

const Footer = () => {
  const [email, setEmail] = useState('');
  const previousEmailValue = usePrevious(email);
  const [hasError, setHasError] = useState(false);
  const [isSigned, setIsSigned] = useState(false);
  const { isMediumDevice } = useBreakpoints();
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
      <Grid maxWidth="1440px" p="48px 188px 48px 82px" mx="auto" width="100%">
        <Grid container flexWrap="wrap" justifyContent="space-between">
          <Box component="form" onSubmit={handleSubmit} width={isMediumDevice ? 'auto' : '35%'}>
            <Typography color="white" mb="16px" variant="subtitle2">
              Sign Up to our Newsletter
            </Typography>
            <Styled.Input
              hasError={hasError}
              endAdornment={<Styled.CustomButton type="submit">Sign Up</Styled.CustomButton>}
              placeholder="Email Address"
              onChange={({ target: { value } }) => setEmail(value)}
              value={isSigned ? 'You’re signed in!' : email}
            />
          </Box>
          {COLUMNS.map(({ title, items }) => (
            <Grid key={title} item width="160px">
              <Typography color="white" mb="12px" variant="subtitle2">
                {title}
              </Typography>
              {items.map(({ label, href }) => (
                <Styled.CustomLink
                  key={label}
                  href={href}
                  mb="4px"
                  target="_blank"
                  underline="none">
                  {label}
                </Styled.CustomLink>
              ))}
            </Grid>
          ))}
        </Grid>

        <Grid alignItems="flex-end" container justifyContent="space-between" mt="108px">
          {/* TODO: Set correct links for this section */}
          <Box width={isMediumDevice ? 'auto' : '35%'}>
            {/* TODO: Change to correct logo */}
            <Logo color="white" />
            <Grid alignItems="center" container mt="24px">
              <Styled.CustomLink href="#" target="_blank" underline="none">
                Contact Us
              </Styled.CustomLink>
              <Styled.CustomLink href="#" mr="18px" target="_blank" underline="none">
                <TwitterIcon sx={iconStyles} />
              </Styled.CustomLink>
              <Styled.CustomLink href="#" target="_blank" underline="none">
                <Styled.DiscordIcon alt="Gaia Discord" src="/icons/discord.svg" />
              </Styled.CustomLink>
              <Styled.CustomLink href="#" target="_blank" underline="none">
                <InstagramIcon sx={iconStyles} />
              </Styled.CustomLink>
            </Grid>
          </Box>

          <Box width="160px">
            <Typography color={grey[600]} mb="4px" variant="body1">
              © 2021 Gaia
            </Typography>
            <Typography color={grey[600]} variant="body1">
              An NFT Genius company
            </Typography>
          </Box>

          <Box width="160px">
            <Styled.CustomLink href="#" target="_blank" underline="none">
              Terms of Use
            </Styled.CustomLink>
            <Styled.CustomLink href="#" target="_blank" underline="none">
              Privacy Policy
            </Styled.CustomLink>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
