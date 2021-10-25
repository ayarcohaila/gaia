import { memo, useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import { CircularProgress } from '@mui/material';

import { useAuth } from '~/hooks';
import { setupAccount } from '~/flow/setupAccount';

import Modal from '..';
import * as Styled from './styles';

const AgreeSetupModal = ({ ...props }) => {
  const { logout } = useAuth();

  const [loading, setLoading] = useState(false);
  const handleSetup = async () => {
    try {
      setLoading(true);
      toast.info('Setting up your account...', { isLoading: loading });
      await setupAccount();
      toast.success('Your have successfully set up your account');
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
      <Styled.CustomButton onClick={handleSetup}>
        {loading ? <CircularProgress size={32} color="white" /> : 'I agree'}
      </Styled.CustomButton>
    ),
    [loading]
  );

  return (
    <Modal
      description={'You must first agree on setting up your account'}
      descriptionSx={{ m: '8px 0 4px', maxWidth: '270px', textAlign: 'center' }}
      height="382px"
      title={'Setting Up'}
      titleSx={{ mt: '96px' }}
      asset={{
        img: '/collections/user.png'
      }}
      {...props}
      onClose={logout}>
      {renderContent}
    </Modal>
  );
};

export default memo(AgreeSetupModal);
