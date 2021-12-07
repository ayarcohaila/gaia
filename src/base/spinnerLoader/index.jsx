import { CircularProgress } from '@mui/material';
import PropTypes from 'prop-types';

import * as Styled from './styled.js';

const Loader = ({ disableText }) => {
  return (
    <Styled.Container>
      <CircularProgress color="loader" size={24} />
      {!disableText && <Styled.Text>Processing...</Styled.Text>}
    </Styled.Container>
  );
};

Loader.propTypes = {
  disableText: PropTypes.bool
};

Loader.defaultProps = {
  disableText: false
};

export default Loader;
