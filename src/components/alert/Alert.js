import React from 'react';
import PropTypes from 'prop-types';

// Styles
import * as Styled from './alertStyles';

const Alert = ({ type, msg, children }) => (
  <Styled.Alert type={type}>
    <h4>{msg}</h4>
    {children}
  </Styled.Alert>
);

Alert.propTypes = {
  type: PropTypes.oneOf(['success', 'danger', 'warning', 'info']).isRequired,
  msg: PropTypes.string.isRequired,
  children: PropTypes.node,
};

Alert.defaultProps = {
  children: '',
};

export default Alert;
