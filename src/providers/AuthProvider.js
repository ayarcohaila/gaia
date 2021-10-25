import { createContext, useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';

import { AgreeSetupModal } from '~/components';
import { useAuth, useProfile } from '~/hooks';
import { URLs } from '~/routes/urls';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [authModalVisible, setAuthModalVisible] = useState(false);
  const [setupModalVisible, setSetupModalVisible] = useState(false);
  const router = useRouter();
  const { user, updateUser, checkedAuth, logout } = useAuth();

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

  const handleCancel = useCallback(async () => {
    await logout();
    await setSetupModalVisible(false);
  }, [setSetupModalVisible, logout]);

  return (
    <AuthContext.Provider value={{ shouldPageBlock, updateUser, user }}>
      {children}
      <AgreeSetupModal open={setupModalVisible} onClose={handleCancel} />
    </AuthContext.Provider>
  );
};
