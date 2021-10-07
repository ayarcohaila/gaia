import { UserOutlined } from '@ant-design/icons';
import { getImageURL } from '~/utils/getImageUrl';
import { ProfileInfo } from './styled';
import { Banner } from './styled';
import Address from '~/components/address/Address';

const ProfileBanner = ({ address, userProfile }) => {
  return (
    <Banner>
      <ProfileInfo
        icon={<UserOutlined />}
        size={{ xs: 100, sm: 100, md: 100, lg: 100, xl: 100, xxl: 120 }}
        src={userProfile?.avatar && getImageURL(userProfile?.avatar)}
      />
      <h3>{userProfile?.name}</h3>
      <Address>{address || 'NO ADDRESS FOUND'}</Address>
    </Banner>
  );
};

export default ProfileBanner;
