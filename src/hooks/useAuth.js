import { useState, useEffect } from 'react';
import { fcl } from '~/config/config';

export default function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fcl.currentUser().subscribe(async u => {
      if (u?.addr) {
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
