import { memo } from 'react';
import { Typography } from '@mui/material';

import Modal from '..';

const CancelListingModal = ({ ...props }) => {
  return (
    <Modal {...props}>
      <Typography>aaaa</Typography>
    </Modal>
  );
};

export default memo(CancelListingModal);
