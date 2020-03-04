import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 2em;
  padding: 1em;
  background-color: #343a40;
  color: #fff;
`;

const Title = styled.span`
  font-size: 1.5em;
  font-weight: bold;
`;

const HeaderLink = styled(Link)`
  margin-left: 2em;
  padding: .5em;
  text-decoration: none;
  text-align: center;
  border-radius: .25em;
  color: #fff;
  background-color: #6c757d;
`;

export {
  Header,
  Title,
  HeaderLink,
};
