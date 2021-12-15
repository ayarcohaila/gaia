import { Box } from '@mui/material';
import { useRouter } from 'next/router';

import { useBreakpoints, useToggle } from '~/hooks';
import { gqlClient } from '~/config/apollo-client';
import basicAuthCheck from '~/utils/basicAuthCheck';
import { Divider } from '~/base';
import { GET_NFTS_BY_ADDRESS } from '~/store/server/queries';
import { COLLECTION_LIST_CONFIG } from '~/../collections_setup';
import formatIpfsImg from '~/utils/formatIpfsImg';
import { ProfileBanner, ProfileList, CollectionsFilter, Seo, Modal } from '~/components';

import * as Styled from '~/styles/profile/styles';

const Profile = ({ userNFTs }) => {
  const router = useRouter();
  const { id: address } = router.query;
  const { isMediumDevice, isExtraSmallDevice } = useBreakpoints();
  const [openModal, toggleOpenModal] = useToggle();

  const onHandleCloseModal = () => {
    toggleOpenModal();
    router.push('/ballerz');
  };

  return (
    <Box>
      <Seo title="Profile" />
      <ProfileBanner address={address} />
      <Styled.FiltersContainer>
        <CollectionsFilter nftQuantity={userNFTs?.length} enableSearch isProfile />
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
      const currentCollection = Object.values(COLLECTION_LIST_CONFIG).find(
        item => item.id === nft.collection_id
      );
      return {
        ...nft,
        id:
          nft.collection_id === COLLECTION_LIST_CONFIG.shareef.id
            ? nft.asset_id
            : nft.template.metadata.id || nft.mint_number,
        name: nft.template.metadata.title,
        imageURL: formatIpfsImg(nft.template.metadata.img),
        videoURL: formatIpfsImg(nft.template.metadata?.video),
        collection_name: currentCollection.collectionName,
        collection_picture: currentCollection.avatar
      };
    });
  };

  return {
    props: { userNFTs: parseDBInput(userNFTs) }
  };
}
export default Profile;
