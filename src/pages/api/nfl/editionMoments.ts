import type { NextApiRequest, NextApiResponse } from 'next';
import { gqlClient } from '~/config/apolloClient';
import {
  GetMomentsByEditionIdQuery,
  GetMomentsByEditionIdQueryVariables
} from '~/store/server/graphql.generated';
import { GET_MOMENTS_BY_EDITION_ID } from '~/store/server/queries';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { nfl_all_day_moments } = await gqlClient.request<
      GetMomentsByEditionIdQuery,
      GetMomentsByEditionIdQueryVariables
    >(GET_MOMENTS_BY_EDITION_ID, {
      _eq: req?.body?.editionId,
      limit: req?.body?.limit,
      offset: req?.body?.offset
    });

    res.status(200).json({ moments: nfl_all_day_moments });
  } catch (e) {
    console.error('error', e);
    res.status(500).json({ error: `Can't query edition moments List` });
  }
}
