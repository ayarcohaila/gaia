import React, { useState, useCallback, createContext, useContext, PropsWithChildren } from 'react';
import { AppContextValue } from './types';

const initialContextValue: AppContextValue = {
  appData: {
    page: 0,
    marketplaceLoading: true,
    marketplaceNfts: [],
    marketplaceSort: { last_active_price: 'asc' }
  },
  handleAppData: () => void 0
};

const AppContext = createContext<AppContextValue>(initialContextValue);

const AppContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [appData, setAppData] = useState<AppContextValue['appData']>(initialContextValue.appData);

  const handleAppData = useCallback(value => {
    setAppData(prevState => ({ ...prevState, ...value }));
  }, []);

  return <AppContext.Provider value={{ appData, handleAppData }}>{children}</AppContext.Provider>;
};

export default AppContextProvider;

export const useAppContext = () => useContext(AppContext);
