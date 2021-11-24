var USER_RESULTS = document.getElementById('main-user-results');
var ANALYTICS = document.getElementById('main-analytics');
var ACCT_MGMT = document.getElementById('main-acct-mgmt');
var ADVANCED = document.getElementById('main-advanced');

// shows user results tab in adminal terminal main
function show_user_results(){
    event.preventDefault;
    USER_RESULTS.style.display = 'flex';
    ANALYTICS.style.display = 'none';
    ACCT_MGMT.style.display = 'none';
    ADVANCED.style.display = 'none';
    console.log('show user results in admin terminal main');
}

// shows analytics tab in adminal terminal main
function show_analytics(){
    event.preventDefault;
    USER_RESULTS.style.display = 'none';
    ANALYTICS.style.display = 'flex';
    ACCT_MGMT.style.display = 'none';
    ADVANCED.style.display = 'none';
    console.log('show analytics in admin terminal main');
}

// shows account management tab in adminal terminal main
function show_acct_mgmt(){
    event.preventDefault;
    USER_RESULTS.style.display = 'none';
    ANALYTICS.style.display = 'none';
    ACCT_MGMT.style.display = 'flex';
    ADVANCED.style.display = 'none';
    console.log('show account managment in admin terminal main');
}

// shows advanced tab in adminal terminal main
function show_advanced(){
    event.preventDefault;
    USER_RESULTS.style.display = 'none';
    ANALYTICS.style.display = 'none';
    ACCT_MGMT.style.display = 'none';
    ADVANCED.style.display = 'flex';
    console.log('show advanced in admin terminal main');
}