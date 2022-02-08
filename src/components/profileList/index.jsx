import React, { useEffect, useMemo, useState } from 'react';
import {
  Box,
  Tabs,
  Grid,
  Typography,
  useTheme,
  CircularProgress,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Stack
} from '@mui/material';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

import * as Styled from './styles';

import useBreakpoints from '~/hooks/useBreakpoints';

import Button from '~/base/button';

import CardNFL from '~/components/cards/cardNFL';
import { useAuthContext } from '~/providers/AuthProvider';
import { collection, getFirestore, onSnapshot, orderBy, query, where } from '@firebase/firestore';
import CheckboxCard from '~/components/filters/filtersNfl/checkboxCard';

function TabPanel(props) {
  const { children, tabValue, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={tabValue !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {tabValue === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `offers-tab-${index}`,
    'aria-controls': `offers-tabpanel-${index}`
  };
}

const Card = dynamic(() => import('~/components/cards/cardDefault'));

const ProfileList = ({ nfts, onQuantityChanged }) => {
  const {
    palette: { grey }
  } = useTheme();

  const router = useRouter();
  const { user, firebaseUser } = useAuthContext();

  const [tabValue, setTabValue] = useState(0);
  const [nflUserNFTs, setNflUserNFTs] = useState(undefined);
  const [view, setView] = useState('all');

  const { isSmallDevice } = useBreakpoints();

  useEffect(() => {
    const subscriptions = [];

    if (router.query.id) {
      const db = getFirestore();
      const nftsQuery = query(
        collection(db, 'nflAllDayMoments'),
        where('owner', '==', router.query.id)
      );

      subscriptions.push(
        onSnapshot(nftsQuery, querySnapshot => {
          const nfts = [];

          querySnapshot.forEach(doc => {
            nfts.push(doc.data());
          });

          setNflUserNFTs(nfts.sort((a, b) => b.acquiredAt ?? 0 - a.acquiredAt ?? 0));
          onQuantityChanged(nfts.length);
        })
      );
    } else {
      setNflUserNFTs(undefined);
      onQuantityChanged(0);
    }

    return () => subscriptions.forEach(unsubscribe => unsubscribe());
  }, [setNflUserNFTs, router.query.id]);

  const filteredNfts = useMemo(() => {
    return nflUserNFTs?.filter(
      n =>
        view === 'all' ||
        (view === 'forSale' && n.activeListingPrice) ||
        (view === 'notForSale' && !n.activeListingPrice)
    );
  }, [nflUserNFTs, view]);

  const handleClickNFL = () => {
    router.push('/');
  };

  const handleTabChange = (_, newValue) => {
    setTabValue(newValue);
  };

  return (
    <>
      <Box borderRadius="20px" marginY="24px" width={isSmallDevice ? 'auto' : '100%'}>
        <Box
          display="flex"
          alignItems="flex-end"
          justifyContent="center"
          borderBottom={`1px solid ${grey[300]}`}>
          <Tabs value={tabValue} onChange={handleTabChange} aria-label="gaia offers tabs">
            <Styled.StyledTab
              disableRipple
              label="NFL All Day"
              isSelected={tabValue === 0}
              {...a11yProps(0)}
            />
            <Styled.StyledTab
              disableRipple
              label="Ballerz/Bryson/Shareef"
              isSelected={tabValue === 1}
              {...a11yProps(1)}
            />
          </Tabs>
        </Box>
        <TabPanel tabValue={tabValue} index={0}>
          {filteredNfts === undefined ? (
            <CircularProgress />
          ) : filteredNfts.length > 0 ? (
            <>
              <FormGroup>
                <Stack direction="row" spacing={1} marginLeft={5}>
                  <FormControlLabel
                    control={<Checkbox checked={view === 'all'} onClick={() => setView('all')} />}
                    label="View All"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={view === 'forSale'} onClick={() => setView('forSale')} />
                    }
                    label="For Sale"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={view === 'notForSale'}
                        onClick={() => setView('notForSale')}
                      />
                    }
                    label="Not For Sale"
                  />
                </Stack>
              </FormGroup>
              <Styled.GridRenderList>
                {filteredNfts.map((nflNfts, i) => (
                  <CardNFL
                    key={i}
                    data={nflNfts}
                    collectionName={'nfl-all-day'}
                    hasActions={true}
                  />
                ))}
              </Styled.GridRenderList>
            </>
          ) : (
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
              sx={{ width: '100%', height: 300 }}>
              <Typography variant="body" sx={{ fontSize: '20px' }}>
                There are no NFL All Day NFTs in this wallet
              </Typography>
              <Button
                data-cy="button-visit-marketplace"
                onClick={handleClickNFL}
                sx={{ padding: '16px 40px', letterSpacing: '0.6px', margin: '20px 0 0 0' }}>
                Visit Home
              </Button>
            </Grid>
          )}
        </TabPanel>
        <TabPanel tabValue={tabValue} index={1}>
          {nfts.length > 0 ? (
            <Styled.GridRenderList>
              {nfts.map((nft, i) => (
                <Card
                  key={i}
                  data={nft}
                  hasActions={!!user && user.loggedIn && user.addr === router.query.id}
                />
              ))}
            </Styled.GridRenderList>
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
                data-cy="button-visit-marketplace"
                onClick={handleClickNFL}
                sx={{ padding: '16px 40px', letterSpacing: '0.6px', margin: '20px 0 0 0' }}>
                Visit Home
              </Button>
            </Grid>
          )}
        </TabPanel>
      </Box>
    </>
  );
};

export default React.memo(ProfileList);
