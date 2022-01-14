import { memo } from 'react';
import PropTypes from 'prop-types';

import useCollectionConfig from '~/hooks/useCollectionConfig';
import Modal from '..';

const MaximumPurchaseLimit = props => {
  const title = 'Maximum Purchase Limit Reached';
  const { config } = useCollectionConfig();

  const description = `In order to allow more collectors to own BALLERZ, we’ve limited purchases to ${config?.buyLimit} per wallet.`;

  return (
    <Modal
      description={description}
      title={title}
      descriptionSx={{ maxWidth: '440px', textAlign: 'center', mb: 0 }}
      height="318px"
      mobileHeight="50vh"
      titleSx={{ mt: '12vh', mb: '20px' }}
      asset={{}}
      {...props}
    />
  );
};

MaximumPurchaseLimit.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default memo(MaximumPurchaseLimit);
