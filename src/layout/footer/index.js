/* eslint-disable no-unused-vars */
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
  TextField,
  Typography
} from '@mui/material';
import { useTheme } from 'styled-components';

import Logo from '~/components/logo/Logo';
import { OUR_INVESTORS_ITEMS, OUR_NETWORK_ITEMS } from './constants';
// import useAuth from '~/hooks/useAuth';

// import { URLs } from '../routes/urls';

function Footer() {
  // const { login } = useAuth();
  const {
    palette: { secondary, grey }
  } = useTheme();

  return (
    <Grid bgcolor={secondary.main} component="footer" width="100%">
      <Grid maxWidth="1440px" p="48px 188px 48px 82px" width="100%">
        <Grid>
          <Box>
            <Typography color="white" mb="16px" variant="subtitle2">
              Sign Up to our Newsletter
            </Typography>
            <TextField placeholder="Email address" />
          </Box>

          <List subheader={<ListSubheader>Our network</ListSubheader>}>
            {OUR_NETWORK_ITEMS.map(({ id, label, href }) => (
              <ListItem key={id}>
                <ListItemButton href={href}>
                  <ListItemText>{label}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <List subheader={<ListSubheader>Our network</ListSubheader>}>
            {OUR_INVESTORS_ITEMS.map(({ id, label, href }) => (
              <ListItem key={id}>
                <ListItemButton href={href}>
                  <ListItemText>{label}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid mt="108px">
          <Logo color="white" />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Footer;
