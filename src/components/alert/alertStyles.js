import styled from 'styled-components';

const Alert = styled.div`
  padding: .5rem 1rem;
  margin: 1rem;
  border: 1px solid transparent;
  border-radius: .25rem;
    
  ${({ type }) => type === 'success' && `
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
  `};
    
  ${({ type }) => type === 'danger' && `
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
  `};
    
  ${({ type }) => type === 'warning' && `
    color: #856404;
    background-color: #fff3cd;
    border-color: #ffeeba;
  `};
    
  ${({ type }) => type === 'info' && `
    color: #0c5460;
    background-color: #d1ecf1;
    border-color: #bee5eb;
  `};
`;

export {
  Alert,
};
