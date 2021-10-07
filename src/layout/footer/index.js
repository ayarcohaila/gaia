import { Box, Grid, Typography } from '@mui/material';
import { Instagram as InstagramIcon, Twitter as TwitterIcon } from '@mui/icons-material';
import { useTheme } from 'styled-components';
import { SearchInput } from '~/components';

import Logo from '~/components/logo/Logo';
import useBreakpoints from '~/hooks/useBreakpoints';

import * as Styled from './styles';
import { COLUMNS, iconStyles } from './constants';

function Footer() {
  const { isMediumDevice } = useBreakpoints();
  const {
    palette: { secondary, grey }
  } = useTheme();

  return (
    <Grid bgcolor={secondary.main} component="footer" width="100%">
      <Grid maxWidth="1440px" p="48px 188px 48px 82px" width="100%">
        <Grid container flexWrap="wrap" justifyContent="space-between">
          <Box width={isMediumDevice ? 'auto' : '35%'}>
            <Typography color="white" mb="16px" variant="subtitle2">
              Sign Up to our Newsletter
            </Typography>
            <SearchInput />
          </Box>
          {COLUMNS.map(({ title, items }) => (
            <Grid key={title} item>
              <Typography color="white" mb="12px" variant="subtitle2">
                {title}
              </Typography>
              {items.map(({ label, href }) => (
                <Styled.CustomLink key={label} href={href} mb="4px" target="_blank">
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
              <Styled.CustomLink href="#" target="_blank">
                Contact Us
              </Styled.CustomLink>
              <Styled.CustomLink href="#" target="_blank">
                <TwitterIcon sx={iconStyles} />
              </Styled.CustomLink>
              {/* TODO: Change to Discord icon */}
              <Styled.CustomLink href="#" target="_blank">
                <TwitterIcon sx={iconStyles} />
              </Styled.CustomLink>
              <Styled.CustomLink href="#" target="_blank">
                <InstagramIcon sx={iconStyles} />
              </Styled.CustomLink>
            </Grid>
          </Box>

          <Box>
            <Typography color={grey[600]} mb="4px" variant="body1">
              © 2021 Gaia
            </Typography>
            <Typography color={grey[600]} variant="body1">
              An NFT Genius company
            </Typography>
          </Box>

          <Box>
            <Styled.CustomLink href="#" target="_blank">
              Terms of Use
            </Styled.CustomLink>
            <Styled.CustomLink href="#" target="_blank">
              Privacy Policy
            </Styled.CustomLink>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Footer;
