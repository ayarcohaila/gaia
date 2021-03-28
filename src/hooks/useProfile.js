import { useState, useEffect, useCallback } from 'react';
import { initProfile } from '~/flow/initProfile';
import { getProfile } from '~/flow/getProfile';
import isInitialized from '~/flow/isInitialized';

export default function useProfile(address) {
  const [userProfile, setUserProfile] = useState(null);

  const checkAndGetProfile = useCallback(async () => {
    const initialized = await isInitialized(address);
    if (initialized) {
      const profile = await getProfile(address);
      setUserProfile(profile);
    }
  }, [address]);

  useEffect(() => {
    if (address) {
      checkAndGetProfile();
    }
  }, [address]);

  return {
    userProfile,
    initProfile,
    isInitialized
  };
}
