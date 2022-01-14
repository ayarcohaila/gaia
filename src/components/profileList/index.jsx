import React from 'react';
import { Grid, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

import Button from '~/base/button';
import useAuth from '~/hooks/useAuth';

const Card = dynamic(() => import('~/components/card'));

const ProfileList = ({ nfts }) => {
  const router = useRouter();
  const { user } = useAuth();

  const handleClick = () => {
    router.push('/browse');
  };

  return (
    <>
      {nfts.length > 0 ? (
        nfts.map((nft, i) => (
          <Card
            key={i}
            data={nft}
            hasActions={!!user && user.loggedIn && user.addr === router.query.id}
          />
        ))
      ) : (
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ width: '100%', height: 300 }}>
          <Typography variant="body" sx={{ fontSize: '20px' }}>
            There are no Flow NFTs in this wallet from any Gaia collections
          </Typography>
          <Button
            onClick={handleClick}
            sx={{ padding: '16px 40px', letterSpacing: '0.6px', margin: '20px 0 0 0' }}>
            Visit Marketplace
          </Button>
        </Grid>
      )}
    </>
  );
};

export default React.memo(ProfileList);
