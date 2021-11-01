import { memo } from 'react';
import PropTypes from 'prop-types';

import Modal from '..';

const StayTunedModal = ({ onClose, ...props }) => {
  const title = 'Sell NFT';
  const description = () => (
    <>
      Want to sell an NFT you purchased on Gaia?
      <br /> Stay tuned -- our secondary marketplace is coming <br /> in December!
      <br />
      <br /> In the meantime, you can transfer NFTs by going to <br /> My Account, clicking
      “Transfer” on the desired NFT,
      <br /> and entering the wallet address of the recipient.
    </>
  );

  return (
    <Modal
      description={description()}
      onClose={onClose}
      title={title}
      descriptionSx={{ maxWidth: '440px', textAlign: 'center', mb: 0 }}
      height="318px"
      mobileHeight="50vh"
      titleSx={{ mt: 0, mb: '20px' }}
      asset={{}}
      {...props}
    />
  );
};

StayTunedModal.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default memo(StayTunedModal);
