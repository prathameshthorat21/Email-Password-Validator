// Made By Prathamesh Thorat
function psh(){
var pass = document.getElementById("pass");
var b = document.getElementById("psh");
    var i = 0;
    if(pass.type==="password"){
        pass.type = "text"; 
        b.innerHTML="Hide";
    }
    else{
        pass.type="password";    
        b.innerHTML="Show";
    }
}

function check(){
var span = document.getElementsByTagName("span");
var pass = document.getElementById("pass").value;
var email = document.getElementById("email").value;
var r1 = /[@]/;
var r2 = /[.]/;
var r3 = /[1-9]/;
var r4 = /[&]/;
var r5 = /[$]/;
var r6 = /[#]/;
var r7 = /[%]/;
var r8 = / /;
var r9 = /[+]/;
switch(r1.test(email)){
    case true:
    span[0].style.color="#229C32";
    break;
    default:
    span[0].style.color="red";
    break ;
}
switch(r2.test(email)){
    case true:
    span[1].style.color="#229C32";
    break;
    default:
    span[1].style.color="red";
    break ;
}
switch(r8.test(email)){
    case true:
    span[2].style.color="red";
    break;
    default:
    span[2].style.color="#229C32";
    break ;
}
if(pass.length>4 && pass.length<11){span[3].style.color="#229C32";}
else{span[3].style.color="red";}
switch(r3.test(pass)){
    case true :
    span[4].style.color="#229C32";
    break ;
    default :
    span[4].style.color="red";
    break ;
}
switch(r1.test(pass) || r4.test(pass) ||  r5.test(pass) || r6.test(pass) || r7.test(pass) || r9.test(pass) ){
    case true:
    span[5].style.color="#229C32";
    break;
    default:
    span[5].style.color="red";
    break;
}
switch(r8.test(pass)){
    case true:
    span[6].style.color="red";
    break ;
    default:
    span[6].style.color="#229C32";
    break ;
}
}