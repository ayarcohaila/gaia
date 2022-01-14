import { memo, useMemo } from 'react';
import PropTypes from 'prop-types';

import Modal from '..';
import useBreakpoints from '~/hooks/useBreakpoints';

const NoLongerAvailable = ({ onClose, ...props }) => {
  const { isMediumDevice } = useBreakpoints();
  const title = 'No Longer Available';

  const description = useMemo(() => {
    return (
      <>
        We are experiencing high demand, and another collector just purchased this NFT.
        <br />
        <br />
        Please select a different item, or refresh the page to get the latest NFTs for sale.
      </>
    );
  }, []);

  return (
    <Modal
      description={description}
      onClose={onClose}
      title={title}
      descriptionSx={{ maxWidth: isMediumDevice ? '300px' : '360px', textAlign: 'center', mb: 0 }}
      height="318px"
      mobileHeight="50vh"
      titleSx={{ mt: 0, mb: '20px' }}
      asset={{}}
      {...props}
    />
  );
};

NoLongerAvailable.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default memo(NoLongerAvailable);
