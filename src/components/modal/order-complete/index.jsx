import { memo } from 'react';
import { Typography } from '@mui/material';

import Modal from '..';

const OrderCompleteModal = ({ ...props }) => {
  return (
    <Modal {...props}>
      <Typography>aaaa</Typography>
    </Modal>
  );
};

export default memo(OrderCompleteModal);
