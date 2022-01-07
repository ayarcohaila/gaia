import React, { useState, useCallback, createContext, useContext } from 'react';

export const AppContext = createContext({});

const AppContextProvider = ({ children }) => {
  const [appData, setAppData] = useState({
    page: 0,
    marketplaceLoading: true,
    marketplaceNfts: [],
    marketplaceSort: { last_active_price: 'asc' }
  });

  const handleAppData = useCallback(value => {
    setAppData(prevState => ({ ...prevState, ...value }));
  }, []);

  return <AppContext.Provider value={{ appData, handleAppData }}>{children}</AppContext.Provider>;
};

export default AppContextProvider;

export const useAppContext = () => useContext(AppContext);
