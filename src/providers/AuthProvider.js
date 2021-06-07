import { createContext, useState, useCallback, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';

import AuthModal from '~/components/authModal/AuthModal';

import useAuth from '~/hooks/useAuth';

import { URLs } from '~/routes/urls';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const router = useRouter();
  const { user, updateUser } = useAuth();

  const shouldPageBlock = useCallback(() => {
    if (!user?.addr) {
      router.push(URLs.home);
      setVisible(true);
    }
  }, [user, visible]);

  useEffect(() => {
    if (user?.addr) {
      setVisible(false);
    }
  }, [user]);

  const flowBalance = useMemo(() => user?.balance, [user]);

  const fusdBalance = useMemo(() => user?.usd_balance, [user]);

  return (
    <AuthContext.Provider value={{ shouldPageBlock, updateUser, flowBalance, fusdBalance }}>
      {children}
      <AuthModal onDismiss={() => setVisible(false)} {...{ visible }} />
    </AuthContext.Provider>
  );
};
