import { Seo } from '~/components';
import { Marketplace } from '~/components';
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
