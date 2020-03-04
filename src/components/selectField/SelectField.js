import React from 'react';
import PropTypes from 'prop-types';

// Styles
import * as Styled from './selectFieldStyles';

const SelectField = ({
  id, label, data, selectedValue, onChange,
}) => (
  <Styled.SelectField>
    <Styled.Label htmlFor={id}>{label}</Styled.Label>
    <Styled.Select
      id={id}
      name={id}
      onChange={onChange}
      value={selectedValue}
    >
      <option> --- </option>
      {data && data.map((option) => (
        <option
          key={option}
          value={option}
        >
          {option}
        </option>
      ))}
    </Styled.Select>
  </Styled.SelectField>
);

SelectField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  selectedValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

SelectField.defaultProps = {
  selectedValue: 'open',
};

export default SelectField;
