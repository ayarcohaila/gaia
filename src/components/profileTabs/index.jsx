import React, { memo, useState, useMemo, useEffect } from 'react';
import CollectionsFilter from '~/components/collectionFilters';
import { Box, Button, Grid, Tab, Tabs, Typography, useTheme } from '@mui/material';
import Favorites from './favorites';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { SEO_DATA } from '~/constant';

import useAuth from '~/hooks/useAuth';
import useBreakpoints from '~/hooks/useBreakpoints';

import * as Styled from './styles';
import MyCollection from './my-collection';

function TabPanel(props) {
  const { children, tabValue, index, ...other } = props;

  return (
    <Styled.TabPanel
      role="tabpanel"
      hidden={tabValue !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      <Styled.TabsContentContainer>{children}</Styled.TabsContentContainer>
    </Styled.TabPanel>
  );
}

function a11yProps(index) {
  return {
    id: `offers-tab-${index}`,
    'aria-controls': `offers-tabpanel-${index}`
  };
}

const Card = dynamic(() => import('~/components/card'));

const TABS_MAP = {
  0: 'my-collection',
  1: 'favorites',

  'my-collection': 0,
  favorites: 1
};

const ProfileTabs = ({ nfts }) => {
  const {
    palette: { grey }
  } = useTheme();

  const router = useRouter();
  const { id: address, view: tab } = router.query;
  const { user } = useAuth();

  const { isSmallDevice } = useBreakpoints();

  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    tab && setTabValue(TABS_MAP[tab]);
  }, [tab]);

  const handleTabChange = (_, newValue) => {
    setTabValue(newValue);
    router.replace(`/profile/${address}?view=${TABS_MAP[newValue]}`, undefined, { shallow: true });
  };

  return (
    <>
      <Box
        display="flex"
        alignItems="flex-end"
        justifyContent="center"
        borderBottom={`1px solid ${grey[300]}`}>
        <Tabs value={tabValue} onChange={handleTabChange} aria-label="gaia offers tabs">
          <Styled.StyledTab
            disableRipple
            label="My Collection"
            isSelected={tabValue === 0}
            {...a11yProps(0)}
          />
          <Styled.StyledTab
            disableRipple
            label="Favorites"
            isSelected={tabValue === 1}
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      <TabPanel tabValue={tabValue} index={0}>
        <MyCollection nfts={nfts} />
      </TabPanel>
      <TabPanel tabValue={tabValue} index={1}>
        <Favorites />
      </TabPanel>
    </>
  );
};

export default React.memo(ProfileTabs);
