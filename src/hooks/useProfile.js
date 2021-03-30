import { useMemo, useState, useEffect } from 'react';
import { initProfile } from '~/flow/initProfile';
import { getProfile } from '~/flow/getProfile';
import isInitialized from '~/flow/isInitialized';

export default function useProfile(address) {
  const [userProfile, setUserProfile] = useState(null);

  const initialized = useMemo(async () => {
    if (!address) {
      return false;
    }

    return await isInitialized(address);
  }, [address]);

  useEffect(async () => {
    if (address && (await initialized)) {
      setUserProfile(await getProfile(address));
    }

    return null;
  }, [address, initialized]);

  return {
    userProfile,
    initProfile,
    initialized
  };
}
