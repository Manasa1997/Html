function validate(){
var username=document.getElementById("user").value;
var reg=/^[a-zA-Z0-9]{4,9}$/;
if(username.match(reg)){
document.getElementById('uerror').innerHTML="";
}
else{
document.getElementById('uerror').innerHTML="<b style='color:red'>Invalid Username</b>";
}
var mail=document.getElementById("mail").value;
var reg1=/^[a-zA-Z0-9]+[@][0-9A-Za-z]+[.][a-zA-Z]+$/;
if(mail.match(reg1))
{
document.getElementById('merror').innerHTML="";
}
else{
document.getElementById('merror').innerHTML="<b style='color:red'>Invalid Mail</b>";
}
var mobile=document.getElementById("Mobile").value;
var reg2=/^[6-9][0-9]{9}$/;
if(mobile.match(reg2))
{
document.getElementById('serror').innerHTML="";
}
else{
document.getElementById('serror').innerHTML="<b style='color:red'>Invalid MObile Number</b>";
}
var pass=document.getElementById("pass").value;
var reg3=/^(?=.*[0-9])(?=.*[a-z])(?=.*[_@#])(?=.*[a-z]).{8,}$/;
if(pass.match(reg3))
{
document.getElementById('perror').innerHTML="";
}
else{
document.getElementById('perror').innerHTML="<b style='color:red'>Invalid PassWord</b>";
}
return false;
}
