// # 03 JavaScript: Password Generator
var characterLength = 8;
var choiceArr = [];

var specialCharArr = ['\u0021', '\u0023', '\u0024', '\u0025', '\u0026', '\u002A', '\u002B', '\u003C', '\u003F', '\u003E', '\u003D', '\u0040', '\u005E', '\u007B', '\u007D'];
var lowerCaseArr = ['\u0061', '\u0062', '\u0063', '\u0064', '\u0065', '\u0066', '\u0067', '\u0068', '\u0069', '\u006A', '\u006B', '\u006C', '\u006D', '\u006E', '\u006F', '\u0070', '\u0071', '\u0072', '\u0073', '\u0074', '\u0075', '\u0076', '\u0077', '\u0078', '\u0079', '\u007A'];
var upperCaseArr = ['\u0041', '\u0042', '\u0043', '\u0044', '\u0045', '\u0046', '\u0047', '\u0048', '\u0049', '\u004A', '\u004B', '\u004C', '\u004D', '\u004E', '\u004F', '\u0050', '\u0051', '\u0052', '\u0053', '\u0054', '\u0055', '\u0056', '\u0057', '\u0058', '\u0059', '\u005A'];
var numberArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];



// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  choiceArr = [];
  var passwordText = document.querySelector("#password");
  var correctPrompt = getPrompts();

  if (correctPrompt) {
    var password = generatePassword();
    passwordText.value = password;
    passwordText.setAttribute("class", "password");
  } else {
    passwordText.value = "";
    passwordText.setAttribute("class", "");
  }
}

function generatePassword() {
  var password = "";
  for (let i = 0; i < characterLength; i++) {
    var randomLetter = (Math.floor(Math.random() * choiceArr.length));
    password += choiceArr[randomLetter];
  }
  return password;
}

function getPrompts() {
  characterLength = parseInt(prompt("How many characters do you want your pass word to be? (From 8 128 characters"));
  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length has to be a number, 8 - 128 digits. Please try again.")
    return false;
  }
  if (confirm("Would you like lowercase letters in your password?")) {
    choiceArr = choiceArr.concat(lowerCaseArr);
  }
  if (confirm("Would you like upper case letters in your password?")) {
    choiceArr = choiceArr.concat(upperCaseArr);
  }
  if (confirm("Would you like numeric characters (1, 2, 3,...) in your password?")) {
    choiceArr = choiceArr.concat(numberArr);
  }
  if (confirm("Would you like special characters (!, @, #, ...) in your password?")) {
    choiceArr = choiceArr.concat(specialCharArr);
  }
  return true;
}






