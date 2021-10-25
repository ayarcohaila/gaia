import React from 'react';
import { ProfileCard } from '~/components';
import { Typography } from '@mui/material';
import NextLink from 'next/link';

const ProfileList = ({ nfts }) => {
  return (
    <>
      {nfts.length > 0 ? (
        nfts.map(nft => <ProfileCard key={nft.asset_id} data={nft} />)
      ) : (
        <Typography mt="42px" variant="body">
          Unfortunately, this profile doesn&apos;t have any nft. You can check the current offers on{' '}
          <NextLink href="/ballerz">marketplace</NextLink>.
        </Typography>
      )}
    </>
  );
};

export default React.memo(ProfileList);
