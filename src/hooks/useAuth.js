import { useState, useEffect } from 'react';
import { fcl } from '~/config/config';
import { checkSetup } from '~/flow/checkSetup';
import { checkStorefrontSetup } from '~/flow/checkStorefrontSetup';

export default function useAuth() {
  const [user, setUser] = useState(null);
  const [checkedAuth, setCheckedAuth] = useState(false);
  const [hasSetup, setHasSetup] = useState(false);

  const updateUser = () =>
    fcl.currentUser().subscribe(async u => {
      if (u?.addr) {
        let nftSetup = await checkSetup(u?.addr);
        let storefrontSetup = await checkStorefrontSetup(u?.addr);

        const hasSetup = nftSetup && storefrontSetup;
        setHasSetup(hasSetup);
        setUser(u);
      } else {
        setUser(null);
      }

      setCheckedAuth(true);
    });

  useEffect(() => {
    updateUser();
  }, []);

  return {
    user,
    updateUser,
    checkedAuth,
    hasSetup,
    setHasSetup,
    login: fcl.logIn,
    logout: fcl.unauthenticate,
    signup: fcl.signUp
  };
}
