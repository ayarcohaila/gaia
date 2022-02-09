import { collection, getFirestore, onSnapshot, query, where } from '@firebase/firestore';
import humps from 'humps';
import { Box, Grid, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import MomentNFLSection from '~/components/productDetails/momentNFL';

import Seo from '~/components/seo';
import { gqlClient } from '~/config/apolloClient';
import useBreakpoints from '~/hooks/useBreakpoints';
import { GET_NFL_MOMENT } from '~/store/server/queries';
import { COLLECTIONS_NAME } from '~/../collections_setup';
import { GetNflMomentQuery, GetNflMomentQueryVariables } from '~/store/server/graphql.generated';

import { mergeDeep } from '~/utils/mergeDeep';
import { useRouter } from 'next/router';

type MomentType = GetNflMomentQuery['nfl_all_day_moments'][number];
export type MomentDetailsPageParams = {
  collection_name: string;
  nft_id: string;
  serial_number: string;
  moment: MomentType;
};

const MomentProductDetails = (props: MomentDetailsPageParams) => {
  const [updatedMoment, setUpdatedMoment] = useState<MomentType>(props.moment);
  const {
    query: { nft_id, serial_number }
  } = useRouter();

  const {
    palette: { grey }
  } = useTheme();
  const { isSmallDevice } = useBreakpoints();

  const title = `MOMENT #${serial_number}`;
  const description = 'NFL Moment';

  useEffect(() => {
    const subscriptions: any = [];

    const db = getFirestore();
    const nftsQuery = query(
      collection(db, 'nflAllDayMoments'),
      where('serialNumber', '==', Number(serial_number)),
      where('edition.editionId', '==', Number(nft_id))
    );

    subscriptions.push(
      onSnapshot(nftsQuery, querySnapshot => {
        const nfts: MomentType[] = [];

        querySnapshot.forEach((doc: any) => {
          nfts.push(doc.data());
        });
        const decamilazedMoment = humps.decamelizeKeys(nfts?.[0]);
        setUpdatedMoment((prevState: MomentType) => ({
          ...mergeDeep(prevState, decamilazedMoment)
        }));
      })
    );

    return () => subscriptions.forEach((unsubscribe: any) => unsubscribe());
  }, [setUpdatedMoment]);

  return (
    <Box bgcolor={grey[200]}>
      <Seo title={`${title} | NFL All Day NFT Collection`} description={description} />
      <Grid m="0 auto" maxWidth="1280px" width={isSmallDevice ? '100%' : '90%'}>
        <MomentNFLSection moment={updatedMoment} />
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
      const { nfl_all_day_moments } = await gqlClient.request<
        GetNflMomentQuery,
        GetNflMomentQueryVariables
      >(GET_NFL_MOMENT, { edition_id: Number(nft_id), serial_number: Number(serial_number) });

      if (!nfl_all_day_moments.length) {
        return { notFound: true };
      }

      return {
        props: {
          moment: nfl_all_day_moments[0]
        }
      };
    }
  } catch (error) {
    return { notFound: true };
  }
};

export default MomentProductDetails;
