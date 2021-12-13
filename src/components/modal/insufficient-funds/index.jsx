import { memo } from 'react';
import PropTypes from 'prop-types';

import Modal from '..';

const InsufficientFunds = ({ onClose, ...props }) => {
  const title = 'Insufficient Funds';
  const description =
    'We were unable to process your transaction due to insufficient funds. Please add funds to your connected wallet, then return here and try your purchase again.';

  return (
    <Modal
      description={description}
      onClose={onClose}
      title={title}
      descriptionSx={{ maxWidth: '440px', textAlign: 'center', mb: 0 }}
      height="318px"
      mobileHeight="50vh"
      titleSx={{ mt: 10, mb: '20px' }}
      asset={{}}
      {...props}
    />
  );
};

InsufficientFunds.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default memo(InsufficientFunds);
