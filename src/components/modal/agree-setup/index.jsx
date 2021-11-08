import { memo, useMemo, useState, useEffect } from 'react';

import { Loader } from '~/base';
import { useAuth } from '~/hooks';
import { loadTransaction } from '~/utils/transactionsLoader';
import { isDapper } from '~/utils/currencyCheck';

import { setupAccount } from '~/flow/setupAccount';

import Modal from '..';
import * as Styled from './styles';

const AgreeSetupModal = ({ onClose, ...props }) => {
  const { logout } = useAuth();
  const [transaction, setTransaction] = useState(null);

  const [loading, setLoading] = useState(false);

  const loadTx = async () => {
    const response = await loadTransaction(
      window.location.origin,
      isDapper ? 'setup_account' : 'setup_account_flow_token'
    );
    setTransaction(response);
  };

  const handleSetup = async () => {
    try {
      setLoading(true);
      await setupAccount(transaction.transactionScript);
      setLoading(false);
      onClose();
    } catch (err) {
      setLoading(false);
      logout();
    }
  };

  useEffect(() => {
    loadTx();
  }, []);

  const renderContent = useMemo(
    () => (
      <Styled.CustomButton onClick={handleSetup} disabled={loading}>
        {loading || !transaction?.transactionScript ? <Loader /> : 'Continue'}
      </Styled.CustomButton>
    ),
    [loading, transaction?.transactionScript]
  );

  return (
    <Modal
      description={
        'This will create an account on Gaia that is associated with your wallet, allowing you to buy, sell, and transfer your NFTs on this site.'
      }
      descriptionSx={{ m: '8px 0 4px', width: '90%', fontWeight: '600', textAlign: 'center' }}
      height="382px"
      mobileHeight="65vh"
      title={'One-Time Account Setup'}
      titleSx={{ mt: '55px' }}
      asset={{
        img: '/collections/gaia.png'
      }}
      {...props}
      onClose={logout}>
      {renderContent}
    </Modal>
  );
};

export default memo(AgreeSetupModal);
