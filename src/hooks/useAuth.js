import { useState, useEffect } from 'react';
import { fcl } from '~/config/config';

export default function useAuth() {
  const [user, setUser] = useState(null);

  const logout = () => {
    fcl.unauthenticate();
    setUser(null);
  };

  useEffect(() => {
    fcl.currentUser().subscribe(async u => {
      if (u?.addr) {
        setUser(u);
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
