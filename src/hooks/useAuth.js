import { useState, useEffect } from 'react';
import { fcl } from '~/config/config';
import { getFlowBalance } from '~/flow/getFlowBalance';

export default function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fcl.currentUser().subscribe(async u => {
      if (u?.addr) {
        let userBalance = await getFlowBalance(u?.addr);
        u.balance = userBalance;
        setUser(u);
      } else {
        setUser(null);
      }
    });
  }, []);

  return {
    user,
    login: fcl.logIn,
    logout: fcl.unauthenticate,
    signup: fcl.signUp
  };
}
