import Seo from '~/components/seo';
import Marketplace from '~/components/marketplace';
import { MARKETPLACE_TITLE } from '~/layout/header/constants';

const Browse = () => {
  return (
    <>
      <Seo title={MARKETPLACE_TITLE} />
      <Marketplace />
    </>
  );
};

export default Browse;
