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

export default Browse;

export const getServerSideProps = async ({ params }) => {
  return { notFound: true };
};
