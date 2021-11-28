import '../styles/App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
// import '@aws-amplify/ui-react/styles.css';

import awsExports from '../aws-exports';
import React from 'react';
Amplify.configure(awsExports);

export function ChangePassword({ signOut, user }) {
    return (
        <div>
            {/* <h1>Hello {user.username}</h1>
            <button onClick={signOut}>Sign out</button> */}
        </div>
    );
}

export default withAuthenticator(ChangePassword);