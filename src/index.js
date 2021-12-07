import { InsertVisitor } from './App';
import { AdminTerminal } from './components/AdminTerminal';
import { InsertEntry } from './Assessment';
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
  <InsertEntry />, document.getElementById('insertentry')
);

ReactDOM.render(
  <React.StrictMode>
    <AdminTerminal />
  </React.StrictMode>, document.getElementById('admin-terminal-amplify')
);

reportWebVitals();
