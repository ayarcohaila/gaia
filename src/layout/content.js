import PropTypes from 'prop-types';
function Content({ children }) {
  return <>{children}</>;
}

Content.propTypes = {
  children: PropTypes.element.isRequired
};

export default Content;
