// Assignment Code
const generateBtn = $("#generate");

// setting variables --- Initial password length set to 0
let passwordLength = "0";

// arrays set for possible password components
const lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const number = ["0","1","2","3","4","5","6","7","8","9"];
const special = ["!","@","#","$","%","^","*","?"];

// Add event listener to generate button
generateBtn.on("click", writePassword);

// Write password to the #password input  
function writePassword() {    

  let passwordLength = prompt("Passwords can be between 8 and 128 characters.  How long would you like your password to be?");
      
      while(passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
        passwordLength = prompt("Please pick a number between 8 and 128.");
      }

      passwordLength = parseInt(passwordLength);
              
  let lowercasePrompt = confirm("Would you like to include lowercase letters?");
  let uppercasePrompt = confirm("Would you like to include uppercase letters?");
  let numberPrompt = confirm("Would you like to include numbers?");
  let specialPrompt = confirm("Would you like to include special characters (like punctuation marks)?");

      while(lowercasePrompt === false && uppercasePrompt === false && numberPrompt === false && specialPrompt === false) {
        alert("You must select one of the character types to generate a password.");
        lowercasePrompt = confirm("Would you like to include lowercase letters?");
        uppercasePrompt = confirm("Would you like to include uppercase letters?");
        numberPrompt = confirm("Would you like to include numbers?");
        specialPrompt = confirm("Would you like to include special characters (like punctuation marks)?");
      }
         
  let passwordText = document.querySelector("#password");         
  var password = generatePassword();
  
  passwordText.value = password;

    function generatePassword() {  
      let finalPassword = "";
      for (let i = 0; i < passwordLength; i++) {
        if(lowercasePrompt === true && finalPassword.length < passwordLength) {
          let random = Math.floor(Math.random() * lowercase.length);
          finalPassword += lowercase[random];
        }
        if (uppercasePrompt === true && finalPassword.length < passwordLength) {
          let random = Math.floor(Math.random() * uppercase.length);
          finalPassword += uppercase[random];
        }              
        if (numberPrompt === true && finalPassword.length < passwordLength) {
          let random = Math.floor(Math.random() * number.length);
          finalPassword += number[random];
        }          
        if (specialPrompt === true && finalPassword.length < passwordLength) {  
          let random = Math.floor(Math.random() * special.length);
          finalPassword += special[random];
        }       
      }
      return finalPassword; 
    }
}