import { StyledRoundedIconButton } from './styles';

const RoundedIconButton = ({ children, onClick }) => {
  return <StyledRoundedIconButton onClick={onClick}>{children}</StyledRoundedIconButton>;
};

export default RoundedIconButton;
