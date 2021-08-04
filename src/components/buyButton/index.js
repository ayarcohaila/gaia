import useAuth from '~/hooks/useAuth';
import { StyledButton } from '~/components/asset/styled';

const BuyButton = ({ onClick }) => {
  const { user, login } = useAuth();

  return (
    <StyledButton $margin type="primary" shape="round" onClick={user?.loggedIn ? onClick : login}>
      {user?.loggedIn ? 'Buy' : 'Login'}
    </StyledButton>
  );
};

export default BuyButton;
