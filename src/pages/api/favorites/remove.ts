import { gqlClient } from '~/config/apolloClient';
import { REMOVE_FAVORITE } from '~/store/server/mutations';
import {
  RemoveFavoriteMutation,
  RemoveFavoriteMutationVariables
} from '~/store/server/graphql.generated';

export default async function handler(
  req: { body: { id: any } },
  res: {
    status: (arg0: number) => {
      json: { (arg0: { id?: string; error?: string }): void; new (): any };
    };
  }
) {
  try {
    await gqlClient.request<RemoveFavoriteMutation, RemoveFavoriteMutationVariables>(
      REMOVE_FAVORITE,
      {
        id: req?.body?.id
      }
    );

    res.status(200).json({ id: '' });
  } catch (e) {
    console.error('error', e);
    res.status(500).json({ error: `Can't remove NFT from your favorite list` });
  }
}
