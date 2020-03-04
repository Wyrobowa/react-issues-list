import React, { useEffect, useState } from 'react';

// Services
import { fetchData } from '../../services/requestService';

// Styles
import * as Styled from './issuesListStyles';

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
    <Styled.IssuesList>
      <Styled.TableHeader>
        <Styled.Cell>Title</Styled.Cell>
        <Styled.Cell>Description</Styled.Cell>
        <Styled.Cell>State</Styled.Cell>
      </Styled.TableHeader>
      {issues && issues.length > 0 && issues.map((issue) => (
        <Styled.TableRow key={issue.slug}>
          <Styled.Cell>{issue.title}</Styled.Cell>
          <Styled.Cell>{issue.description}</Styled.Cell>
          <Styled.Cell>{issue.state}</Styled.Cell>
        </Styled.TableRow>
      ))}
    </Styled.IssuesList>
  );
};

export default IssuesList;
