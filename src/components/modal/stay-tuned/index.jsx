import { memo } from 'react';
import PropTypes from 'prop-types';

import Modal from '..';

const StayTunedModal = ({ onClose, ...props }) => {
  const title = 'Sell NFT';
  const description = `
      Want to sell an NFT you purchased on Gaia?
    Stay tuned -- our secondary marketplace is coming
    in December!
  `;

  return (
    <Modal
      description={description}
      onClose={onClose}
      title={title}
      descriptionSx={{ maxWidth: '440px', textAlign: 'center', mb: 0 }}
      height="256px"
      mobileHeight="50vh"
      titleSx={{ mt: '10vh', mb: '20px' }}
      asset={{}}
      {...props}
    />
  );
};

StayTunedModal.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default memo(StayTunedModal);
