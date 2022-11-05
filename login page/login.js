function showPassword() {
let pwd = document.getElementById("Password")
    if(pwd.type == "password"){
        pwd.type = "text";
    }
   else if(pwd.type == "text"){
        pwd.type = "password";
    }
}



