/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import useSWR from 'swr';

import { AuthContext } from '~/providers/AuthProvider';
import { getFlowBalance } from '../flow/getFlowBalance';

export default () => {
  const context = useContext(AuthContext);
  const { data: flowBalance, error } = useSWR(context.user?.addr, getFlowBalance);

  if (!context) {
    throw new Error('useBalance must be within an AuthProvider');
  }

  return {
    updateUser: context.updateUser,
    flowBalance: flowBalance || '--- '
  };
};
