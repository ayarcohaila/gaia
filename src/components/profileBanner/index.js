import PropTypes from 'prop-types';

import * as Styled from './styles';
import { Address } from '~/components';

const ProfileBanner = ({ address }) => {
  return (
    <Styled.Banner>
      <Styled.ProfileInfo>My Account</Styled.ProfileInfo>
      <Styled.BoxWallet>
        <Styled.WalletText>In Wallet:</Styled.WalletText>
        <Address>{address || 'NO ADDRESS FOUND'}</Address>
      </Styled.BoxWallet>
    </Styled.Banner>
  );
};

ProfileBanner.propTypes = {
  address: PropTypes.string
};

export default ProfileBanner;
