function clearErrors(){
    errors = document.getElementsByClassName("formerror");
    for(let item of errors)
        {
            item.innerHTML=" ";
        }
}
function seterror(id,error)
{
    element = document.getElementById(id);
    element.getElementsByClassName("formerror")[0].innerHTML = error;
}
function validateForm()
{
    var returnVal =true;
    clearErrors();
    var name = document.forms["myForm"]["fname"].value;

    if(name.length<3){
        seterror("name","*Length of the name is too short");
        returnVal=false;
    }

   var phone = document.forms["myForm"]["fphone"].value;

   if(phone.length!=10)
    {
        seterror("phone","*Invalid Phone number");
        returnVal=false;
    }

    var pass = document.forms["myForm"]["fpass"].value;
    var cpass = document.forms["myForm"]["fcpass"].value;
    if(pass.length < 8)
    {
        seterror("pass","*Length of password should be atleast 8 characters long");
        returnVal=false;
    }
    if(cpass.length < 8 )
    {
        seterror("cpass","*Length of password should be atleast 8 characters long");
        returnVal=false;
    }
    if(pass != cpass)
    {
        seterror("cpass","*Passwords dont match");
        returnVal=false;
    }
    return returnVal;

}
