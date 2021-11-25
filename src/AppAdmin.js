import React from 'react';
import '../public/scripts/admin-public';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

// adding auth
// import Amplify, { Auth } from 'aws-amplify';
// import awsconfig from './aws-exports';
// Amplify.configure(awsconfig);

function AdminAuth(){
    // async function signIn() {
    //     try {
    //         const user = await Auth.signIn(username, password);
    //     } catch (error) {
    //         console.log('error signing in', error);
    //     }
    // }

    // async function signOut() {
    //     try {
    //         await Auth.signOut();
    //     } catch (error) {
    //         console.log('error signing out: ', error);
    //     }
    // }

    return (
        <div className="AdminAuth">
        <p>Administrative Log In</p>
        </div>
      );
}

export default AdminAuth;