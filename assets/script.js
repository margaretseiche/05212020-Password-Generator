// Assignment Code
var generateBtn = document.querySelector("#generate");

// setting variables --- Initial password length set to 0
var passwordLength = "0";

// arrays set for possible password components
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var number = ["0","1","2","3","4","5","6","7","8","9"];
var special = ["!","@","#","$","%","^","*","?"];
var pooledArrayObject = {};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {

  var passwordLength = prompt("Passwords can be between 8 and 128 characters.  How long would you like your password to be?");
      
      while(passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
        passwordLength = prompt("Please pick a number between 8 and 128.");
      }

      passwordLength = parseInt(passwordLength);
              
  var lowercasePrompt = confirm("Would you like to include lowercase letters?");
  var uppercasePrompt = confirm("Would you like to include uppercase letters?");
  var numberPrompt = confirm("Would you like to include numbers?");
  var specialPrompt = confirm("Would you like to include special characters (like punctuation marks)?");

      while(lowercasePrompt === false && uppercasePrompt === false && numberPrompt === false && specialPrompt === false) {
        var universalPrompt = alert("You must select one of the character types to generate a password.");
        var lowercasePrompt = confirm("Would you like to include lowercase letters?");
        var uppercasePrompt = confirm("Would you like to include uppercase letters?");
        var numberPrompt = confirm("Would you like to include numbers?");
        var specialPrompt = confirm("Would you like to include special characters (like punctuation marks)?");
      }
    
  var passwordText = document.querySelector("#password");         
  var password = generatePassword();
  
  passwordText.value = password;

    function generatePassword() {
      var finalPassword = "";
      for (var i = 0; i < passwordLength; i++) {
        if(lowercasePrompt === true && finalPassword.length < passwordLength) {
          var random = Math.floor(Math.random() * lowercase.length);
          finalPassword = finalPassword + lowercase[random];
        }
        if (uppercasePrompt === true && finalPassword.length < passwordLength) {
          var random = Math.floor(Math.random() * uppercase.length);
          finalPassword = finalPassword + uppercase[random];
        }              
        if (numberPrompt === true && finalPassword.length < passwordLength) {
          var random = Math.floor(Math.random() * number.length);
          finalPassword = finalPassword + number[random];
        }          
        if (specialPrompt === true && finalPassword.length < passwordLength) {  
          var random = Math.floor(Math.random() * special.length);
          finalPassword = finalPassword + special[random];
        }
        else if (finalPassword.length = passwordLength) {
          return finalPassword;
        }  
        }
    }
}