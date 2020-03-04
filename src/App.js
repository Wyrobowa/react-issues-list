import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import Header from './components/header/Header';

// Containers
import Issue from './containers/issue/Issue';
import IssuesList from './containers/issuesList/IssuesList';

// Styles
import * as Styled from './appStyles';

function App() {
  return (
    <Router>
      <Styled.GlobalStyles />
      <Header />
      <Route exact path="/" component={IssuesList} />
      <Route exact path="/add" component={Issue} />
    </Router>
  );
}

export default App;
