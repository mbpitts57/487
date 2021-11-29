import "../styles/index.css";
import reportWebVitals from "../reportWebVitals";

import React, { useState, useEffect } from "react";
import "../styles/App.css";
import { API } from "aws-amplify";
import { withAuthenticator, AmplifySignOut, AmplifyAuthenticator, AmplifyAuthContainer, AmplifySignUp } from '@aws-amplify/ui-react';
import { listVisitors } from "../graphql/queries";
import { deleteVisitor as deleteVisitorMutation } from "../graphql/mutations";
// import { Visitor } from '../models';
import '../styles/App.css';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';

import * as queries from '../graphql/queries';
// import { withAuthenticator } from "@aws-amplify/ui-react";

// ---------------------------------------------------------------------------------------------------------------

export function AdminTerminal2() {
  const [Visitors, setVisitors] = useState([]);
  const [authState, setAuthState] = React.useState();
  const [user, setUser] = React.useState();

  var USER_RESULTS = document.getElementById("main-user-results");
  var ANALYTICS = document.getElementById("main-analytics");
  var ACCT_MGMT = document.getElementById("main-acct-mgmt");
  var ADVANCED = document.getElementById("main-advanced");

  // shows user results tab in adminal terminal main
  function show_user_results() {
    USER_RESULTS.style.display = "flex";
    ANALYTICS.style.display = "none";
    ACCT_MGMT.style.display = "none";
    ADVANCED.style.display = "none";
    console.log("show user results in admin terminal main");
  }

  // shows analytics tab in adminal terminal main
  function show_analytics() {
    USER_RESULTS.style.display = "none";
    ANALYTICS.style.display = "flex";
    ACCT_MGMT.style.display = "none";
    ADVANCED.style.display = "none";
    console.log("show analytics in admin terminal main");
  }

  // shows account management tab in adminal terminal main
  function show_acct_mgmt() {
    USER_RESULTS.style.display = "none";
    ANALYTICS.style.display = "none";
    ACCT_MGMT.style.display = "flex";
    ADVANCED.style.display = "none";
    console.log("show account managment in admin terminal main");
  }

  // shows advanced tab in adminal terminal main
  function show_advanced() {
    USER_RESULTS.style.display = "none";
    ANALYTICS.style.display = "none";
    ACCT_MGMT.style.display = "none";
    ADVANCED.style.display = "flex";
    console.log("show advanced in admin terminal main");
  }

  React.useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData)
    });
  }, []);

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
    console.log(newVisitorsArray)
    console.log('1');
    console.log(id);
    setVisitors(newVisitorsArray);
    console.log('2');
    console.log(id);
    await API.graphql({
      query: deleteVisitorMutation,
      variables: { id },
    });
    console.log('3');
  }

  return authState === AuthState.SignedIn && user ? (
    <AmplifyAuthContainer>
      <AmplifyAuthenticator>
        <AmplifySignOut />
        <div className="AdminTerminal2">
          <div className="admin-terminal-container">
            <span className="admin-terminal-title">Administrative Portal</span>
            <div className="admin-terminal-content">
              <nav className="admin-terminal-sidebar">
                <button type="button" onclick={show_user_results}> user results </button>
                <button type="button" onclick={show_analytics}> analytics </button>
                <button type="button" onclick={show_acct_mgmt}> account management </button>
                <button type="button" onclick={show_advanced}> advanced </button>
              </nav>
              <div className="admin-terminal-main">
                <div className="main-user-results" id="main-user-results">

                  <h1 className="admin-terminal-h1">Review User Entries</h1>
                  {/* shows a list of all user entries */}
                  <div className="fetchingVisitors">
                    <div className="main-content mc-fetch-visitors">
                      {Visitors.map((Visitor) => (
                        <div className="row" key={Visitor.id || Visitor.visName}>
                          <p>{Visitor.visName}&nbsp;</p>
                          <p>{Visitor.visEmail}&nbsp;</p>

                          {/* just changes this from visitor to visitor.id might not work */}
                          <button className="delete-btn" onClick={() => deleteVisitor(Visitor)}>
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
              </div>
              <div className="main-analytics" id="main-analytics">
                <div className="main-content">
                  [visualisations/graphs, button where data can be downloaded as a csv
                  file if clicked]
                </div>
              </div>
              <div className="main-acct-mgmt" id="main-acct-mgmt">
                <div className="main-content">
                  <div id="change-password"></div>
                  [request password change link to be sent to email]
                </div>
              </div>
              <div className="main-advanced" id="main-advanced">
                <div className="main-content">
                  <a href="https://us-east-2.console.aws.amazon.com/amplify/home?region=us-east-2#/dvrouwci8gops">Navigate
                    to the AWS Amplify Console</a>
                  [tools for advanced admins. can create new accounts, can send reset
                  password links to admin emails can view list of all admin accounts]
                </div>
              </div>
            </div>
          </div>
        </div>
      </AmplifyAuthenticator>
    </AmplifyAuthContainer>
  ) : (
    <AmplifyAuthContainer>
      <AmplifyAuthenticator>
        <AmplifySignUp
          slot="sign-up"
          formFields={[
            { type: "username" },
            { type: "password" },
            { type: "email" }
          ]}
        />
      </AmplifyAuthenticator>
    </AmplifyAuthContainer >
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

export default withAuthenticator(AdminTerminal2);

reportWebVitals();
