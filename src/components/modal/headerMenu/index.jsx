import * as Styled from './styles.js';

const HeaderModal = ({ open, onClose, children }) => {
  return (
    <Styled.Container hideBackdrop open={open} onClose={onClose}>
      <Styled.Wrapper container alignItems="center" justifyContent="center">
        <Styled.CloseButton data-cy="close" onClick={onClose} variant="text">
          Close
        </Styled.CloseButton>
        {children}
      </Styled.Wrapper>
    </Styled.Container>
  );
};

export default HeaderModal;
