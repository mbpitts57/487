import { InsertVisitor } from './App';
// import { UserEntryView, AnalyticsView, AccountMgmtView, AdvancedAdminView } from './components/AdminTerminal';
import { AdminTerminal } from './components/AdminTerminal';
// import AdminLogin from './components/AdminLogin';

import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';

import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

ReactDOM.render(
  <InsertVisitor />, document.getElementById('visitor-info')
);

ReactDOM.render(
  <React.StrictMode>
    <AdminTerminal />
  </React.StrictMode>, document.getElementById('Ass')
);

reportWebVitals(console.log);
