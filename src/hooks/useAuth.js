import { useState, useEffect, useReducer } from 'react';
import { fcl } from '~/config/config';
import { checkSetup } from '~/flow/checkSetup';
import { checkStorefrontSetup } from '~/flow/checkStorefrontSetup';
import {} from './';

const initialState = { user: null, hasSetup: false };

function reducer(state, action) {
  switch (action.type) {
    case 'SET_HAS_SETUP':
      return { ...state, hasSetup: action.payload };
    default:
      throw new Error();
  }
}

export default function useAuth() {
  const [user, setUser] = useState(null);
  const [checkedAuth, setCheckedAuth] = useState(false);
  const [authReduce, dispatch] = useReducer(reducer, initialState);

  const updateUser = () =>
    fcl.currentUser().subscribe(async u => {
      if (u?.addr) {
        let nftSetup = await checkSetup(u?.addr);
        let storefrontSetup = await checkStorefrontSetup(u?.addr);

        const hasSetup = nftSetup && storefrontSetup;
        dispatch({ type: 'SET_HAS_SETUP', payload: hasSetup });
        setUser(u);
      } else {
        setUser(null);
      }

      setCheckedAuth(true);
    });

  useEffect(() => {
    updateUser();
  }, []);

  return {
    user,
    updateUser,
    checkedAuth,
    authReduce,
    dispatch,
    login: fcl.logIn,
    logout: fcl.unauthenticate,
    signup: fcl.signUp
  };
}
