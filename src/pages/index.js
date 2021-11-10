import { MostViewed } from '~/components';
import { gqlClient } from '~/config/apollo-client';
import { ballerzCollection } from '~/config/config';
import { GET_BALLERZ_NFTS_FOR_SALE } from '~/store/server/queries';

const BALLERZ_ID = ballerzCollection;

const Home = ({ nfts }) => {
  return (
    <>
      <MostViewed list={nfts} />
    </>
  );
};

export async function getServerSideProps() {
  const { nft_sale_offer } = await gqlClient.request(GET_BALLERZ_NFTS_FOR_SALE, { id: BALLERZ_ID });

  return {
    props: { nfts: nft_sale_offer?.slice(0, 10) }
  };
}
export default Home;
