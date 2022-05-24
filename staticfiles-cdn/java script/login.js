
//  function Executes on click of login button.

function validate(){
var username = document.cont.username.value;
var password = document.cont.password.value;
if ( username == "user" && password == "123"){
     alert ("Login successfully");
     return true;
//location.href = "";// Redirecting to home page.

}
else{
    alert ("couldn’t login");  
    return false;
}

}