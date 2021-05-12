import { useMemo, useState, useEffect } from 'react';
import { getProfile } from '~/flow/getProfile';
import { checkSetup } from '~/flow/checkSetup';

import isInitialized from '~/flow/isInitialized';

export default function useProfile(address) {
  const [userProfile, setUserProfile] = useState(null);

  const initialized = useMemo(async () => {
    if (!address) {
      return false;
    }

    return await isInitialized(address);
  }, [address]);
  const hasSetup = useMemo(async () => {
    if (!address) {
      return false;
    }

    return await checkSetup(address);
  }, [address]);

  useEffect(async () => {
    if (address && (await initialized)) {
      setUserProfile(await getProfile(address));
    }

    return null;
  }, [address, initialized]);

  return {
    userProfile,
    hasSetup,
    initialized
  };
}
