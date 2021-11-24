import React, { useState, useEffect } from 'react';
import './styles/App.css';
import { API } from 'aws-amplify';
import { withAuthenticator, 
  // AmplifySignOut 
} from '@aws-amplify/ui-react';
import { listVisitors } from './graphql/queries';
import { createVisitor as createVisitorMutation, deleteVisitor as deleteVisitorMutation } from './graphql/mutations';

// adding auth
// import Amplify, { Auth } from 'aws-amplify';
// import awsconfig from './aws-exports';
// Amplify.configure(awsconfig);

const initialFormState = { visName: '', visEmail: '' }

function App() {
  const [Visitors, setVisitors] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchVisitors();
  }, []);

  async function fetchVisitors() {
    const apiData = await API.graphql({ query: listVisitors });
    setVisitors(apiData.data.listVisitors.items);
  }

  async function createVisitor() {
    if (!formData.visName || !formData.visEmail) return;
    await API.graphql({ query: createVisitorMutation, variables: { input: formData } });
    setVisitors([ ...Visitors, formData ]);
    setFormData(initialFormState);
  }

  async function deleteVisitor({ id }) {
    const newVisitorsArray = Visitors.filter(Visitor => Visitor.id !== id);
    setVisitors(newVisitorsArray);
    await API.graphql({ query: deleteVisitorMutation, variables: { input: { id } }});
  }

  async function hideBaby(){
    const baby = document.getElementById("baby");
    baby.style.display = 'none';
  }

  return (
    <div className="App">
      <h1>My Visitors App</h1>
      <input
        onChange={e => setFormData({ ...formData, 'visName': e.target.value})}
        placeholder="Name:"
        value={formData.visName}
      />
      <input
        onChange={e => setFormData({ ...formData, 'visEmail': e.target.value})}
        placeholder="Email:"
        value={formData.visEmail}
      />
      <button onClick={createVisitor}>Create Visitor</button>
      {/* --------------------------------------------------------- */}
      <span id="baby"> BABY BABY BABY BABY BABY </span>
      <button onClick={hideBaby}>Hide Baby</button>
      {/* --------------------------------------------------------- */}
      <div style={{marginBottom: 30}}>
        {
          Visitors.map(Visitor => (
            <div key={Visitor.id || Visitor.visName}>
              <h2>{Visitor.visName}</h2>
              <p>{Visitor.visEmail}</p>
              <button onClick={() => deleteVisitor(Visitor)}>Delete Visitor</button>
            </div>
          ))
        }
      </div>
      {/* <AmplifySignOut/> */}
    </div>
  );
}

export default withAuthenticator(App);