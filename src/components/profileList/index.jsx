import React from 'react';
import { Grid, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

import useAuth from '~/hooks/useAuth';

const Card = dynamic(() => import('~/components/card'));

const ProfileList = ({ nfts }) => {
  const { user } = useAuth();
  const router = useRouter();

  return (
    <>
      {nfts.map((nft, i) => (
        <Card
          key={i}
          data={nft}
          hasActions={!!user && user.loggedIn && user.addr === router.query.id}
        />
      ))}
    </>
  );
};

export default React.memo(ProfileList);
