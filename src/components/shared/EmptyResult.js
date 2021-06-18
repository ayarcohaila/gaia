import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const EmptyResultStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 50vh;
  .anticon {
    font-size: 5em;
    color: #c6d5f3;
  }
  h1 {
    color: #c6d5f3;
  }
`;

function EmptyResult({ title, icon }) {
  return (
    <EmptyResultStyled>
      {icon}
      <h1>{title}</h1>
    </EmptyResultStyled>
  );
}
EmptyResult.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired
};
export default EmptyResult;
