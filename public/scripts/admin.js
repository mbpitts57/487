var FP_FIELD = document.getElementById('fp-field');
var ADMIN_LOGIN = document.getElementById('admin-login');

function show_fp_field(){
    if (FP_FIELD.style.display == 'none'){
        COG_ASSESSMENT.style.display = 'flex';
    } else {
        FP_FIELD.style.display == 'flex';
        COG_ASSESSMENT.style.display = 'none';
    }
    console.log("clicked button to toggle admin login and forgotten password field.")
}
