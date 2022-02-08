import React, { createContext, useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { URLs } from '~/routes/urls';
import { getAuth, signInWithCustomToken, User as FirebaseUser } from '@firebase/auth';
import { API } from '~/api/API';
import { fcl } from '~/config/config';
import { checkSetup } from '~/flow/checkSetup';
import { checkStorefrontSetup } from '~/flow/checkStorefrontSetup';

const AgreeSetupModal = dynamic(() => import('~/components/modal/agreeSetup'));

type User = {
  addr: string;
};

type AuthContextType = {
  shouldPageBlock: () => void;
  user: User | null;
  hasSetup: boolean;
  setHasSetup: (val: boolean) => void;
  checkedAuth: boolean;
  firebaseUser: FirebaseUser | null;
  login: () => void;
  logout: () => void;
  signup: () => void;
  isAuthLoading: boolean;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<User | null>(null);
  const [checkedAuth, setCheckedAuth] = useState(false);
  const [hasSetup, setHasSetup] = useState(false);
  const [isAuthLoading, setIsAuthLoading] = useState(false);

  const [setupModalVisible, setSetupModalVisible] = useState(false);
  const [authModalVisible, setAuthModalVisible] = useState(false);
  const [firebaseAuthToken, setFirebaseAuthToken] = useState<string | null>(null);
  const [firebaseUser, setFirebaseUser] = useState<FirebaseUser | null>(null);
  const router = useRouter();

  const shouldPageBlock = useCallback(() => {
    if (checkedAuth && !user?.addr) {
      router.push(URLs.home);
      setAuthModalVisible(true);
    }
  }, [user, authModalVisible, checkedAuth]);

  useEffect(() => {
    fcl.currentUser().subscribe(async (u: User | null) => {
      setIsAuthLoading(true);
      if (u?.addr) {
        let nftSetup = await checkSetup(u?.addr);
        let storefrontSetup = await checkStorefrontSetup(u?.addr);

        const hasSetup = nftSetup && storefrontSetup;
        setHasSetup(hasSetup);
        setUser(u);
      } else {
        setUser(null);
      }

      setCheckedAuth(true);
      setIsAuthLoading(false);
    });
  }, []);

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

  useEffect(() => {
    if (user?.addr) {
      const addr = user?.addr;
      (async () => {
        // TODO: need to change this to use whatever we end up having for the Dapper auth integration. Right now we just assume that the user is whoever they say they are based on their dapper wallet address
        // get custom firebase auth token from API
        const authToken = await API().firebase.getFirebaseAuthToken(addr);
        setFirebaseAuthToken(authToken.authToken);
      })().then();
    } else {
      // sign out of firebase
      const auth = getAuth();
      auth.signOut().then();
    }
  }, [user?.addr, setFirebaseAuthToken]);

  useEffect(() => {
    if (firebaseAuthToken) {
      (async () => {
        const auth = getAuth();
        await signInWithCustomToken(auth, firebaseAuthToken);
      })().then();
    }
  }, [firebaseAuthToken]);

  useEffect(() => {
    const auth = getAuth();

    return auth.onAuthStateChanged(user => {
      // TODO: might need to re-auth with firestore here
      setFirebaseUser(user);
    });
  }, [setFirebaseUser]);

  return (
    <AuthContext.Provider
      value={{
        shouldPageBlock,
        user,
        hasSetup,
        setHasSetup,
        firebaseUser,
        checkedAuth,
        login: fcl.logIn,
        logout: fcl.unauthenticate,
        signup: fcl.signUp,
        isAuthLoading
      }}>
      {children}
      <AgreeSetupModal open={setupModalVisible} onClose={() => setSetupModalVisible(false)} />
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = React.useContext(AuthContext);

  if (!context) {
    throw new Error('userAuthContext must be used within a AuthProvider');
  }

  return context;
};
