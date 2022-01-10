import PropTypes from 'prop-types';

import * as Styled from './styled.js';

const BlockLayer = ({ active }) => (
  <Styled.Container active={active} pageHeight={document.body.clientHeight} />
);

BlockLayer.propTypes = {
  active: PropTypes.bool
};

BlockLayer.defaultProps = {
  active: false
};

export default BlockLayer;
