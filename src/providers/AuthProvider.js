import { createContext, useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';

import AuthModal from '~/components/authModal/AuthModal';
import { AgreeSetupModal } from '~/components';

import useAuth from '~/hooks/useAuth';
import useProfile from '~/hooks/useProfile';

import { URLs } from '~/routes/urls';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [authModalVisible, setAuthModalVisible] = useState(false);
  const [setupModalVisible, setSetupModalVisible] = useState(false);
  const router = useRouter();
  const { user, updateUser, checkedAuth } = useAuth();
  const { hasSetup } = useProfile(user?.addr);

  const shouldPageBlock = useCallback(() => {
    if (checkedAuth && !user?.addr) {
      router.push(URLs.home);
      setAuthModalVisible(true);
    }
  }, [user, authModalVisible, checkedAuth]);

  useEffect(() => {
    if (checkedAuth && user?.addr) {
      setAuthModalVisible(false);
    }
  }, [user, checkedAuth]);

  useEffect(async () => {
    const initializedAccount = await hasSetup();

    if (user?.addr && !initializedAccount) {
      setSetupModalVisible(true);
    }
  }, [user, hasSetup]);

  return (
    <AuthContext.Provider value={{ shouldPageBlock, updateUser, user }}>
      {children}
      <AuthModal onDismiss={() => setAuthModalVisible(false)} visible={authModalVisible} />
      <AgreeSetupModal open={setupModalVisible} onClose={() => setSetupModalVisible(false)} />
    </AuthContext.Provider>
  );
};
