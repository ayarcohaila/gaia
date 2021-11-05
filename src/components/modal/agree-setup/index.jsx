import { memo, useMemo, useState } from 'react';
import { toast } from 'react-toastify';

import { Loader } from '~/base';
import { useAuth } from '~/hooks';
import { loadTransaction } from '~/utils/transactionsLoader';
import { isDapper } from '~/utils/currencyCheck';

import { setupAccount } from '~/flow/setupAccount';

import Modal from '..';
import * as Styled from './styles';

const AgreeSetupModal = ({ ...props }) => {
  const { logout } = useAuth();

  const [loading, setLoading] = useState(false);
  const handleSetup = async () => {
    try {
      setLoading(true);
      const transaction = await loadTransaction(
        window.location.origin,
        isDapper ? 'setup_account' : 'setup_account_flow_token'
      );
      await setupAccount(transaction.transactionScript);
      setLoading(false);
      props.onClose();
    } catch (err) {
      setLoading(false);
      logout();
      toast.error('Error on setting up your account');
    }
  };

  const renderContent = useMemo(
    () => (
      <Styled.CustomButton onClick={handleSetup} disabled={loading}>
        {loading ? <Loader /> : 'Continue'}
      </Styled.CustomButton>
    ),
    [loading]
  );

  return (
    <Modal
      description={
        'This will create an account on Gaia that is associated with your wallet, allowing you to buy, sell, and transfer your NFTs on this site.'
      }
      descriptionSx={{ m: '8px 0 4px', width: '90%', fontWeight: '600', textAlign: 'center' }}
      height="382px"
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
