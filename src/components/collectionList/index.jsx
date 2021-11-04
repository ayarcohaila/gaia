import React from 'react';
import { CollectionCard } from '~/components';

const CollectionList = ({ nfts }) => {
  return (
    <>
      {nfts.map(nft => (
        <CollectionCard key={nft.id} data={nft} />
      ))}
    </>
  );
};

export default React.memo(CollectionList);
