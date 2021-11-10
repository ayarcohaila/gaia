import { useState, useEffect } from 'react';
import { fcl } from '~/config/config';
import { checkSetup } from '~/flow/checkSetup';

export default function useAuth() {
  const [user, setUser] = useState(null);
  const [checkedAuth, setCheckedAuth] = useState(false);

  const updateUser = () =>
    fcl.currentUser().subscribe(async u => {
      if (u?.addr) {
        const hasSetup = await checkSetup(u.addr);
        setUser({ ...u, hasSetup });
      } else {
        setUser(null);
      }

      setCheckedAuth(true);
    });

  useEffect(() => {
    updateUser();
  }, []);

  useEffect(async () => {
    if (!user) return;
    const hasSetup = await checkSetup(user?.addr);

    if (hasSetup === user?.hasSetup) return;
    setUser({ ...user, hasSetup });
  }, [user]);

  return {
    user,
    updateUser,
    checkedAuth,
    login: fcl.logIn,
    logout: fcl.unauthenticate,
    signup: fcl.signUp
  };
}
