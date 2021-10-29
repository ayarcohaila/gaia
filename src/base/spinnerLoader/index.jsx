import { CircularProgress } from '@mui/material';

import * as Styled from './styled.js';

const Loader = () => {
  return (
    <Styled.Container>
      <CircularProgress color="loader" size={24} />
      <Styled.Text>Processing...</Styled.Text>
    </Styled.Container>
  );
};

export default Loader;
