// # 03 JavaScript: Password Generator

// Create an application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

// If you are unfamiliar with special characters, take a look at [some examples](https://www.owasp.org/index.php/Password_special_characters).

// ## User Story

// ```
// AS AN employee with access to sensitive data
// I WANT to randomly generate a password that meets certain criteria
// SO THAT I can create a strong password that provides greater security
// ```

// ## Acceptance Criteria

// ```
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// ```

// The following image demonstrates the application functionality:

// ![password generator demo](./Assets/03-javascript-homework-demo.png)

var characterLength = 8;
var lowerCase = false;
var upperCase = false;
var numeric = false;
var specialCharacters = false;

var specialCharArr = ['\u0021', '\u0023', '\u0024', '\u0025', '\u0026', '\u002A', '\u002B', '\u003C', '\u003F', '\u003E', '\u003D', '\u0040', '\u005E', '\u007B', '\u007D'];

var lowerCaseArr = ['\u0061', '\u0062', '\u0063', '\u0064', '\u0065', '\u0066', '\u0067', '\u0068', '\u0069', '\u006A', '\u006B', '\u006C', '\u006D', '\u006E', '\u006F', '\u0070', '\u0071', '\u0072', '\u0073', '\u0074', '\u0075', '\u0076', '\u0077', '\u0078', '\u0079', '\u007A'];

var upperCaseArr = ['\u0041', '\u0042', '\u0043', '\u0044', '\u0045', '\u0046', '\u0047', '\u0048', '\u0049', '\u004A', '\u004B', '\u004C', '\u004D', '\u004E', '\u004F', '\u0050', '\u0051', '\u0052', '\u0053', '\u0054', '\u0055', '\u0056', '\u0057', '\u0058', '\u0059', '\u005A'];

//HELPER FUNCTIONS
function randomLower() { return lowerCaseArr[Math.floor(Math.random() * lowerCaseArr.length)]; }
function randomUpper() { return upperCaseArr[Math.floor(Math.random() * upperCaseArr.length)]; }
function randomSpecialCharacter() { return specialCharArr[Math.floor(Math.random() * specialCharArr.length)]; }
function randomNumber() { return Math.floor(Math.random() * 10); }

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  var correctPrompt = getPrompts();
  if(correctPrompt) {
    var password = generatePassword();
    passwordText.value = password;
    passwordText.setAttribute("class", "password");
  } else {
    passwordText.value = "";
    passwordText.setAttribute("class", "");
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var result = "";

  //if the password only has lowerCase letters
  if (lowerCase && !upperCase && !specialCharacters && !numeric) {
    for (var i = 0; i < characterLength; i++) {
      result = result + randomLower();
    }
    return result;
  }
  //if the password only has upperCase letters
   else if (!lowerCase && upperCase && !specialCharacters && !numeric) {
    for (var i = 0; i < characterLength; i++) {
      result = result + randomUpper();
    }
    return result;
  }
  //if the password only has specialCharacters
  else if (!lowerCase && !upperCase && specialCharacters && !numeric) {
    for (var i = 0; i < characterLength; i++) {
      result = result + randomSpecialCharacter();
    }
    return result;
  }
  //if the password only has numbers
  else if (!lowerCase && !upperCase && !specialCharacters && numeric) {
    for (var i = 0; i < characterLength; i++) {
      result = result + randomNumber();
    }
    return result;
  }

  //if the password is made up of lowercase and uppercase letters
  else if (lowerCase && upperCase && !specialCharacters && !numeric) {
    for (var i = 0; i < characterLength; i++) {
      var decider = Math.floor(Math.random() * 2);
      if (decider === 0) result = result + randomLower();
      else result = result + randomUpper();
    }
    return result;
  }

  //if the password is made up lowercase letters and special characters
  else if (lowerCase && !upperCase && specialCharacters && !numeric) {
    for (var i = 0; i < characterLength; i++) {
      var decider = Math.floor(Math.random() * 2);
      if (decider === 0) result = result + randomLower();
      else result = result + randomSpecialCharacter();
    }
    return result;
  }

  //if the password is made up lowercase letters and numbers
  else if (lowerCase && !upperCase && !specialCharacters && numeric) {
    for (var i = 0; i < characterLength; i++) {
      var decider = Math.floor(Math.random() * 2);
      if (decider === 0) result = result + randomLower();
      else result = result + randomNumber();
    }
    return result;
  }

  //if the password is made up special characters and numbers
  else if (!lowerCase && !upperCase && specialCharacters && numeric) {
    for (var i = 0; i < characterLength; i++) {
      var decider = Math.floor(Math.random() * 2);
      if (decider === 0) result = result + randomSpecialCharacter();
      else result = result + randomNumber();
    }
    return result;
  }

  //if the password is made up upperCase letters and numbers
  else if (!lowerCase && upperCase && !specialCharacters && numeric) {
    for (var i = 0; i < characterLength; i++) {
      var decider = Math.floor(Math.random() * 2);
      if (decider === 0) result = result + randomUpper();
      else result = result + randomNumber();
    }
    return result;
  }

  //if the password is made up upperCase letters and special characters
  else if (!lowerCase && upperCase && specialCharacters && !numeric) {
    for (var i = 0; i < characterLength; i++) {
      var decider = Math.floor(Math.random() * 2);
      if (decider === 0) result = result + randomUpper();
      else result = result + randomSpecialCharacter();
    }
    return result;
  }

  //if the password is made up of lowercase, uppercase, and special characters
  else if (lowerCase && upperCase && specialCharacters && !numeric) {
    for (var i = 0; i < characterLength; i++) {
      var decider = Math.floor(Math.random() * 3);
      if (decider === 0) result = result + randomLower();
      if (decider === 1) result = result + randomUpper();
      else result = result + randomSpecialCharacter();
    }
    return result;
  }

  //if the password is made up of lowercase, uppercase, and numbers
  else if (lowerCase && upperCase && !specialCharacters && numeric) {
    for (var i = 0; i < characterLength; i++) {
      var decider = Math.floor(Math.random() * 3);
      if (decider === 0) result = result + randomLower();
      if (decider === 1) result = result + randomUpper();
      else result = result + randomNumber();
    }
    return result;
  }

   //if the password is made up of lowercase, special characters, and numbers
   else if (lowerCase && !upperCase && specialCharacters && numeric) {
    for (var i = 0; i < characterLength; i++) {
      var decider = Math.floor(Math.random() * 3);
      if (decider === 0) result = result + randomLower();
      if (decider === 1) result = result + randomSpecialCharacter();
      else result = result + randomNumber();
    }
    return result;
  }

  //if the password is made up of lowercase, special characters, and numbers
  else if (!lowerCase && upperCase && specialCharacters && numeric) {
    for (var i = 0; i < characterLength; i++) {
      var decider = Math.floor(Math.random() * 3);
      if (decider === 0) result = result + randomUpper();
      if (decider === 1) result = result + randomSpecialCharacter();
      else result = result + randomNumber();
    }
    return result;
  }

   //if the password is made up of lower, upper, special, and numbers
   else {
    for (var i = 0; i < characterLength; i++) {
      var decider = Math.floor(Math.random() * 4);
      if (decider === 0) result = result + randomLower();
      if (decider === 1) result = result + randomUpper();
      if (decider === 2) result = result + randomSpecialCharacter();
      else result = result + randomNumber();
    }
    return result;
  }
  return result; //it shouldn't get to this point

}

function getPrompts() {
  characterLength = parseInt(prompt("How many characters do you want your pass word to be? (From 8 128 characters"));
  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length has to be a number, 8 - 128 digits. Please try again.")
    return false;
  }
  lowerCase = confirm("Would you like lowercase letters in your password?");
  console.log(lowerCase);
  upperCase = confirm("Would you like upper case letters in your password?");
  numeric = confirm("Would you like numeric characters (1, 2, 3,...) in your password?");
  specialCharacters = confirm("Would you like special characters (!, @, #, ...) in your password?");
  return true;
}