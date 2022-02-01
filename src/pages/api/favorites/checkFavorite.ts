import { gqlClient } from '~/config/apolloClient';
import { CHECK_FAVORITE_NFT } from '~/store/server/queries';
import {
  CheckFavoriteNftQuery,
  CheckFavoriteNftQueryVariables
} from '~/store/server/graphql.generated';

export default async function handler(
  req: { body: { nftId: string; address: string } },
  res: {
    status: (arg0: number) => {
      json: { (arg0: { id?: string; error?: string }): void; new (): any };
    };
  }
) {
  try {
    const { nft_favorites } = await gqlClient.request<
      CheckFavoriteNftQuery,
      CheckFavoriteNftQueryVariables
    >(CHECK_FAVORITE_NFT, {
      nftId: req?.body?.nftId,
      address: req?.body?.address
    });

    res.status(200).json({ id: nft_favorites[0]?.id });
  } catch (e) {
    console.error('error', e);
    res.status(500).json({ error: `Can't query NFT` });
  }
}
