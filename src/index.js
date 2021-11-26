import InsertVisitor from './App';
import {UserResultsView, AnalyticsView, AccountMgmtView, AdvancedAdminView, ViewEntries} from './AdminTerminal';

import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';

import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

ReactDOM.render(
  // <React.StrictMode>
    <InsertVisitor/>, document.getElementById('visitor-info')
);

ReactDOM.render(
  <React.StrictMode> 
    <UserResultsView/>, <ViewEntries/>
  </React.StrictMode>, 
  document.getElementById('main-user-results')
);

ReactDOM.render(<AnalyticsView/>, document.getElementById('main-analytics'));

ReactDOM.render(<AccountMgmtView/>, document.getElementById('main-acct-mgmt'));

ReactDOM.render(<AdvancedAdminView/>, document.getElementById('main-advanced'));

reportWebVitals();
