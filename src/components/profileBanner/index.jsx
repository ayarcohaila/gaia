import React from 'react';
import PropTypes from 'prop-types';

import Address from '~/components/address';
import useBreakpoints from '~/hooks/useBreakpoints';

import * as Styled from './styles';

const ProfileBanner = ({ address, bannerTitle }) => {
  const { isMediumDevice } = useBreakpoints();

  return (
    <Styled.Banner isMobile={isMediumDevice}>
      <Styled.ProfileInfo isMobile={isMediumDevice}>{bannerTitle}</Styled.ProfileInfo>
      {address && (
        <Styled.BoxWallet>
          <Styled.WalletText>Wallet:</Styled.WalletText>
          <Address>{address}</Address>
        </Styled.BoxWallet>
      )}
    </Styled.Banner>
  );
};

ProfileBanner.propTypes = {
  address: PropTypes.string,
  bannerTitle: PropTypes.string
};

ProfileBanner.defaultProps = {
  bannerTitle: 'Profile',
  address: ''
};

export default React.memo(ProfileBanner);
