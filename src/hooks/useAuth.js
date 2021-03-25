/* eslint-disable no-console */
import { useState, useEffect } from 'react';
import { fcl } from '~/config/config';
import { initProfile } from '~/flow/initProfile';
import { getProfile } from '~/flow/getProfile';
import isInitialized from '~/flow/isInitialized';

export default function useAuth() {
  const [user, setUser] = useState(null);
  const logout = () => {
    fcl.unauthenticate();
    setUser(null);
  };

  useEffect(() => {
    fcl.currentUser().subscribe(async u => {
      if (u?.addr) {
        const isInit = await isInitialized(u?.addr);
        if (!isInit) await initProfile();
        const profile = await getProfile(u?.addr);
        setUser(profile);
      }
    });
  }, []);

  return {
    user,
    login: fcl.logIn,
    logout,
    signup: fcl.signUp
  };
}
