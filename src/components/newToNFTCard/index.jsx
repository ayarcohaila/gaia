import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styled';

const NewToNFTCard = ({ data }) => {
  return (
    <>
      <Styled.CustomCard>
        <Styled.CardTitle>{data?.title}</Styled.CardTitle>
      </Styled.CustomCard>
    </>
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
