import React from 'react';
import PropTypes from 'prop-types';

// Styles
import * as Styled from './selectFieldStyles';

const SelectField = ({
  id, label, data, selectedValue, itemIndex, itemSlug, onChange,
}) => (
  <Styled.SelectField>
    {label && (
      <Styled.Label htmlFor={id}>{label}</Styled.Label>
    )}
    <Styled.Select
      id={id}
      name={id}
      onChange={onChange}
      value={selectedValue}
      data-index={itemIndex}
      data-slug={itemSlug}
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
  label: PropTypes.string,
  data: PropTypes.array.isRequired,
  selectedValue: PropTypes.string,
  itemIndex: PropTypes.number.isRequired,
  itemSlug: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

SelectField.defaultProps = {
  label: null,
  selectedValue: 'open',
};

export default SelectField;
