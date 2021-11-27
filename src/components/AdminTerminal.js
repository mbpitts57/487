import "../styles/index.css";
import reportWebVitals from "../reportWebVitals";

import React, { useState, useEffect } from "react";
import "../styles/App.css";
import { API } from "aws-amplify";
// import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listVisitors } from "../graphql/queries";
import { deleteVisitor as deleteVisitorMutation } from "../graphql/mutations";

import * as queries from '../graphql/queries';
// import { withAuthenticator } from "@aws-amplify/ui-react";

// ---------------------------------------------------------------------------------------------------------------

export function AdminTerminal() {
  const [Visitors, setVisitors] = useState([]);

  useEffect(() => {
    fetchVisitors();
  }, []);

  async function listEntries() {
    const allVisitors = await API.graphql({ query: queries.listVisitors });
    console.log(allVisitors);
  }

  async function fetchVisitors() {
    const apiData = await API.graphql({
      query: listVisitors
    });
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
    <div className="AdminTerminal">
      <h1>Review User Entries</h1>
      {/* shows a list of all user entries */}
      <div className="fetchingVisitors">
        <div className="main-content">
          {Visitors.map((Visitor) => (
            <div className="row" key={Visitor.id || Visitor.visName}>
              <p>{Visitor.visName}&nbsp;</p>
              <p>{Visitor.visEmail}&nbsp;</p>
              <button class="delete-btn" onClick={() => deleteVisitor(Visitor)}>
                Delete Visitor
              </button>
            </div>))
          }
          <button onClick={listEntries}>
            Console Log all Visitors
          </button>
        </div>

        <div className="search-bar">((search icon)) Search: </div>
        <div className="filter-users">((button, dropdown menu)Filter Results</div>
        <div>
          [search bar, filter by scores, name alphabetical, most recent, oldest
          rows of all user inputs fetched from database]
        </div>
      </div>
    </div>

  );
}

// --------------------------------------------------------------------------------------------------------------------

export function AnalyticsView() {
  return (
    <div className="Tab2" id="AnalyticsView">
      <div className="main-content">
        [visualisations/graphs, button where data can be downloaded as a csv
        file if clicked]
      </div>
    </div>
  );
}

export function AccountMgmtView() {
  return (
    <div className="Tab3" id="AccountMgmtView">
      <div className="main-content">
        [request password change link to be sent to email]
      </div>
    </div>
  );
}

export function AdvancedAdminView() {
  return (
    <div className="Tab4" id="AdvancedAdminView">
      <div className="main-content">
        [tools for advanced admins. can create new accounts, can send reset
        password links to admin emails can view list of all admin accounts]
      </div>
    </div>
  );
}

// export default withAuthenticator(AdminTerminal);

reportWebVitals();
