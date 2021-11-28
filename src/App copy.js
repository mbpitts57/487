import React
,
{ useState, useEffect }
  from 'react';
import './styles/App.css';
import { API } from 'aws-amplify';
import { listVisitors } from './graphql/queries';
import { createVisitor as createVisitorMutation } from './graphql/mutations';

const initialFormState = { visName: '', visEmail: '' };

export function InsertVisitor() {
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
    setVisitors([...Visitors, formData]);
    setFormData(initialFormState);
  }

  return (
    <div className="">
      <div className="user-input-field">
        <label className="p-text">Please Enter Your Full Name:</label>
        <input
          onChange={e => setFormData({ ...formData, 'visName': e.target.value })}
          placeholder=""
          value={formData.visName}
        />
        <br></br>
        <label className="p-text">Also Kindly Enter Your Email:</label>
        <input
          onChange={e => setFormData({ ...formData, 'visEmail': e.target.value })}
          placeholder=""
          value={formData.visEmail}
        />
        <br></br>

        <button type="submit" onClick={createVisitor}>Submit Assessment</button>
      </div>
    </div>
  );
}
