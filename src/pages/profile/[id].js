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
import { COLLECTION_LIST_CONFIG, COLLECTIONS_NAME } from '~/../collections_setup';
import formatIpfsImg from '~/utils/formatIpfsImg';
import { ProfileBanner, ProfileList, CollectionsFilter, Seo, Modal } from '~/components';

import * as Styled from '~/styles/profile/styles';

const Profile = ({ userNFTs }) => {
  const router = useRouter();
  const { id: address } = router.query;
  const { isMediumDevice, isExtraSmallDevice } = useBreakpoints();
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
        <CollectionsFilter nftQuantity={userNFTs?.length} enableSearch />
        <Divider hidden={isMediumDevice} customProps={{ marginTop: '24px' }} />
      </Styled.FiltersContainer>
      <Styled.ListWrapper>
        <ProfileList nfts={userNFTs} />
      </Styled.ListWrapper>

      <Modal
        title="Cannot Load Inventory"
        description="Something went wrong while checking your inventory. Please try again later."
        open={openModal}
        onClose={onHandleCloseModal}
        descriptionSx={{ maxWidth: '360px', textAlign: 'center', mb: 0, fontSize: '14px' }}
        titleSx={{ mt: '12vh', mb: '20px' }}
        height="250px"
        mobileHeight={isExtraSmallDevice ? '60vh' : '45vh'}
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

  const collections = Object.values(COLLECTION_LIST_CONFIG).map(item => ({
    collection_id: { _eq: item.id }
  }));

  const { nft: userNFTs } = await gqlClient.request(GET_NFTS_BY_ADDRESS, {
    address: id,
    collections
  });

  const parseDBInput = list => {
    return list.map(nft => {
      const isBallerz = nft.collection_id === COLLECTION_LIST_CONFIG.ballerz.id;
      return {
        ...nft,
        id: nft.template.metadata.id || nft.mint_number,
        name: nft.template.metadata.title,
        imageURL: formatIpfsImg(nft.template.metadata.img),
        videoURL: formatIpfsImg(nft.template.metadata?.video),
        collection_name: isBallerz ? COLLECTIONS_NAME.BALLERZ : COLLECTIONS_NAME.BRYSON,
        collection_picture: isBallerz
          ? COLLECTION_LIST_CONFIG.ballerz.avatar
          : COLLECTION_LIST_CONFIG.bryson.avatar
      };
    });
  };

  return {
    props: { userNFTs: parseDBInput(userNFTs) }
  };
}
export default Profile;
