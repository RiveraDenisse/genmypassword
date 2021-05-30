// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordGen;
var upperChar;
var lengthChar;
var capital;


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
  //ask for length of password
  var lengthChar = window.prompt ("Please specify length of password (length must be between 8 and 128) ");

    if (lengthChar === "" || lengthChar === null) {
      window.alert("Please provide a value between 8 and 128");
      return generatePassword(); 
    }  

    else (lengthChar >7 && lengthChar <=128) 
      window.alert("you have chosen " + lengthChar + " characters");
      chooseCapitals();      
    };  
  
//function where user selects character types
var chooseCapitals = function () {
  capital= window.confirm("Would you like to include capital letters?");

  //if user confirms then it will go to next question
  if (capital== true) {
    passwordGen = upperChar;
  }
};

//iteration
var createPassword = [];
for (var i = 0; i < lengthChar; i++) {
  // Generate a random number between 1 and 10
  // Math.floor will round down, meaning we would get a number between 0 and 9, so we'll always add 1 to bump it up.
  var passwordGenerated= passwordGen[Math.floor(Math.random()*passwordGen.length)];
  createPassword.push(passwordGenerated);
  //password = password +passwordGenerated;
  
}
  console.log (password, password.length);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
