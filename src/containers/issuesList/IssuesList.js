import React, { useEffect, useState } from 'react';

// Components
import Loader from '../../components/loader/Loader';
import SelectField from '../../components/selectField/SelectField';

// Services
import { fetchData, updateData } from '../../services/requestService';

// Styles
import * as Styled from './issuesListStyles';

const IssuesList = () => {
  const [issues, setIssues] = useState([]);
  const [fetchingData, setFetchingData] = useState(true);

  const options = ['open', 'pending', 'closed'];
  const disabledOptions = {
    open: [],
    pending: ['open'],
    closed: ['open', 'pending'],
  };

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData('http://localhost:3001/list');
      setIssues(data);
      setFetchingData(false);
    };

    getData();
  }, []);

  const handleFieldChange = async ({ target }) => {
    const { name, value } = target;
    const issueIndex = Number(target.getAttribute('data-index'));
    const issueSlug = target.getAttribute('data-slug');

    try {
      setFetchingData(true);
      await updateData(`http://localhost:3001/edit/${issueSlug}`, { [name]: value });
    } catch (error) {
      throw new Error(error);
    }

    const issuesWithChangedState = issues.map((issue, index) => {
      if (index === issueIndex) {
        return {
          ...issue,
          [name]: value,
        };
      }

      return {
        ...issue,
      };
    });

    setIssues(issuesWithChangedState);
    setFetchingData(false);
  };

  return (
    <Loader loading={fetchingData}>
      {issues.length > 0 && (
      <Styled.IssuesList>
        <Styled.TableHeader>
          <Styled.Cell>Title</Styled.Cell>
          <Styled.Cell>Description</Styled.Cell>
          <Styled.Cell>State</Styled.Cell>
        </Styled.TableHeader>
        {issues.map((issue, index) => (
          <Styled.TableRow key={issue.slug}>
            <Styled.Cell>{issue.title}</Styled.Cell>
            <Styled.Cell>{issue.description}</Styled.Cell>
            <Styled.Cell>
              <SelectField
                id="state"
                selectedValue={issue.state}
                options={options}
                disabledOptions={disabledOptions}
                itemIndex={index}
                itemSlug={issue.slug}
                onChange={handleFieldChange}
                disabledSelect={issue.state === 'closed' ? 'disabled' : ''}
              />
            </Styled.Cell>
          </Styled.TableRow>
        ))}
      </Styled.IssuesList>
      )}
      {issues.length === 0 && (
      <Styled.EmptyListText>No issues available</Styled.EmptyListText>
      )}
    </Loader>
  );
};

export default IssuesList;
