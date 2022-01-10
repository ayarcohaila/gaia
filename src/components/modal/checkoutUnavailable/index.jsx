import { memo, useMemo } from 'react';
import PropTypes from 'prop-types';

import Modal from '..';
import { useBreakpoints } from '~/hooks';

import * as Styled from './styled';

const CheckoutUnavailable = ({ onClose, ...props }) => {
  const { isMediumDevice } = useBreakpoints();

  const title = 'Checkout Temporarily Unavailable';
  const description = useMemo(() => {
    return (
      <>
        We are unable to complete your transaction due to Flow blockchain maintenance.{' '}
        <Styled.CustomLink
          href="https://docs.onflow.org/node-operation/upcoming-sporks/"
          rel="noopener noreferrer"
          target="_blank">
          Click here for more detail
        </Styled.CustomLink>
        .
        <br />
        <br />
        Please try again once the maintenance period has ended.
      </>
    );
  }, []);

  return (
    <Modal
      description={description}
      onClose={onClose}
      title={title}
      descriptionSx={{ maxWidth: isMediumDevice ? '310px' : '480px', textAlign: 'center', mb: 0 }}
      height="318px"
      mobileHeight="50vh"
      titleSx={{ mt: 0, mb: '20px', textAlign: 'center', lineHeight: '1.2' }}
      asset={{}}
      {...props}
    />
  );
};

CheckoutUnavailable.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default memo(CheckoutUnavailable);
