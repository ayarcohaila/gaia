import React from 'react';
import { Typography } from '@mui/material';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import { ProfileCard } from '~/components';
import { useAuth } from '~/hooks';

const ProfileList = ({ nfts, refetchNfts }) => {
  const { user } = useAuth();
  const router = useRouter();
  const isMyProfile = router.asPath.includes(user?.addr);

  return (
    <>
      {nfts.length > 0 ? (
        nfts.map(nft => <ProfileCard key={nft.asset_id} data={nft} refetchNfts={refetchNfts} />)
      ) : (
        <Typography mt="42px" variant="body">
          {`Unfortunately, ${
            isMyProfile ? "you don't" : "this profile doesn't"
          } have any nft. You can check the current offers on `}
          <NextLink href="/ballerz">marketplace</NextLink>.
        </Typography>
      )}
    </>
  );
};

export default React.memo(ProfileList);
