import "./styles/index.css";
import reportWebVitals from "./reportWebVitals";

import React, { useState, useEffect } from "react";
import "./styles/App.css";
import { API } from "aws-amplify";
// import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listVisitors } from "./graphql/queries";
import { deleteVisitor as deleteVisitorMutation } from "./graphql/mutations";

// ---------------------------------------------------------------------------------------------------------------

export function ViewEntries() {
  const [Visitors, setVisitors] = useState([]);

  useEffect(() => {
    fetchVisitors();
  }, []);

  async function fetchVisitors() {
    const apiData = await API.graphql({ query: listVisitors });
    setVisitors(apiData.data.listVisitors.items);
  }

  async function deleteVisitor({ id }) {
    const newVisitorsArray = Visitors.filter((Visitor) => Visitor.id !== id);
    setVisitors(newVisitorsArray);
    await API.graphql({
      query: deleteVisitorMutation,
      variables: { input: { id } },
    });
  }

  return (
    <div className="App">
      <h1>Review User Entries</h1>
      <div style={{ marginBottom: 30 }}>
        {Visitors.map((Visitor) => (
          <div key={Visitor.id || Visitor.name}>
            <h2>{Visitor.name}</h2>
            <p>{Visitor.description}</p>
            <button onClick={() => deleteVisitor(Visitor)}>
              Delete Visitor
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// --------------------------------------------------------------------------------------------------------------------

export function UserResultsView() {
  return (
    <div className="UserResultsView">
      <div class="main-content">
        <div class="search-bar">((search icon)) Search: </div>
        <div class="filter-users">((button, dropdown menu)Filter Results</div>
        <div>
          [search bar, filter by scores, name alphabetical, most recent, oldest
          rows of all user inputs fetched from database]
        </div>
      </div>
    </div>
  );
}

export function AnalyticsView() {
  return (
    <div className="AnalyticsView">
      <div class="main-content">
        [visualisations/graphs, button where data can be downloaded as a csv
        file if clicked]
      </div>
    </div>
  );
}

export function AccountMgmtView() {
  return (
    <div className="AccountMgmtView">
      <div class="main-content">
        [request password change link to be sent to email]
      </div>
    </div>
  );
}

export function AdvancedAdminView() {
  return (
    <div className="AdvancedAdminView">
      <div class="main-content">
        [tools for advanced admins. can create new accounts, can send reset
        password links to admin emails can view list of all admin accounts]
      </div>
    </div>
  );
}

reportWebVitals();

// export default withAuthenticator(ViewEntries);
