/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box } from '@mui/material';
import { gqlClient } from '~/config/apollo-client';

import { ProfileBanner, ProfileList, CollectionsFilter, Seo, Modal } from '~/components';

import { CardSkeletonLoader, Divider } from '~/base';
import { GET_NFTS_BY_ADDRESS } from '~/store/server/queries';
import basicAuthCheck from '~/utils/basicAuthCheck';
import { useBreakpoints, useToggle } from '~/hooks';
import axios from 'axios';

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
        const result = await axios.get(`/api/list?address=${address}`);
        const ballerzList = result.data.ballerz?.map(item => ({
          ...item,
          collection_name: 'ballerz',
          collection_picture: '/collections/user.png'
        }));
        const brysonList = result.data.bryson?.map(item => ({
          ...item,
          collection_name: 'bryson',
          collection_picture: '/collections/bryson/avatar.webp',
          name: `${item.name} #${item.id}`
        }));
        const combinedList = ballerzList.concat(brysonList);
        setNftList(combinedList);
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
