import React from 'react';
import { ProfileCard } from '~/components';

const ProfileList = ({ nfts }) => {
  return (
    <>
      {nfts.map(nft => (
        <ProfileCard key={nft.asset_id} data={nft} />
      ))}
    </>
  );
};

export default React.memo(ProfileList);
