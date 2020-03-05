import React, { useEffect, useState } from 'react';

// Components
import Alert from '../../components/alert/Alert';
import Loader from '../../components/loader/Loader';
import SelectField from '../../components/selectField/SelectField';

// Services
import { fetchData, sendData } from '../../services/requestService';

// Styles
import * as Styled from './issuesListStyles';

const options = ['open', 'pending', 'closed'];
const disabledOptions = {
  open: [],
  pending: ['open'],
  closed: ['open', 'pending'],
};

const alertInitState = {
  type: '',
  msg: '',
};

const IssuesList = () => {
  const [issues, setIssues] = useState([]);
  const [fetchingData, setFetchingData] = useState(true);
  const [alert, setAlert] = useState(alertInitState);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData('http://localhost:3001/list');

        setIssues(data);
      } catch (error) {
        setAlert({
          type: 'danger',
          msg: 'Something went wrong! Data couldn\'t be fetched!',
        });
      }

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
      await sendData(`http://localhost:3001/edit/${issueSlug}`, { [name]: value }, 'PUT');

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
      setAlert({
        type: 'success',
        msg: 'Issue has been successfully updated!',
      });
    } catch (error) {
      setAlert({
        type: 'danger',
        msg: 'Something went wrong! Issue couldn\'t be updated!',
      });
      setFetchingData(false);
    }

    setFetchingData(false);
  };

  return (
    <>
      {alert.type !== '' && (
        <Alert type={alert.type} msg={alert.msg} />
      )}
      <Loader loading={fetchingData}>
        {issues.length > 0 && (
        <Styled.IssuesList>
          <Styled.TableHeader>
            <Styled.TitleCell>Title</Styled.TitleCell>
            <Styled.DescriptionCell>Description</Styled.DescriptionCell>
            <Styled.StatusCell>State</Styled.StatusCell>
          </Styled.TableHeader>
          {issues.map((issue, index) => (
            <Styled.TableRow key={issue.slug}>
              <Styled.TitleCell>{issue.title}</Styled.TitleCell>
              <Styled.DescriptionCell>{issue.description}</Styled.DescriptionCell>
              <Styled.StatusCell>
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
              </Styled.StatusCell>
            </Styled.TableRow>
          ))}
        </Styled.IssuesList>
        )}
        {issues.length === 0 && (
        <Styled.EmptyListText>No issues available</Styled.EmptyListText>
        )}
      </Loader>
    </>
  );
};

export default IssuesList;
