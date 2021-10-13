import { memo, useMemo } from 'react';
import { toast } from 'react-toastify';

import Modal from '..';
import * as Styled from './styles';

import { setupAccount } from '~/flow/setupAccount';

const AgreeSetupModal = ({ ...props }) => {
  const handleSetup = async () => {
    toast.success('Setting up your account');
    await setupAccount();
    toast.success('Your have successfully set up your account');
    props.onClose();
  };

  const renderContent = useMemo(
    () => (
      <>
        {' '}
        <Styled.CustomButton onClick={handleSetup}>I agree</Styled.CustomButton>
      </>
    ),
    []
  );

  return (
    <Modal
      description={'You must first agree on setting up your account'}
      descriptionSx={{ m: '8px 0 4px', maxWidth: '270px', textAlign: 'center' }}
      height="382px"
      title={'Setting Up'}
      titleSx={{ mt: '96px' }}
      asset={{
        image: '/collections/user.png'
      }}
      {...props}>
      {renderContent}
    </Modal>
  );
};

export default memo(AgreeSetupModal);
