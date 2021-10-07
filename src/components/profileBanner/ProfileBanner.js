import { ProfileInfo, WalletText, Banner, BoxWallet } from './styled';
import Address from '~/components/address/Address';

const ProfileBanner = ({ address }) => {
  return (
    <Banner>
      <ProfileInfo>My Account</ProfileInfo>
      <BoxWallet>
        <WalletText>In Wallet:</WalletText>
        <Address>{address || 'NO ADDRESS FOUND'}</Address>
      </BoxWallet>
    </Banner>
  );
};

export default ProfileBanner;
