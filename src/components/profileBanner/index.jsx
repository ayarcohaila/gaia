import React from 'react';
import PropTypes from 'prop-types';

import { Address } from '~/components';
import { useBreakpoints } from '~/hooks';

import * as Styled from './styles';

const ProfileBanner = ({ address }) => {
  const { isMediumDevice } = useBreakpoints();

  return (
    <Styled.Banner isMobile={isMediumDevice}>
      <Styled.ProfileInfo isMobile={isMediumDevice}>My Account</Styled.ProfileInfo>
      <Styled.BoxWallet>
        <Styled.WalletText>In Wallet:</Styled.WalletText>
        <Address>{address || 'NO ADDRESS FOUND'}</Address>
      </Styled.BoxWallet>
    </Styled.Banner>
  );
};

ProfileBanner.propTypes = {
  address: PropTypes.string.isRequired
};

export default React.memo(ProfileBanner);
