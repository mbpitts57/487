import React, { useState, useEffect } from 'react';
import './App.css';
import { API } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listVisitors } from './graphql/queries';
import { createVisitor as createVisitorMutation, deleteVisitor as deleteVisitorMutation } from './graphql/mutations';

const initialFormState = { visName: '', visEmail: '' }

function App() {
  const [Visitor, setVisitor] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchVisitor();
  }, []);

  async function fetchVisitor() {
    const apiData = await API.graphql({ query: listVisitors });
    setVisitor(apiData.data.listVisitors.items);
  } 

  async function createVisitor() {
    if (!formData.visName || !formData.visEmail) return;
    await API.graphql({ query: createVisitorMutation, variables: { input: formData } });
    setVisitor([ ...Visitor, formData ]);
    setFormData(initialFormState);
  }

  async function deleteVisitor({ id }) {
    const newVisitorArray = Visitor.filter(Visitor => Visitor.id !== id);
    setVisitor(newVisitorArray);
    await API.graphql({ query: deleteVisitorMutation, variables: { input: { id } }});
  }

  return (
    <div className="App">
      <h1>My Visitor App</h1>
      <input
        onChange={e => setFormData({ ...formData, 'visName': e.target.value})}
        placeholder="Visitor name"
        value={formData.visName}
      />
      <input
        onChange={e => setFormData({ ...formData, 'visEmail': e.target.value})}
        placeholder="Visitor visEmail"
        value={formData.visEmail}
      />
      <button onClick={createVisitor}>Create Visitor</button>
      <div style={{marginBottom: 30}}>
        {
          Visitor.map(Visitor => (
            <div key={Visitor.id || Visitor.visName}>
              <h2>{Visitor.visName}</h2>
              <p>{Visitor.visEmail}</p>
              <button onClick={() => deleteVisitor(Visitor)}>Delete Visitor</button>
            </div>
          ))
        }
      </div>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);