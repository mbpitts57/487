import "../styles/index.css";
import reportWebVitals from "../reportWebVitals";

import React, { useState, useEffect } from "react";
import "../styles/App.css";
import { API } from "aws-amplify";
// import { withAuthenticator } from '@aws-amplify/ui-react';
import { listVisitors } from "../graphql/queries";
import { deleteVisitor as deleteVisitorMutation } from "../graphql/mutations";

import * as queries from '../graphql/queries';

//  ---------------------------------------------------------------------------------------------------------------

function AdminTerminal() {
  var USER_RESULTS = document.getElementById("main-user-results");
  var ANALYTICS = document.getElementById("main-analytics");
  var ACCT_MGMT = document.getElementById("main-acct-mgmt");
  var ADVANCED = document.getElementById("main-advanced");

  // --- entries view ----------------------------------------------------------------------------------
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

  // shows user results tab in adminal terminal main
  async function show_user_results() {
    USER_RESULTS.style.display = "flex";
    ANALYTICS.style.display = "none";
    ACCT_MGMT.style.display = "none";
    ADVANCED.style.display = "none";
    console.log("show user results in admin terminal main");
  }

  // --- analytics view ----------------------------------------------------------------------------------

  // shows analytics tab in adminal terminal main
  async function show_analytics() {
    USER_RESULTS.style.display = "none";
    ANALYTICS.style.display = "flex";
    ACCT_MGMT.style.display = "none";
    ADVANCED.style.display = "none";
    console.log("show analytics in admin terminal main");
  }

  // --- account management view ----------------------------------------------------------------------------------

  // shows account management tab in adminal terminal main
  async function show_acct_mgmt() {
    USER_RESULTS.style.display = "none";
    ANALYTICS.style.display = "none";
    ACCT_MGMT.style.display = "flex";
    ADVANCED.style.display = "none";
    console.log("show account managment in admin terminal main");
  }

  // --- advanced admin view  ----------------------------------------------------------------------------------

  // shows advanced tab in adminal terminal main
  async function show_advanced() {
    USER_RESULTS.style.display = "none";
    ANALYTICS.style.display = "none";
    ACCT_MGMT.style.display = "none";
    ADVANCED.style.display = "flex";
    console.log("show advanced in admin terminal main");
  }

  // --- return statement ----------------------------------------------------------------------------------
  return (
    <div className="AdminTerminal">
      {/* <div className="admin-terminal" id="admin-terminal2">
        <div className="admin-terminal-container2"> */}
      <span className="admin-terminal-title">Administrative Portal</span>
      {/* <div className="admin-terminal-content">
            <nav className="admin-terminal-sidebar">
              <button type="button" onClick={show_user_results}> user results </button>
              <button type="button" onClick={show_analytics}> analytics </button>
              <button type="button" onClick={show_acct_mgmt}> account management </button>
              <button type="button" onClick={show_advanced}> advanced </button>
            </nav>
            <div className="admin-terminal-main">
              <div className="main-user-results" id="main-user-results">
                <div className="fetchingVisitors">
                  <div className="main-content">
                    {Visitors.map((Visitor) => (
                      <div key={Visitor.id || Visitor.visName}>
                        <h2>{Visitor.visName}</h2>
                        <p>{Visitor.visEmail}</p>
                        <button onClick={() => deleteVisitor(Visitor)}>Delete Visitor</button>
                      </div>))}
                    <button onClick={listEntries}>Console Log all Visitors</button>
                  </div>

                  <div className="search-bar">((search icon)) Search: </div>
                  <div className="filter-users">((button, dropdown menu)Filter Results</div>
                  <div>
                    [search bar, filter by scores, name alphabetical, most recent, oldest
                    rows of all user inputs fetched from database]
                  </div>
                </div>
              </div>
              <div className="main-analytics" id="main-analytics">
                <div className="main-content">
                  [visualisations/graphs, button where data can be downloaded as a csv
                  file if clicked]
                </div>
              </div>
              <div className="main-acct-mgmt" id="main-acct-mgmt">
                <div className="main-content">
                  [request password change link to be sent to email]
                </div>
              </div>
              <div className="main-advanced" id="main-advanced">
                <div className="main-content">
                  [tools for advanced admins. can create new accounts, can send reset
                  password links to admin emails can view list of all admin accounts]
                </div>
              </div>
            </div> 
          </div> */}
      {/* </div>
      </div> */}
    </div>
  );
}

// export default withAuthenticator(AdminTerminal);
export default AdminTerminal;

reportWebVitals();
