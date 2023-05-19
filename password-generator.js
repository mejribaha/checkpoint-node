const generatePassword=require('generate-password');
function generateRandomPassword(){
const password=generatePassword.generate({
    length:10,
    number:true,
symbols:true,
uppercase:true,
strict:true,
});
console.log(password);
}
generateRandomPassword();