// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  document.getElementById("password").textContent = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var characterAmount;
var passNumber;
var passSpecial;
var passCapital;
var passLower;
var selection;

var password = [];

var capLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ",", "-", "=", "+", "[", "]", "{", "}", ";", ":", "'", "/", "?", "<", ">", ".", "|"];
var pNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];


function generatePassword() {
  characterAmount = prompt("Please choose how many characters you would like your password to be, between 8 and 128.");
  if (!characterAmount) {
    alert("This input needs a value");
  } else if (characterAmount < 8 || characterAmount > 128) {
    alert("Invalid entry, please choose between 8 and 128 characters.");
  } else {
    passNumber = confirm("Would you like your password to contain numbers?");
    passSpecial = confirm("Would you like your password to contain special characters?");
    passCapital = confirm("Would you like your password to contain capital letters?");
    passLower = confirm("Would you like your password to contain lowercase letters?");
  }

  if (passNumber && passSpecial && passCapital && passLower) {
    selection = pNumbers.concat(capLetter, lowLetter, specChar);
  } else if (passNumber && passSpecial && passCapital) {
    selection = pNumbers.concat(specChar, capLetter);
  } else if (passNumber && passSpecial) {
    selection = pNumbers.concat(specChar);
  } else if (passNumber && passCapital && passLower) {
    selection = pNumbers.concat(capLetter, lowLetter);
  } else if (passNumber && passCapital) {
    selection = pNumbers.concat(capLetter);
  } else if (passNumber && passLower) {
    selection = pNumbers.concat(lowLetter);
  } else if (passNumber && passSpecial && passLower) {
    selection = pNumbers.concat(specChar, lowLetter);
  } else if (passSpecial && passCapital && passLower) {
    selection = specChar.concat(capLetter, lowLetter);
  } else if (passSpecial && passCapital) {
    selection = specChar.concat(capLetter);
  } else if (passSpecial && passLower) {
    selection = specChar.concat(lowLetter);
  } else if (passCapital && passLower) {
    selection = capLetter.concat(lowLetter);
  } else if (passNumber) {
    selection = pNumbers;
  } else if (passSpecial) {
    selection = specChar;
  } else if (passCapital) {
    selection = capLetter;
  } else if (passLower) {
    selection = lowLetter;
  }


  for(var i = 0; i < characterAmount; i++) {
    var j = selection[Math.floor(Math.random() * selection.length)];
    password.push(j);
  }
  password = password.join("");
  return password;
}