/* eslint-disable no-unused-vars */
import { useMemo, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Grid, Box } from '@mui/material';
import { gqlClient } from '~/config/apollo-client';

import { ProfileBanner, ProfileList, CollectionsFilter, Seo } from '~/components';

import { CardSkeletonLoader, Divider } from '~/base';
import { GET_NFTS_BY_ADDRESS } from '~/store/server/queries';
import basicAuthCheck from '~/utils/basicAuthCheck';
import { useBreakpoints } from '~/hooks';
import { useToggle } from '~/hooks';
import { listNfts } from '~/flow/listNfts';
import { Modal } from '~/components';

import * as Styled from '~/styles/profile/styles';

const DEFAULT_LIST_SIZE = 40;
const SET_ID = process.env.NEXT_PUBLIC_BALLERZ_SETID;

const Profile = ({ userNFTs }) => {
  const router = useRouter();
  const { id: address } = router.query;
  const [searchQuery, setSearchQuery] = useState('');
  const { isMediumDevice } = useBreakpoints();
  const [cursor, setCursor] = useState(1);
  const [nftList, setNftList] = useState([]);
  const [openModal, toggleOpenModal] = useToggle();
  const [loading, setLoading] = useState(false);

  const handleLoadMore = () => {
    setCursor(prevState => prevState + 1);
  };

  useEffect(() => {
    const loadNfts = async () => {
      try {
        setLoading(true);
        const data = await listNfts(address, SET_ID);
        setNftList(data);
      } catch {
        setNftList([]);
        toggleOpenModal();
      } finally {
        setLoading(false);
      }
    };
    loadNfts();
  }, []);

  const onHandleCloseModal = () => {
    toggleOpenModal();
    router.push('/ballerz');
  };

  //const cursorLimit = useMemo(() => {
  //  return Math.ceil(userNFTs.length / DEFAULT_LIST_SIZE) - 1;
  //}, [userNFTs]);

  return (
    <Box>
      <Seo title="Profile" />
      <ProfileBanner address={address} />
      <Styled.FiltersContainer>
        <CollectionsFilter nftQuantity={nftList?.length} enableSearch onSearch={setSearchQuery} />
        <Divider hidden={isMediumDevice} customProps={{ marginTop: '24px' }} />
      </Styled.FiltersContainer>
      <Styled.ListWrapper>
        {loading ? (
          new Array(isMediumDevice ? 1 : 5)
            .fill(null)
            .map((_, index) => <CardSkeletonLoader key={index} />)
        ) : (
          <ProfileList nfts={nftList} />
        )}
      </Styled.ListWrapper>
      {/*nftList?.length > 0 && (
        <Grid container justifyContent="center" align="center" sx={{ margin: '32px 0 64px' }}>
          <Styled.BlackButton onClick={handleLoadMore}>Load More</Styled.BlackButton>
        </Grid>
      )*/}
      <Modal
        title="Cannot Load Inventory"
        description="Something went wrong while checking your inventory. Please try again later."
        open={openModal}
        onClose={onHandleCloseModal}
        descriptionSx={{ maxWidth: '360px', textAlign: 'center', mb: 0 }}
        titleSx={{ mt: 0, mb: '20px' }}
        height="250px"
        asset={{}}
      />
    </Box>
  );
};

export async function getServerSideProps(ctx) {
  const {
    req,
    res,
    query: { id }
  } = ctx;
  await basicAuthCheck(req, res);

  const { nft: userNFTs } = await gqlClient.request(GET_NFTS_BY_ADDRESS, { address: id });

  return {
    props: { userNFTs }
  };
}
export default Profile;
