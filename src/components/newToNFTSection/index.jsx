import { Grid, Typography, Box, useMediaQuery } from '@mui/material';
import NewToNFTCard from '~/components/newToNFTCard';
import { hasBrowse } from '~/config/config';

import * as Styled from './styled';
import useBreakpoints from '~/hooks/useBreakpoints';
import CardFilled from '../cardFilled';
import CardFill from '../cardFilled/cardFill';
import { COMING_STATUS } from 'collections_setup';
import NFTGeniusCard from './nftGeniusCard';

export default function NewToNFTSection(props) {
  const { collections } = props;
  const { isMediumDevice } = useBreakpoints();
  const isExtraLarge = useMediaQuery(theme => theme.breakpoints.up('xl'));
  return (
    <Styled.Container>
      <Styled.SectionTitle>Other Collections</Styled.SectionTitle>
      <Grid container rowSpacing="20px" spacing="16px" justifyContent="center">
        <Grid item xs={12} sm={12} xl={6} order={isExtraLarge ? 0 : 99}>
          <NFTGeniusCard />
        </Grid>
        {collections?.map((collection, index) => {
          return (
            <Grid key={index} item width="100%" xs={12} sm={6} xl={3}>
              <Box position="relative" height="360px">
                <CardFilled shadow={false} card={collection}>
                  <CardFill card={collection}></CardFill>
                </CardFilled>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Styled.Container>
  );
}
