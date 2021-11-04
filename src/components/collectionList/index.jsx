import React from 'react';
import { CollectionCard } from '~/components';

const CollectionList = ({ nfts, nftFullList }) => {
  return (
    <>
      {nfts.map(nft => (
        <CollectionCard key={nft.id} data={nft} nftFullList={nftFullList} />
      ))}
    </>
  );
};

export default React.memo(CollectionList);
