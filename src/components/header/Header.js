import React from 'react';

// Styles
import * as Styled from './headerStyles';

const Header = () => (
  <Styled.Header>
    <Styled.Title>Issues Management</Styled.Title>
    <Styled.HeaderLink to="/">Issues List</Styled.HeaderLink>
    <Styled.HeaderLink to="/add">Add Issue</Styled.HeaderLink>
  </Styled.Header>
);

export default Header;
