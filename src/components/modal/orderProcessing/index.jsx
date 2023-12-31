import { memo, useMemo } from 'react';

import useBreakpoints from '~/hooks/useBreakpoints';
import Modal from '..';

const OrderProcessing = ({ open, ...props }) => {
  const { isSmallDevice, isExtraSmallDevice } = useBreakpoints();

  const title = 'Transaction Being Processed...';
  const description = useMemo(() => {
    return (
      <>
        {`We are communicating with ${
          process.env.NEXT_PUBLIC_ISDAPPER === 'true' ? 'Dapper' : 'the'
        } Wallet to complete your purchase. This may take a
        moment.`}
        <br />
        <br />
        Do not close this window. This page will automatically refresh once the transaction is
        confirmed.
      </>
    );
  }, []);

  return (
    <Modal
      description={description}
      title={title}
      descriptionSx={{ maxWidth: '440px', textAlign: 'center', mb: 0 }}
      height="318px"
      mobileHeight={isExtraSmallDevice ? '65vh' : '55vh'}
      titleSx={{ mt: '9vh', mb: '20px', textAlign: 'center' }}
      asset={{}}
      open={open}
      disableCloseButton={!isSmallDevice}
      {...props}
    />
  );
};

export default memo(OrderProcessing);
