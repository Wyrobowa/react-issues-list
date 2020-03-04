import React, { useState } from 'react';

// Components
import Button from '../../components/button/Button';
import SelectField from '../../components/selectField/SelectField';
import TextField from '../../components/textField/TextField';

// Styles
import * as Styled from './issueStyles';

const Issue = () => {
  const [issue, setIssue] = useState({
    title: '',
    description: '',
    state: 'open',
  });

  const states = [
    'open',
    'pending',
    'closed',
  ];

  const handleFieldChange = ({ target }) => {
    const { name, value } = target;
    console.log(name, value);
    setIssue({
      ...issue,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Styled.Issue>
      <TextField
        id="title"
        label="Title"
        value={issue.title}
        onChange={handleFieldChange}
      />
      <TextField
        id="description"
        label="Description"
        value={issue.description}
        type="textarea"
        onChange={handleFieldChange}
      />
      <SelectField
        id="state"
        label="State"
        data={states}
        onChange={handleFieldChange}
        selectedValue={issue.state}
      />
      <Button type="submit" text="Add" onClick={handleSubmit} />
    </Styled.Issue>
  );
};

export default Issue;
