import React, { useEffect, useState } from 'react';

// Services
import { fetchData } from '../../services/requestService';

const IssuesList = () => {
  const [issues, setIssues] = useState({});

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData('http://localhost:3001/list');
      setIssues(data);
    };

    getData();
  }, []);

  return (
    <>
      <p>List</p>
      <div>
        <div>Title</div>
        <div>Description</div>
        <div>State</div>
      </div>
      {issues && issues.length > 0 && issues.map((issue) => (
        <div>
          <div>{issue.title}</div>
          <div>{issue.description}</div>
          <div>{issue.state}</div>
        </div>
      ))}
    </>
  );
};

export default IssuesList;
