// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = 0;
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var number = ["0","1","2","3","4","5","6","7","8","9"];
var special = ["!","@","#","$","%","^","*","?"];


// Write password to the #password input
function writePassword() {
//  var password = generatePassword();
//  var passwordText = document.querySelector("#password");

  var passwordLength = prompt("Passwords can be between 8 and 128 characters.  How long would you like your password to be?");
      
        while(passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
          passwordLength = prompt("Please pick a number between 8 and 128.");
        }
        //while(isNaN(passwordLength)) {
        //var passwordLengthNotNumber = alert ("That is not a number.");
        //passwordLength = prompt("Please pick a number between 8 and 128.");    
        //}  
       
  var lowercasePrompt = confirm("Would you like to include lowercase letters?");
  var uppercasePrompt = confirm("Would you like to include uppercase letters?");
  var numberPrompt = confirm("Would you like to include numbers?");
  var specialPrompt = confirm("Would you like to include special characters (like punctuation marks)?");

  while(lowercasePrompt === false && uppercasePrompt === false && numberPrompt === false && specialPrompt === false) {
    var universal = alert("You must select one of the character types to generate a password.");
    var lowercasePrompt = confirm("Would you like to include lowercase letters?");
    var uppercasePrompt = confirm("Would you like to include uppercase letters?");
    var numberPrompt = confirm("Would you like to include numbers?");
    var specialPrompt = confirm("Would you like to include special characters (like punctuation marks)?");
  }

//  passwordText.value = password;
}    

  //////////////////WHEN I answer each prompt
  //////////////////THEN my input should be validated and at least one character type should be selected
  //////////////////WHEN all prompts are answered
  //////////////////THEN a password is generated that matches the selected criteria
  //////////////////WHEN the password is generated
  //////////////////THEN the password is either displayed in an alert or written to the page


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
