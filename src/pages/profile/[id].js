/* eslint-disable no-unused-vars */
import axios from 'axios';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import { useState, useCallback, useEffect } from 'react';

import { useBreakpoints, useToggle } from '~/hooks';
import { gqlClient } from '~/config/apollo-client';
import basicAuthCheck from '~/utils/basicAuthCheck';
import { CardSkeletonLoader, Divider } from '~/base';
import { GET_NFTS_BY_ADDRESS } from '~/store/server/queries';
import { ProfileBanner, ProfileList, CollectionsFilter, Seo, Modal } from '~/components';

import * as Styled from '~/styles/profile/styles';

const Profile = () => {
  const router = useRouter();
  const { id: address } = router.query;
  const { isMediumDevice } = useBreakpoints();
  const [nftList, setNftList] = useState([]);
  const [openModal, toggleOpenModal] = useToggle();
  const [loading, setLoading] = useState(false);

  const loadNfts = useCallback(async () => {
    try {
      setLoading(true);
      const result = await axios.get(`/api/list?address=${address}`);
      const ballerzList = result.data.ballerz?.map(item => ({
        ...item,
        collection_name: 'ballerz',
        collection_picture: '/collections/ballerz/avatar.png',
        name: item?.name?.includes('#') ? item.name : `${item.name} #${item.id}`
      }));
      const brysonList = result.data.bryson?.map(item => ({
        ...item,
        collection_name: 'bryson',
        collection_picture: '/collections/bryson/avatar.webp',
        name: item?.name?.includes('#') ? item.name : `${item.name} #${item.id}`
      }));
      const combinedList = ballerzList.concat(brysonList);
      setNftList(combinedList);
    } catch {
      setNftList([]);
      toggleOpenModal();
    } finally {
      setLoading(false);
    }
  }, [setLoading, setNftList, toggleOpenModal, address]);

  useEffect(() => {
    if (address) {
      loadNfts();
    }
  }, [address]);

  const onHandleCloseModal = () => {
    toggleOpenModal();
    router.push('/ballerz');
  };

  return (
    <Box>
      <Seo title="Profile" />
      <ProfileBanner address={address} />
      <Styled.FiltersContainer>
        <CollectionsFilter nftQuantity={nftList?.length} enableSearch />
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
