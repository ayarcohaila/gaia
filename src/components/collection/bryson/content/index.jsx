import { Box, Grid, Link, Typography, useTheme } from '@mui/material';

import { Button } from '~/base';
import { VideoPlayer } from '~/components';
import { useBreakpoints } from '~/hooks';

import * as Styled from './styles';

const BrysonCollectionContent = () => {
  const { isMediumDevice, isSmallDevice } = useBreakpoints();
  const {
    palette: { grey }
  } = useTheme();

  return (
    <>
      <Styled.Container container>
        <VideoPlayer src="https://images.ongaia.com/ipfs/QmeAtfCsWmqdEiXjYy98aTuZcRyiArKqrDm89McinZaitW" />
        <Box mx="auto" width={isMediumDevice ? '90%' : '40%'}>
          <Typography fontWeight="normal" mt={isMediumDevice ? 2 : 0} variant="h4">
            Bryson DeChambeau
          </Typography>
          <Typography fontWeight="600" m="8px 0 20px" variant="h3">
            Vegas Baby!
          </Typography>
          <Typography color={grey[700]} variant="h6">
            One lucky winner will receive a trip for 2 to join Bryson DeChambeau at the Wynn Golf
            Course in Las Vegas, as he takes on Brooks Koepka in the ultimate showdown!
          </Typography>
          <Typography color={grey[700]} my={3} variant="h6">
            This is also the first in a series of Bryson DeChambeau collectibles on Gaia -- with
            ownership comes additional rewards and access in future drops.
          </Typography>
          <Typography color={grey[700]} mb={3} variant="h6">
            Each NFT purchased is an entry to win; multiple NFT purchases allowed. Prize includes
            $2,000 travel voucher.
          </Typography>
          <Typography color={grey[700]} component="span" variant="h6">
            CONTEST ELIGIBLE FOR U.S. RESIDENTS ONLY.{' '}
            <Link color={grey[700]} href="/collections/bryson/rules.pdf" target="_blank">
              See full rules
            </Link>
            .
          </Typography>
          <Button
            sx={{
              display: 'block',
              fontFamily: 'Work Sans',
              margin: isSmallDevice ? '0 auto' : '0',
              mt: 2,
              padding: '16px 40px'
            }}>
            Purchase • $ 100.00
          </Button>
          <Typography color={grey[600]} fontWeight="normal" mt={2} variant="subtitle1">
            Winner will be selected on November 22. Event will be held on November 26 in Las Vegas,
            NV. By purchasing, you agree to be contacted by Dapper Labs if you are selected as the
            winning entry.
          </Typography>
        </Box>
      </Styled.Container>
      <Grid alignItems="center" container justifyContent="center" width="100%">
        <Styled.BottomImage alt="Las Vegas Sign" src="/collections/bryson/las-vegas.webp" />
      </Grid>
    </>
  );
};

export default BrysonCollectionContent;
