import './styles/App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

function AdminLogin() {
    return (
    <div className="AdminLogin">
      <AmplifySignOut />
    </div>
    );
}

export default withAuthenticator(AdminLogin);