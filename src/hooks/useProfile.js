import { useState, useEffect } from 'react';
import { getProfile } from '~/flow/getProfile';
import { checkSetup } from '~/flow/checkSetup';

import isInitialized from '~/flow/isInitialized';
import { checkStorefrontSetup } from '~/flow/checkStorefrontSetup';

export default function useProfile(address) {
  const [userProfile, setUserProfile] = useState(null);

  const initialized = async () => {
    if (!address) {
      return false;
    }

    return isInitialized(address);
  };
  const hasSetup = async () => {
    if (!address) {
      return false;
    }
    let nftSetup = await checkSetup(address);
    let storefrontSetup = await checkStorefrontSetup(address);

    return nftSetup && storefrontSetup;
  };

  useEffect(async () => {
    if (address && (await initialized())) {
      setUserProfile(await getProfile(address));
    }

    return null;
  }, [address]);

  return {
    userProfile,
    hasSetup,
    initialized
  };
}
