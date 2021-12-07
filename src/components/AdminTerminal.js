import "../styles/index.css";
import reportWebVitals from "../reportWebVitals";

import hobbies from '../Rplothobbies.jpg';
import sleep from '../Rplotsleep.jpg';
import vices from '../Rplotvices.jpg';

import React, { useState, useEffect } from "react";
import "../styles/App.css";
import { API } from "aws-amplify";
import { withAuthenticator, AmplifySignOut, AmplifySignIn, AmplifyAuthenticator, AmplifyAuthContainer } from '@aws-amplify/ui-react';
import { listEntrys } from "../graphql/queries";
import { deleteEntry as deleteEntryMutation } from "../graphql/mutations";
// import { Entry } from '../models';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';

import * as queries from '../graphql/queries';
// import { withAuthenticator } from "@aws-amplify/ui-react";

// ---------------------------------------------------------------------------------------------------------------

export function AdminTerminal() {
  const [Entrys, setEntrys] = useState([]);
  const [authState, setAuthState] = React.useState();
  const [user, setUser] = React.useState();

  var USER_RESULTS = document.getElementById("main-user-results");
  var ANALYTICS = document.getElementById("main-analytics");
  var ADVANCED = document.getElementById("main-advanced");

  // shows user results tab in adminal terminal main
  function show_user_results() {
    USER_RESULTS.style.display = "flex";
    ANALYTICS.style.display = "none";
    ADVANCED.style.display = "none";
    console.log("show user results in admin terminal main");
  }

  // shows analytics tab in adminal terminal main
  function show_analytics() {
    USER_RESULTS.style.display = "none";
    ANALYTICS.style.display = "flex";
    ADVANCED.style.display = "none";
    console.log("show analytics in admin terminal main");
  }

  // shows advanced tab in adminal terminal main
  function show_advanced() {
    USER_RESULTS.style.display = "none";
    ANALYTICS.style.display = "none";
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
    fetchEntrys();
  }, []);

  async function logEntries() {
    const allEntrys = await API.graphql({ query: queries.listEntrys });
    console.log(allEntrys);
  }

  async function fetchEntrys() {
    const apiData = await API.graphql({
      query: listEntrys
    });
    setEntrys(apiData.data.listEntrys.items);
  }

  async function deleteEntry({ id }) {
    const newEntrysArray = Entrys.filter((Entry) => Entry.id !== id);
    setEntrys(newEntrysArray);
    await API.graphql({
      query: deleteEntryMutation,
      variables: { id },
    });
  }

  return authState === AuthState.SignedIn && user ? (
    <AmplifyAuthContainer>
      <AmplifyAuthenticator>

        <div className="AdminTerminal2">
          <div className="admin-terminal-container">
            <span className="admin-terminal-title">Administrative Portal</span>
            <div className="admin-terminal-content">
              <nav className="admin-terminal-sidebar">
                <button type="button" onClick={show_user_results}> user results </button>
                <button type="button" onClick={show_analytics}> analytics </button>
                <button type="button" onClick={show_advanced}> advanced </button>
              </nav>

              <div className="admin-terminal-main">
                <div className="main-user-results" id="main-user-results">
                  {/* shows a list of all user entries */}
                  <div className="fetchingVisitors">
                    <h1 className="admin-terminal-h1">Review User Entries</h1>
                    <div className="main-content mc-fetch-visitors">
                      <p>Name  Email  Answer1  Answer2  Answer3  Answer4  Answer5  Answer6</p>
                      {Entrys.map((Entry) => (
                        <div className="row" key={Entry.id || Entry.visName}>
                          <p>{Entry.visName}&nbsp;</p>
                          <p>{Entry.visEmail}&nbsp;</p>
                          <p>{Entry.p_answer1}&nbsp;</p>
                          <p>{Entry.p_answer2}&nbsp;</p>
                          <p>{Entry.p_answer3}&nbsp;</p>
                          <p>{Entry.p_answer4}&nbsp;</p>
                          <p>{Entry.p_answer5}&nbsp;</p>
                          <p>{Entry.p_answer6}&nbsp;</p>
                          {/* <button className="delete-btn" onClick={() => deleteEntry(Entry)}>
                            Delete Entry
                          </button> */}
                        </div>))
                      }
                      <button onClick={logEntries}>
                        Console Log all Entrys
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-analytics" id="main-analytics">
                <div className="main-content imgs">
                  <img className="images" alt="" src={hobbies}></img>
                  <img className="images" alt="" src={sleep}></img>
                  <img className="images" alt="" src={vices}></img>
                </div>
              </div>
              <div className="main-advanced" id="main-advanced">
                <div className="main-content">
                  <a href="https://us-east-2.console.aws.amazon.com/amplify/home?region=us-east-2#/dvrouwci8gops">Navigate
                    to the AWS Amplify Console</a>
                  <br></br>
                  <br></br>
                  <br></br>
                  <AmplifySignOut />
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
        <AmplifySignIn slot="sign-in">
          <div slot="secondary-footer-content"></div>
        </AmplifySignIn>
      </AmplifyAuthenticator>
    </AmplifyAuthContainer >
  );
}

// --------------------------------------------------------------------------------------------------------------------


export default withAuthenticator(AdminTerminal);

reportWebVitals();
