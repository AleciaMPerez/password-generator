
// Random object which are linked to the below functions.

var randomFunction = {
  lower: randomLower,
  upper: randomUpper,
  number: randomNumber,
  symbol: randomSymbol
}



// Functions to return random outputs.
function randomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) +97)
}

function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) +65)
}

function randomNumber(){
  return String.fromCharCode(Math.floor(Math.random() *10) +48)
}

function randomSymbol(){
  return String.fromCharCode(Math.floor(Math.random() *15) +33)
}

// output for password object
console.log(randomFunction.lower())
console.log(randomFunction.upper())
console.log(randomFunction.number())
console.log(randomFunction.symbol())


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
generateBtn.addEventListener("click", writePassword);







//----------I didn't touch the middle portion---------


generateBtn.addEventListener("click", writePassword);

function writePassword() {
  
var responseUpper = confirm("Would you like Uppercase");
if (responseUpper) {
    console.log("Ok was pressed");
} else {
    console.log("Cancel was pressed");
}
var responseLower = confirm("Would you like LowerCase");
if (responseLower) {
    console.log("Ok was pressed");
} else {
    console.log("Cancel was pressed");
}
var responseNumbers = confirm("Would you like Numbers");
if (responseNumbers) {
    console.log("Ok was pressed");
} else {
    console.log("Cancel was pressed");
}
var responseSymbols = confirm("Would you like Symbols");
if (responseSymbols) {
    console.log("Ok was pressed");
} else {
    console.log("Cancel was pressed");
}
}
