function validate(){
var number=document.getElementById("user").value;
var reg=/^[0-9]{8}$/;
if(number.match(reg)){
document.getElementById('uerror').innerHTML="";
}
else{
document.getElementById('uerror').innerHTML="<b style='color:red'>Invalid Consumernumber</b>";
}
var name=document.getElementById("name").value;
var reg1=/^[A-Z][A-Za-z]{3,}$/;
if(name.match(reg1)){
document.getElementById('nerror').innerHTML="";
}
else{
document.getElementById('nerror').innerHTML="<b style='color:red'>Invalid Consumername</b>";
}
var mail=document.getElementById("mail").value;
var reg2=/^[a-zA-Z0-9]+[@][0-9A-Za-z]+[.][a-zA-Z]+$/;
if(mail.match(reg2)){
document.getElementById('serror').innerHTML="";
}
else{
document.getElementById('serror').innerHTML="<b style='color:red'>Invalid Mailid</b>";
}
var num=document.getElementById("number").value;
var reg3=/^[0-9]{8}$/;
if(num.match(reg3)){
document.getElementById('error').innerHTML="";
}
else{
document.getElementById('error').innerHTML="<b style='color:red'>Invalid Number</b>";
}
}