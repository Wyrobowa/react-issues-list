import React from 'react';
import PropTypes from 'prop-types';

// Styles
import * as Styled from './alertStyles';

const Alert = ({ alerts }) => (
  <>
    {console.log(alerts)}
    {alerts.length > 0 && alerts.map((alert) => (
      <Styled.Alert type={alert.type} key={alert.msg}>
        <h4>{alert.msg}</h4>
      </Styled.Alert>
    ))}
  </>
);

Alert.propTypes = {
  alerts: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.oneOf(['success', 'danger', 'warning', 'info']).isRequired,
    msg: PropTypes.string.isRequired,
  })).isRequired,
};

export default Alert;
