import React from 'react';
import PropTypes from 'prop-types';

// Styles
import * as Styled from './textFieldStyles';

const TextField = ({
  id, value, label, type, onChange, disabled,
}) => (
  <Styled.TextField>
    <Styled.Label htmlFor={id}>{label}</Styled.Label>
    {type === 'input' && (
    <Styled.Input
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
    )}
    {type === 'textarea' && (
    <Styled.TextArea
      id={id}
      name={id}
      value={value}
      onChange={onChange}
    />
    )}
  </Styled.TextField>
);

TextField.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.string,
};

TextField.defaultProps = {
  type: 'input',
  onChange: () => {},
  disabled: '',
};

export default TextField;
