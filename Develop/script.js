// Assignment Code
var generateBtn = document.querySelector("#generate");



//function for uppercase
function upperChar () {
  return String.fromCharCode(Math.floor(Math.random()*26)+65);  
}

//function for lowercase
function lowerChar () {
  return String.fromCharCode(Math.floor(Math.random()*26)+97);  
}

//function for number
function numberChar () {
  return String.fromCharCode(Math.floor(Math.random()*10)+48);  
}
//function for special character
function specialChar () {
  const randomSymbol = " \"!#$%&'()*+,-./:;<=>?@[]^_`{|}~"
  return randomSymbol[Math.floor(Math.random()*randomSymbol.length)];  
}

//test all random functions
console.log(specialChar());
console.log(lowerChar());
console.log(upperChar());
console.log(numberChar());

//create password begins
var generatePassword = function() {
  var lengthChar = window.prompt ("Please specify length of password (length must be between 8 and 128) ");
    if (lengthChar === "" || lengthChar === null) {
      window.alert("Please provide a value between 8 and 128");
      return generatePassword();
    }
}

console.log (generatePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
