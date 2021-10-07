import { ProfileInfo } from './styled';
import { Banner } from './styled';
import Address from '~/components/address/Address';
import { Box } from '@mui/system';

const ProfileBanner = ({ address, userProfile }) => {
  return (
    <Banner>
      <Box>
        <ProfileInfo>{userProfile?.name}</ProfileInfo>
      </Box>
      <span>In Wallet:</span>
      <Address>{address || 'NO ADDRESS FOUND'}</Address>
    </Banner>
  );
};

export default ProfileBanner;
