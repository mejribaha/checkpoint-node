 const nodemailer=require('nodemailer');

 const transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
user:'email@gmail.com',
pass:'password'
    }
 });

 const mailOptions={
from:'email@gmail.com',
to:'receiver-email@gmail.com',
subject:'test Email',
text:'Hello , this is a test email sent from Node.js'
 };

 transporter.sendMail(mailOptions, function(error, info){
if(error){
console.log(error);

}else{
console.log('Email sent:'+info.response);
}
 });