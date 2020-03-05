import React from 'react';
import PropTypes from 'prop-types';

// Styles
import * as Styled from './selectFieldStyles';

const SelectField = ({
  id, label, options, disabledOptions, selectedValue, itemIndex, itemSlug, onChange,
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
      {options && options.map((option) => {
        return (
          <option
            key={option}
            value={option}
            disabled={disabledOptions[selectedValue].includes(option)}
          >
            {option}
          </option>
        );
      })}
    </Styled.Select>
  </Styled.SelectField>
);

SelectField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  options: PropTypes.array.isRequired,
  disabledOptions: PropTypes.object.isRequired,
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
