function CalculateElectricityCharges(){
var consumer_no=document.getElementById('cno').value;
var consumer_name=document.getElementById('cname').value;
var email_addr=document.getElementById('mail').value;
var number_of_units=document.getElementById('nou').value;
var ebill;
if(consumer_no.length==8){
if(consumer_name.length>=3)
{
var mail_reg=/^[a-zA-Z0-9]+[@][a-zA-Z]+[.][A-Za-z]+$/;
if(email_addr.match(mail_reg)){
if(number_of_units.length>0)
{
if(number_of_units<=100){
ebill=number_of_units*2.96;
document.write("bill is:"+(ebill));
}
else{
ebill=number_of_units*5.56;
}
alert(consumer_no+""consumer_name+""email_addr+""number_of_units+""ebill);
return true;
{else
{
alert('Enter Number Of Units');
}
}
else{
alert('Invalid Emailid');
}
}
else{
alert('Consumer name must be min 3 characters in length');
}
}
else{
alert('Consumer number should be 8 digits');
}
return false;
}


