import React, { Component } from 'react';
import { DashboardLayout } from './components/DashboardLayout';
import withTheme from './withTheme';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export const App = withTheme(class extends Component {

  render() {
    return (
      <Router>
        <DashboardLayout>
          <Switch>
            <Route path="/react-web-utilities" component={() => <div>Dashboard</div>} />
            <Route path="/react-web-utilities/overview" component={() => <div>Overview</div>} />
            <Route path="/react-web-utilities/cards" component={() => <div>Cards</div>} />
            <Route path="/react-web-utilities/layout" component={() => <div>Layout</div>} />
            <Route path="/react-web-utilities/form" component={() => <div>Form</div>} />
            <Route path="/react-web-utilities/table" component={() => <div>Table</div>} />
            <Route path="/react-web-utilities/chart" component={() => <div>Chart</div>} />
          </Switch>
        </DashboardLayout>

      </Router>
    )
  }
});
