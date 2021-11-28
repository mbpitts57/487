// --- index variables ---------------------------------------------------------------------------------------------------
var PER_ASSESSMENT = document.getElementById("per");
var COG_ASSESSMENT = document.getElementById("cog");
var USER_INFO_FIELD = document.getElementById("visitor-info");
var USER_INFO_FIELD2 = document.getElementById("visitor-info-2");

var LANDING_TEXT = document.getElementById("landing");
var INDEX_PAGE = document.getElementById("index-page");

// --- admin login page variables ----------------------------------------------------------------------------------------
var ADMIN_LOGIN = document.getElementById('admin-login');

// --- admin terminal variables ------------------------------------------------------------------------------------------
var USER_RESULTS = document.getElementById("main-user-results");
var ANALYTICS = document.getElementById("main-analytics");
var ACCT_MGMT = document.getElementById("main-acct-mgmt");
var ADVANCED = document.getElementById("main-advanced");
var ADMIN_TERMINAL = document.getElementById("admin-terminal");

// --- index js ---------------------------------------------------------------------------------------------------

// for 'continue' button on personality assessment.
// hides personality assessment and shows cognitive assessment.
function toggle_visibility() {
  PER_ASSESSMENT.style.display = "none";
  COG_ASSESSMENT.style.display = "flex";
  console.log(
    "clicked 'continue'. hide personality assessment, show cognitive."
  );
}

// for 'go back' button on cognitive assessment.
// hides cognitive assessment and shows personality assessment.
function toggle_visibility_2() {
  COG_ASSESSMENT.style.display = "none";
  PER_ASSESSMENT.style.display = "flex";
  console.log(
    "clicked 'go back'. hide cognitive assessment, show personality."
  );
}

// for 'continue' button on cognitive assessment page.
// hides cognitive assessment and shows user info input page.
function toggle_visibility_3() {
  COG_ASSESSMENT.style.display = "none";
  USER_INFO_FIELD.style.display = "flex";
  USER_INFO_FIELD2.style.display = "flex";
  console.log(
    "clicked 'continue'. hide cognitive assessment, show user info input page."
  );
}

// for 'go back' button on user info input page.
// hides info input page and shows cognitive assessment.
function toggle_visibility_4() {
  USER_INFO_FIELD.style.display = "none";
  USER_INFO_FIELD2.style.display = "none";
  COG_ASSESSMENT.style.display = "flex";
  console.log(
    "clicked 'go back'. hide user info input page, show cognitive assessment."
  );
}

// for 'begin assessment' button on landing page.
// hides landing page text and shows personality assessment.
function toggle_visibility_5() {
  LANDING_TEXT.style.display = "none";
  PER_ASSESSMENT.style.display = "flex";
  console.log(
    "clicked 'begin assessment. hide landing page paragraph and show personality assessment"
  );
}

// if requirements for submission are met, assessment is submitted and answers, visitor name, and visitor email are stored in the database.
// confirmation email is sent and confirmation message is displayed.
// if requirements are not met, displays error message.
function submit_assessment() {
  console.log(
    "clicked 'submit assessment'. If assessment is properly completed, show thank you message and send confirmation email. If not properly completed, show error message."
  );
}

// --- admin login page ----------------------------------------------------------------------------------------------------

// --- admin terminal js ---------------------------------------------------------------------------------------------------

// shows admin terminal, hides everything else
function show_admin_terminal() {
  INDEX_PAGE.style.display = "none";
  ADMIN_TERMINAL.style.display = "flex";

  console.log(
    "clicked administrators button. show admin terminal, hide everything else."
  );
}

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

// hides the admin terminal and admin login page and shows the index page.
function hide_admin_terminal() {
  ADMIN_LOGIN.style.display = "none";
  ADMIN_TERMINAL.style.display = "none";
  INDEX_PAGE.style.display = "block";

  console.log(
    "clicked landing page button. hide admin terminal, show landing page."
  );
}



