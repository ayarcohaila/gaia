import type { NextApiRequest, NextApiResponse } from 'next';
import { gqlClient } from '~/config/apolloClient';
import { GET_NFL } from '~/store/server/queries';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const playFilters = {
    ...(req?.body?.player_name && { player_full_name: { _eq: req?.body?.player_name } }),
    ...(req?.body?.team_name && { team_name: { _eq: req?.body?.team_name } })
  };

  const setFilters = {
    ...(req?.body?.set_name && { set_id: { _eq: Number(req?.body?.set_name) } })
  };

  const playerPositions = req?.body?.player_position
    ? req?.body?.player_position.map((item: string) => ({
        player_position: {
          _eq: item
        }
      }))
    : {};
  const playTypes = req?.body?.play_type
    ? req?.body?.play_type.map((item: string) => ({
        play_type: {
          _eq: item
        }
      }))
    : {};

  const tier = req?.body?.tier
    ? req?.body?.tier.map((item: string) => ({
        tier: {
          _eq: item
        }
      }))
    : {};

  const orderBy: { [key: string]: 'asc' | 'desc' }[] = req?.body?.orderBy ? [req.body.orderBy] : [];

  orderBy.push({ edition_id: 'asc' });

  try {
    const { nfl_all_day_editions, nfl_all_day_editions_aggregate } = await gqlClient.request(
      GET_NFL,
      {
        orderBy: orderBy,
        offset: req?.body?.offset,
        limit: req?.body?.limit,
        plays: {
          _and: {
            ...playFilters,
            _or: { _and: { _or: playerPositions, _and: { _or: playTypes } } }
          }
        },
        sets: setFilters,
        tier: tier
      }
    );

    res.status(200).json({
      nfts: nfl_all_day_editions,
      marketCount: nfl_all_day_editions_aggregate.aggregate.count
    });
  } catch (e) {
    console.error('error', e);
    res.status(500).json({ error: `Can't query NFL List` });
  }
}
