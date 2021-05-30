// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordGen;
var upperChar;
var lengthChar;
var capital;
var password;
var passwordCharacters;




//create password begins
var generatePassword = function() {
  //ask for length of password
  lengthChar = window.prompt ("Please specify length of password (length must be between 8 and 128) ");

    if (lengthChar === "" || lengthChar === null) {
      window.alert("Please provide a value between 8 and 128");
      return generatePassword(); 
    }  

    else (lengthChar >7 && lengthChar <=128) 
      window.alert("you have chosen " + lengthChar + " characters");
      chooseCharacterTypes();      
    };  
  
//-----------------------------------------------------------------------------    
//function where user selects character types
var chooseCharacterTypes = function () {
  
  var capital= window.confirm("Would you like to include capital letters to your password?");
  var lower = window.confirm("Would you like to include lowercase letters to your password?");
  var special= window.confirm("Would you like to include special characters to your password?");
  var numbers =window.confirm("Would you like to include numbers to your password?");

  if (!capital && !lower && !special && !numbers) {
    window.alert ("you must select at least one from the options");
    return chooseCharacterTypes();
  }
  
  else if (capital && lower && special && numbers) {
   passwordCharacters = upperChar() + lowerChar() + specialChar() + numberChar();
    console.log(passwordCharacters);
  }
  else if (capital && lower && special && !numbers) {
    passwordCharacters = upperChar() + lowerChar() + specialChar();
     console.log(passwordCharacters);
   }
   else if (capital && lower && !special && numbers) {
    passwordCharacters = upperChar() + lowerChar() + numberChar();
     console.log(passwordCharacters);
   }
   else if (capital && !lower && special && numbers) {
    passwordCharacters = upperChar() + specialChar() + numberChar();
     console.log(passwordCharacters);
   }
   else if (!capital && lower && special && numbers) {
    passwordCharacters = lowerChar() + specialChar() + numberChar();
     console.log(passwordCharacters);
   }
   else if (capital && lower && !special && !numbers) {
    passwordCharacters = upperChar() + lowerChar();
     console.log(passwordCharacters);
   }
   else if (capital && !lower && special && !numbers) {
    passwordCharacters = upperChar() + specialChar();
     console.log(passwordCharacters);
   }
   else if (!capital && lower && special && !numbers) {
    passwordCharacters = lowerChar() + specialChar();
     console.log(passwordCharacters);
   }
   else if (capital && !lower && !special && !numbers) {
    passwordCharacters = upperChar();
     console.log(passwordCharacters);
   }
   else if (!capital && lower && !special && !numbers) {
    passwordCharacters = lowerChar();
     console.log(passwordCharacters);
   }
   else if (!capital && !lower && !special && numbers) {
    passwordCharacters = numberChar();
     console.log(passwordCharacters);
   }
   else if (!capital && !lower && special && !numbers) {
    passwordCharacters = specialChar();
     console.log(passwordCharacters);
   }
   else if (!capital && lower && !special && numbers) {
    passwordCharacters = lowerChar() + numberChar();
     console.log(passwordCharacters);
   }
   else if (!capital && !lower && special && numbers) {
    passwordCharacters = specialChar() + numberChar();
     console.log(passwordCharacters);
   }
   else if (capital && !lower && !special && numbers) {
    passwordCharacters = upperChar() + numberChar();
     console.log(passwordCharacters);
   }
};

 

//**************************************
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


//iteration
function pwdg() {
var pssword = "";
for (var i = 0; i< lengthChar; i++) {
  var characterList =passwordCharacters[Math.floor(Math.random()*passwordCharacters.length)];
  pssword= pssword+characterList;
  console.log(pssword);
}
return pssword;
}



 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = pwdg();

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
