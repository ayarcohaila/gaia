import PropTypes from 'prop-types';
import { Modal, Spin, notification } from 'antd';
import MESSAGES from '~/utils/messages';
import { setupAccount } from '~/flow/setupAccount';

import styles from './styles';

const SetupModal = ({ visible, onDismiss }) => {
  const handleSetup = async () => {
    notification.open({
      key: `setup_account`,
      icon: <Spin />,
      message: MESSAGES.setting_up_account_msg,
      description: MESSAGES.transaction_msg,
      duration: null
    });
    await setupAccount();
    notification.open({
      key: `setup_account`,
      type: 'success',
      message: MESSAGES.setup_account_msg,
      description: MESSAGES.setup_account_desc
    });
    onDismiss();
  };

  return (
    <Modal
      okText="I agree"
      onOk={handleSetup}
      cancelButtonProps={{ style: styles.cancelButton }}
      closable={false}
      {...{ visible }}>
      <p>You must first agree on setting up your account</p>
    </Modal>
  );
};

SetupModal.propTypes = {
  visible: PropTypes.bool.isRequired
};

export default SetupModal;
