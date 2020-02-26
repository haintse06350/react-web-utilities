import React, { Component } from 'react';
import { DashboardLayout } from './components/DashboardLayout';
import withTheme from './withTheme';

import { BrowserRouter as Router } from 'react-router-dom';

export const App = withTheme(class extends Component {

  render() {
    return (
      <Router>
        <DashboardLayout />
      </Router>
    )
  }
});
