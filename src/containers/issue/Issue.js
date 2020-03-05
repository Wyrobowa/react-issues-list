import React, { useState } from 'react';

// Components
import Button from '../../components/button/Button';
import TextField from '../../components/textField/TextField';

// Services
import { sendData } from '../../services/requestService';

// Styles
import * as Styled from './issueStyles';
import Alert from '../../components/alert/Alert';

const issueInitState = {
  title: '',
  description: '',
  state: 'open',
};

const alertInitState = {
  type: '',
  msg: '',
};

const Issue = () => {
  const [issue, setIssue] = useState(issueInitState);
  const [alert, setAlert] = useState(alertInitState);

  const handleFieldChange = ({ target }) => {
    const { name, value } = target;
    setIssue({
      ...issue,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setAlert(alertInitState);

    try {
      await sendData('http://localhost:3001/add', issue, 'POST');

      setIssue(issueInitState);

      setAlert({
        type: 'success',
        msg: 'Issue has been successfully created!',
      });
    } catch (error) {
      setAlert({
        type: 'danger',
        msg: 'Something went wrong! Issue couldn\'t be created!',
      });
    }
  };

  return (
    <>
      {alert.type !== '' && (
        <Alert type={alert.type} msg={alert.msg} />
      )}
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
