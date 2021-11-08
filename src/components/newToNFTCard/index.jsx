import React from 'react';
import PropTypes from 'prop-types';

import * as styled from './styled';

const NewToNFTCard = ({ data }) => {
  return (
    <styled.CustomCard>
      <styled.Title>{data?.title}</styled.Title>
    </styled.CustomCard>
  );
};

NewToNFTCard.propTypes = {
  data: PropTypes.shape({
    titile: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    link: PropTypes.string
  }).isRequired
};

export default React.memo(NewToNFTCard);
