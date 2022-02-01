import { gqlClient } from '~/config/apolloClient';
import { GET_FAVORITE_LIST } from '~/store/server/queries';
import {
  GetFavoriteListQuery,
  GetFavoriteListQueryVariables
} from '~/store/server/graphql.generated';

type NftList = GetFavoriteListQuery['nft_favorites'][number]['nft'][];
export default async function handler(
  req: { body: { address: string } },
  res: {
    status: (arg0: number) => {
      json: {
        (arg0: { favoriteList?: NftList; error?: string }): void;
      };
    };
  }
) {
  try {
    const { nft_favorites } = await gqlClient.request<
      GetFavoriteListQuery,
      GetFavoriteListQueryVariables
    >(GET_FAVORITE_LIST, {
      address: req?.body?.address
    });

    const parsedList = nft_favorites?.map(item => item.nft);

    res.status(200).json({ favoriteList: parsedList });
  } catch (e) {
    console.error('error', e);
    res.status(500).json({ error: `Can't get your favorite list` });
  }
}
