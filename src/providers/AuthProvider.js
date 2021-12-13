import { createContext, useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';

import { AgreeSetupModal } from '~/components';
import { useAuth } from '~/hooks';
import { URLs } from '~/routes/urls';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { user, updateUser, checkedAuth, hasSetup, setHasSetup } = useAuth();
  const [setupModalVisible, setSetupModalVisible] = useState(false);
  const [authModalVisible, setAuthModalVisible] = useState(false);
  const router = useRouter();

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

  const handleSetup = useCallback(async () => {
    if (!hasSetup) {
      setSetupModalVisible(true);
    }
  }, [setSetupModalVisible, hasSetup]);

  useEffect(() => {
    if (user?.addr) {
      handleSetup();
    } else {
      setSetupModalVisible(false);
    }
  }, [user?.addr, handleSetup, setSetupModalVisible]);

  return (
    <AuthContext.Provider value={{ shouldPageBlock, updateUser, user, hasSetup, setHasSetup }}>
      {children}
      <AgreeSetupModal open={setupModalVisible} onClose={() => setSetupModalVisible(false)} />
    </AuthContext.Provider>
  );
};
