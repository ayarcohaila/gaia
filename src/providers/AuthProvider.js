import { createContext, useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';

import { AgreeSetupModal } from '~/components';
import { useAuth, useProfile } from '~/hooks';
import { URLs } from '~/routes/urls';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authModalVisible, setAuthModalVisible] = useState(false);
  const [setupModalVisible, setSetupModalVisible] = useState(false);
  const router = useRouter();
  const { user, updateUser, checkedAuth, dispatch, authReduce } = useAuth();

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

  const handleSetup = useCallback(async () => {
    const initializedAccount = await hasSetup();
    if (!initializedAccount) {
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
    <AuthContext.Provider value={{ shouldPageBlock, updateUser, user, dispatch, authReduce }}>
      {children}
      <AgreeSetupModal open={setupModalVisible} onClose={() => setSetupModalVisible(false)} />
    </AuthContext.Provider>
  );
};
