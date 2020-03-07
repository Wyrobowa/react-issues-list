import styled from 'styled-components';

const IssuesList = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  margin: 0 auto;
  @media (min-width: 1440px) {
    border: 1px solid #d6d8db;
  }
`;

const TableRow = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #d6d8db;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const TableHeader = styled(TableRow)`
  font-weight: bold;
  text-transform: uppercase;
  background-color: #ddd;
`;

const Cell = styled.div`
  width: 100%;
  padding: 1em;
  text-align: left;
  box-sizing: border-box;
`;

const TitleCell = styled(Cell)`
  @media (min-width: 768px) {
    width: 20%;
  }
`;

const DescriptionCell = styled(Cell)`
  @media (min-width: 768px) {
    width: 60%;
  }
`;

const StatusCell = styled(Cell)`
  @media (min-width: 768px) {
    width: 20%;
  }
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
  TitleCell,
  DescriptionCell,
  StatusCell,
  EmptyListText,
};
