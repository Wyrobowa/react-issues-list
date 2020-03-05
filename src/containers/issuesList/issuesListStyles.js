import styled from 'styled-components';

const IssuesList = styled.div`
  display: flex;
  flex-flow: column;
`;

const TableRow = styled.div`
  display: flex;
`;

const TableHeader = styled(TableRow)`
  font-weight: bold;
  text-transform: uppercase;
  background-color: #ddd;
`;

const Cell = styled.div`
  width: calc(100%/3);
  padding: 1em;
  text-align: left;
`;

const EmptyListText = styled.div`
  padding: 1em;
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
`;

export {
  IssuesList,
  TableHeader,
  TableRow,
  Cell,
  EmptyListText,
};
