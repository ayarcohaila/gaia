import * as styled from './styled';
import { Address } from '~/components';

const ProfileBanner = ({ address }) => {
  return (
    <styled.Banner>
      <styled.ProfileInfo>My Account</styled.ProfileInfo>
      <styled.BoxWallet>
        <styled.WalletText>In Wallet:</styled.WalletText>
        <Address>{address || 'NO ADDRESS FOUND'}</Address>
      </styled.BoxWallet>
    </styled.Banner>
  );
};

export default ProfileBanner;
