import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import InsertVisitor from './App';
import reportWebVitals from './reportWebVitals';

import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

ReactDOM.render(
  <React.StrictMode>
    <InsertVisitor/>
  </React.StrictMode>,
  document.getElementById('visitor-info')
);

reportWebVitals();
