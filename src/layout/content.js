import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';

const TopProgressBar = dynamic(
  () => {
    return import('~/components/topProgressBar');
  },
  { ssr: false }
);
function Content({ children }) {
  return (
    <>
      <TopProgressBar />
      {children}
    </>
  );
}

Content.propTypes = {
  children: PropTypes.element.isRequired
};

export default Content;
