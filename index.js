var Menuitems=document.getElementById("Menuitems");
Menuitems.style.maxHeight="0px";

function menutoggle(){
    if( Menuitems.style.maxHeight =="0px")
    {
        Menuitems.style.maxHeight="200px"
    }
    else{
        Menuitems.style.maxHeight="0px"
    }

}

// toggle form//

var loginform=document.getElementById("loginform");
var regform=document.getElementById("regform");
var indicator= document.getElementById("indicator");

function register(){
    regform.style.transform = "translateX(0px)";
    loginform.style.transform= "translateX(0px)";
    indicator.style.transform= "translateX(100px)";
}
function login(){
    regform.style.transform = "translateX(300px)";
    loginform.style.transform= "translateX(300px)";
    indicator.style.transform= "translateX(0px)";
}