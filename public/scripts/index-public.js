var PER_ASSESSMENT = document.getElementById('per');
var COG_ASSESSMENT = document.getElementById('cog');
var USER_INFO_FIELD = document.getElementById('visitor-info');
var LANDING_TEXT = document.getElementById('landing-text');

// for 'continue' button on personality assessment. 
// hides personality assessment and shows cognitive assessment.
function toggle_visibility() {
    event.preventDefault();
    'use strict';
    PER_ASSESSMENT.style.display = 'none';
    COG_ASSESSMENT.style.display = 'flex';
    console.log("clicked 'continue'. hide personality assessment, show cognitive.")
}

// for 'go back' button on cognitive assessment. 
// hides cognitive assessment and shows personality assessment.
function toggle_visibility_2() {
    event.preventDefault();
    'use strict';
    COG_ASSESSMENT.style.display = 'none';
    PER_ASSESSMENT.style.display = 'flex';
    console.log("clicked 'go back'. hide cognitive assessment, show personality.")
}

// for 'continue' button on cognitive assessment page. 
// hides cognitive assessment and shows user info input page.
function toggle_visibility_3() {
    event.preventDefault();
    'use strict';
    COG_ASSESSMENT.style.display = 'none';
    USER_INFO_FIELD.style.display = 'flex';
    console.log("clicked 'continue'. hide cognitive assessment, show user info input page.")
}

// for 'go back' button on user info input page.
// hides info input page and shows cognitive assessment.
function toggle_visibility_4() {
    event.preventDefault();
    'use strict';
    USER_INFO_FIELD.style.display = 'none';
    COG_ASSESSMENT.style.display = 'flex';
    console.log("clicked 'go back'. hide user info input page, show cognitive assessment.")
}

// for 'begin assessment' button on landing page.
// hides landing page text and shows personality assessment.
function toggle_visibility_5(){
    'use strict';
    LANDING_TEXT.style.display = 'none';
    PER_ASSESSMENT.style.display = 'flex';
    console.log("clicked 'begin assessment. hide landing page paragraph and show personality assessment")
}

function submit_assessment() {
    'use strict';
    console.log("clicked 'submit assessment'. If assessment is properly completed, show thank you message and send confirmation email. If not properly completed, show error message.")
}