// Random object which are linked to the below functions.

// var randomFunction = {
//   lower: randomLower,
//   upper: randomUpper,
//   number: randomNumber,
//   symbol: randomSymbol,
// };

// Should I use functions or an array? 
var nums = "0123456789";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var special = '!@#$%^&*()';
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var passwordLength = length;
// var password = "";


// Functions to return random outputs. "String" is static and always results in a string. ".fromCharCode" means from the character code list. "Math" is static and doesn't require an object. ".floor" means rounds down. ".random" randomizes the output.

// function randomLower() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }

// function randomUpper() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }

// function randomNumber() {
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }

function randomCharacter(str) {
  return str[Math.floor(Math.random() * str.length)]
}

// output for password object
// console.log(randomFunction.lower());
// console.log(randomFunction.upper());
// console.log(randomFunction.number());
// console.log(randomFunction.symbol());

//----------I didn't touch the middle portion----------------

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button

//----------I didn't touch the middle portion---------


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

  var passwordGenerated = "";

  for(i=0; i<8; i++) {
    passwordGenerated += randomCharacter(chosenChars)
    console.log(passwordGenerated)
  }

  return passwordGenerated
}

generateBtn.addEventListener("click", writePassword);
