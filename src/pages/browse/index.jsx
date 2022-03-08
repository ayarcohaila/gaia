import Seo from '~/components/seo';
import Marketplace from '~/components/marketplace';

const Browse = () => {
  return (
    <>
      <Seo />
      <Marketplace />
    </>
  );
};

export async function getServerSideProps() {
  return { notFound: true };
}
export default Browse;
