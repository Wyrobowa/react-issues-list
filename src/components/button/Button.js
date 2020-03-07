import React from 'react';
import PropTypes from 'prop-types';

// Styles
import * as Styled from './buttonStyles';

const Button = ({ type, text, onClick }) => (
  // eslint-disable-next-line react/button-has-type
  <Styled.Button
    type={type}
    onClick={onClick}
  >
    {text}
  </Styled.Button>
);

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
