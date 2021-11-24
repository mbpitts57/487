import React, { useState, useEffect } from 'react';
import './styles/App.css';
import { API } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut} from '@aws-amplify/ui-react';

// adding auth
// import Amplify, { Auth } from 'aws-amplify';
// import awsconfig from './aws-exports';
// Amplify.configure(awsconfig);