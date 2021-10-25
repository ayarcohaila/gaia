import { useState, useEffect } from 'react';
import { fcl } from '~/config/config';
import { getFlowBalance } from '~/flow/getFlowBalance';

export default function useAuth() {
  const [user, setUser] = useState(null);
  const [checkedAuth, setCheckedAuth] = useState(false);

  const updateUser = () =>
    fcl.currentUser().subscribe(async u => {
      if (u?.addr) {
        let flowBalance = await getFlowBalance(u?.addr);
        u.balance = flowBalance;
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
    login: fcl.logIn,
    logout: fcl.unauthenticate,
    signup: fcl.signUp
  };
}
