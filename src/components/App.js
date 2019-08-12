import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Routes from './Routes';

const App = () => (
  <div>
    <Router>
      <Routes />
    </Router>
  </div>
);

export default hot(module)(App);
