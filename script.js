
// Array to return random characters //
var nums = "0123456789";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var special = '!@#$%^&*()';
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Random character function //
function randomCharacter(str) {
  return str[Math.floor(Math.random() * str.length)]
}

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Prompts/confirmations //
function generatePassword() {
  var responseUpper = confirm("Would you like Uppercase");
  var chosenChars = "";
  if (responseUpper) {
    console.log("Ok was pressed");
    chosenChars += uppercase
  } else {
    console.log("Cancel was pressed");
  }
  var responseLower = confirm("Would you like LowerCase");
  if (responseLower) {
    console.log("Ok was pressed");
    chosenChars += lowercase
  } else {
    console.log("Cancel was pressed");
  }
  var responseNumbers = confirm("Would you like Numbers");
  if (responseNumbers) {
    console.log("Ok was pressed");
    chosenChars += nums
  } else {
    console.log("Cancel was pressed");
  }
  var responseSymbols = confirm("Would you like Symbols");
  if (responseSymbols) {
    console.log("Ok was pressed");
    chosenChars += special
  } else {
    console.log("Cancel was pressed");
  }
  var responseLength = prompt("How long would you like your password", "Enter number here");
  if (responseLength){
  console.log(responseLength)
  }

  
  var passwordGenerated = "";

  // for loop to return responseLength characters //
  for(i=0; i<responseLength; i++) {
    passwordGenerated += randomCharacter(chosenChars)
    console.log(passwordGenerated)
  }

  return passwordGenerated
}

generateBtn.addEventListener("click", writePassword);
