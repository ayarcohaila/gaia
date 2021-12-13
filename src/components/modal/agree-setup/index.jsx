import { memo, useMemo, useState, useEffect, useContext } from 'react';

import { Loader } from '~/base';
import { useAuth, useBreakpoints } from '~/hooks';
import { loadTransaction } from '~/utils/transactionsLoader';
import { isDapper } from '~/utils/currencyCheck';
import preval from 'preval.macro';

import { setupAccount } from '~/flow/setupAccount';

import Modal from '..';
import * as Styled from './styles';
import { AuthContext } from '~/providers/AuthProvider';

const AgreeSetupModal = ({ onClose, ...props }) => {
  const { logout } = useAuth();
  const [transaction, setTransaction] = useState(null);
  const [loading, setLoading] = useState(false);
  const { setHasSetup } = useContext(AuthContext);
  const { isSmallDevice, isExtraSmallDevice } = useBreakpoints();

  const setupTx = isDapper
    ? preval`
    const fs = require('fs')
    const path = require('path'),   
    filePath = path.join(__dirname, "../../../flow/transactions/dapper/setup_account.cdc");
    module.exports = fs.readFileSync(filePath, 'utf8')
    `
    : preval`
    const fs = require('fs')
    const path = require('path'),   
    filePath = path.join(__dirname, "../../../flow/transactions/flowToken/setup_account.cdc");
    module.exports = fs.readFileSync(filePath, 'utf8')
    `;

  const loadTx = async () => {
    const response = await loadTransaction(setupTx);
    setTransaction(response);
  };

  const handleSetup = async () => {
    try {
      setLoading(true);
      await setupAccount(transaction.transactionScript);
      setHasSetup(true);
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
      mobileHeight={isExtraSmallDevice ? '75vh' : '65vh'}
      title={'One-Time Account Setup'}
      titleSx={{ mt: isSmallDevice ? 16 : 18 }}
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
