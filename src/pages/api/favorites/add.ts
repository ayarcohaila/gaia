import { gqlClient } from '~/config/apolloClient';
import { ADD_FAVORITE } from '~/store/server/mutations';
import {
  AddFavoriteMutation,
  AddFavoriteMutationVariables
} from '~/store/server/graphql.generated';

export default async function handler(
  req: { body: { nftId: string; address: string } },
  res: {
    status: (arg0: number) => {
      json: {
        (arg0: { id?: string; nft_id?: string; wallet_address?: string; error?: string }): void;
      };
    };
  }
) {
  try {
    const { insert_nft_favorites } = await gqlClient.request<
      AddFavoriteMutation,
      AddFavoriteMutationVariables
    >(ADD_FAVORITE, {
      nftId: req?.body?.nftId,
      address: req?.body?.address
    });
    res.status(200).json({ ...insert_nft_favorites?.returning?.[0] });
  } catch (e) {
    console.error('error', e);
    res.status(500).json({ error: `Can't add NFT in your favorite list` });
  }
}
