import { memo } from 'react';
import PropTypes from 'prop-types';

import Modal from '..';

const PurchaseError = ({ onClose, ...props }) => {
  const title = 'Unable To Complete Purchase';
  const description =
    'We were unable to process your transaction due to an unknown error.  Please try again.';

  return (
    <Modal
      description={description}
      onClose={onClose}
      title={title}
      descriptionSx={{ maxWidth: '360px', textAlign: 'center', mb: 0 }}
      height="318px"
      mobileHeight="50vh"
      titleSx={{ mt: 0, mb: '20px' }}
      asset={{}}
      {...props}
    />
  );
};

PurchaseError.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default memo(PurchaseError);
