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


//----------I only touched the above. Didn't touch the below, yet----------------

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
