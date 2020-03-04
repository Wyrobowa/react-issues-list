import React, { useState } from 'react';
import { withRouter } from 'react-router';

// Components
import Button from '../../components/button/Button';
import SelectField from '../../components/selectField/SelectField';
import TextField from '../../components/textField/TextField';

// Services
import { sendData } from '../../services/requestService';

// Styles
import * as Styled from './issueStyles';

const Issue = (props) => {
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
    setIssue({
      ...issue,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // eslint-disable-next-line react/prop-types
    await sendData('http://localhost:3001/add', issue, props.history);
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
      <TextField
        id="state"
        label="State"
        value={issue.state}
        onChange={handleFieldChange}
      />
      <Button type="submit" text="Add" onClick={handleSubmit} />
    </Styled.Issue>
  );
};

export default withRouter(Issue);
