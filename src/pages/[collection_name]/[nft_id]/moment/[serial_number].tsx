import { Box, Grid, useTheme } from '@mui/material';

import NflDetailsTopSection from '~/components/productDetails/detailsNFL';

import Seo from '~/components/seo';
import { gqlClient } from '~/config/apolloClient';
import useBreakpoints from '~/hooks/useBreakpoints';
import { GET_NFL_EDITION_BY_ID } from '~/store/server/queries';
import { COLLECTIONS_NAME } from '~/../collections_setup';
import {
  GetNflEditionByIdQuery,
  GetNflEditionByIdQueryVariables
} from '~/store/server/graphql.generated';

import { NflDetailsTopSectionProps } from '~/components/productDetails/detailsNFL/types';
import { useRouter } from 'next/router';

export type MomentDetailsPageParams = {
  collection_name: string;
  nft_id: string;
  serial_number: string;
};

const MomentProductDetails = (props: MomentDetailsPageParams) => {
  const {
    query: { serial_number }
  } = useRouter();

  const {
    palette: { grey }
  } = useTheme();
  const { isSmallDevice } = useBreakpoints();

  const title = `MOMENT #${serial_number}`;
  const description = 'NFL Moment';

  const nflProps = props as any as NflDetailsTopSectionProps;

  return (
    <Box bgcolor={grey[200]}>
      <Seo title={`${title} | NFL All Day NFT Collection`} description={description} />
      <Grid m="0 auto" maxWidth="1280px" width={isSmallDevice ? '100%' : '90%'}>
        <NflDetailsTopSection {...nflProps} />
      </Grid>
    </Box>
  );
};

export const getServerSideProps = async ({ params }: { params: MomentDetailsPageParams }) => {
  if (!params) {
    return { notFound: true };
  }

  const { collection_name, nft_id, serial_number } = params;

  if (collection_name !== COLLECTIONS_NAME.NFL) {
    return { notFound: true };
  }

  try {
    if (collection_name === COLLECTIONS_NAME.NFL) {
      const { nfl_all_day_editions } = await gqlClient.request<
        GetNflEditionByIdQuery,
        GetNflEditionByIdQueryVariables
      >(GET_NFL_EDITION_BY_ID, { _eq: nft_id });

      if (!nfl_all_day_editions.length) {
        return { notFound: true };
      }

      return {
        props: {
          edition: nfl_all_day_editions[0],
          serial_number: serial_number
        }
      };
    }
  } catch (error) {
    return { notFound: true };
  }
};

export default MomentProductDetails;
