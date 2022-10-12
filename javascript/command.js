
function clearErrors(){
    errors = document.getElementsByClassName("formerror");
    for(let item of errors)
        {
            item.innerHTML=" ";
        }
}
function seterror(id, error) {
    element = document.getElementById(id);
    element.getElementsByClassName("formerror")[0].innerHTML = error;
}

function validateForm() {
    clearErrors();
    var returnVal = true;
    var kudos = document.forms["myForm"]["fname"].value;
    if (kudos.length < 3) {
        seterror("name", "*Length of name is too short");
        returnVal = false;
    }

    var phone = document.forms["myForm"]["fphone"].value;

    if (phone.length != 10 || /^[0-9]*$/.test(phone) == false) {
        seterror("phone", "*Invalid phone number");
        returnVal = false;
    }

    var email = document.forms["myForm"]["fmail"].value;
    let atpos = email.indexOf("@");
    let dotpos = email.indexOf(".");
     
    if (dotpos - atpos < 2) {
        seterror("email", "*Enter a valid email address");
        returnVal = false;
    }

    var pass = document.forms["myForm"]["fpass"].value;

    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,20}$/.test(pass) == false) {
        seterror("pass", "*invalid");
        return returnVal = false;
    }


    var cpass = document.forms["myForm"]["fcpass"].value;

    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,20}$/.test(pass) == false) {
        seterror("cpass", "*invalid cpass");
        return returnVal = false;
    }
     
    if((pass===cpass)==false){
        alert("password and confirm password should match!");
        returnVal=false;
    }

    return returnVal;

}
