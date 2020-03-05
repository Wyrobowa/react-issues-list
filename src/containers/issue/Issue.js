import React, { useState } from 'react';

// Components
import Button from '../../components/button/Button';
import TextField from '../../components/textField/TextField';

// Helpers
import { setAlertsAction } from '../../helpers/Helpers';

// Services
import { sendData } from '../../services/requestService';

// Styles
import * as Styled from './issueStyles';
import Alert from '../../components/alert/Alert';

const Issue = () => {
  const [issue, setIssue] = useState({
    title: '',
    description: '',
    state: 'open',
  });
  const [alerts, setAlerts] = useState([]);

  const issueInitialState = {
    title: '',
    description: '',
    state: 'open',
  };

  const handleFieldChange = ({ target }) => {
    const { name, value } = target;
    setIssue({
      ...issue,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    console.log(issueInitialState);
    event.preventDefault();
    // eslint-disable-next-line react/prop-types
    try {
      await sendData('http://localhost:3001/add', issue);
      setAlertsAction(setAlerts, alerts, 'success', 'Issue has been successfully created!');
      console.log(issueInitialState);
      setIssue(issueInitialState);
    } catch (error) {
      setAlertsAction(setAlerts, alerts, 'danger', 'Something went wrong! Issue couldn\'t be created!');
    }
  };

  return (
    <>
      <Alert alerts={alerts} />
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
          disabled="disabled"
        />
        <Button type="submit" text="Add" onClick={handleSubmit} />
      </Styled.Issue>
    </>
  );
};

export default Issue;
