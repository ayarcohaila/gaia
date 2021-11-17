import { Box, Grid, Link, Typography, useTheme } from '@mui/material';

import { Button } from '~/base';
import { useBreakpoints } from '~/hooks';

import * as Styled from './styles';

const DeChambeauCollectionContent = () => {
  const { isMediumDevice } = useBreakpoints();
  const {
    palette: { grey }
  } = useTheme();

  return (
    <>
      <Styled.Container container>
        <Styled.Image
          alt="DeChambeau vs Koepka poster"
          src="/collections/de-chambeau/poster.webp"
        />
        <Box mx="auto" width={isMediumDevice ? '90%' : '40%'}>
          <Typography fontWeight="normal" mt={isMediumDevice ? 2 : 0} variant="h4">
            Bryson DeChambeau
          </Typography>
          <Typography fontWeight="600" m="8px 0 20px" variant="h3">
            Vegas Baby!
          </Typography>
          <Typography color={grey[700]} variant="h6">
            Lifetime collectible with a once-in-a-lifetime opportunity! Not only is this the first
            in a series of Bryson DeChambeau collectibles on Gaia, but you may also win VIP passes
            for his invite-only event on Friday, November 26 in Las Vegas!
          </Typography>
          <Typography color={grey[700]} my={2} variant="h6">
            Each NFT purchased is an entry to win; multiple NFT purchases allowed. Prize includes
            $2,000 travel voucher.
          </Typography>
          <Typography color={grey[700]} component="span" variant="h6">
            CONTEST ELIGIBLE FOR U.S. RESIDENTS ONLY.{' '}
            <Link color={grey[700]} href="https://brysondechambeau.com" target="_blank">
              See full rules
            </Link>
            .
          </Typography>
          <Button sx={{ display: 'block', fontFamily: 'Work Sans', mt: 2, padding: '16px 40px' }}>
            Purchase • $ 100.00
          </Button>
        </Box>
      </Styled.Container>
      <Grid alignItems="center" container justifyContent="center" width="100%">
        <Styled.BottomImage alt="Las Vegas Sign" src="/collections/de-chambeau/las-vegas.webp" />
      </Grid>
    </>
  );
};

export default DeChambeauCollectionContent;
