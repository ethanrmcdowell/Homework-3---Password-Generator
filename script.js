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

// CREATED VARIABLE TO CONTAIN PASSWORD ARRAY AS WELL AS VARIABLES FOR EACH CHARACTER WE COULD BE USING TO CREATE THE PASSWORD

var password = [];

var capLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ",", "-", "=", "+", "[", "]", "{", "}", ";", ":", "'", "/", "?", "<", ">", ".", "|"];
var pNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// USER PROMPTS TO DECIDE HOW LONG PASSWORD SHOULD BE AND WHAT TYPE OF CHARACTERS SHOULD BE USED, IF INCORRECT INPUT IS GIVEN WILL STOP THE PROCESS

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

  // THESE IF STATEMENTS TAKE THE USER INPUT THROUGH PROMPTS AND COMBINE THE ARRAYS CONTAINING CHARACTERS THE USER WISHES TO USE

  if (passNumber) {
    selection = pNumbers;
  } if (passSpecial) {
    selection = selection.concat(specChar);
  } if (passCapital) {
    selection = selection.concat(capLetter);
  } if (passLower) {
    selection = selection.concat(lowLetter);
  }

  // FOR LOOP WHICH WILL RANDOMLY ASSIGN A CHARACTER IN THE FINAL CHARACTER ARRAY - WILL CONTINUE TO ADD CHARACTERS AT RANDOM UNTIL IT HAS REACHED
  // THE AMOUNT OF CHARACTERS THE USER REQUESTED - WILL THEN TAKE THE NEW PASSWORD ARRAY, TURN IT INTO A STRING, AND PUSH IT TO BE USED.

  for(var i = 0; i < characterAmount; i++) {
    var j = selection[Math.floor(Math.random() * selection.length)];
    password.push(j);
  }
  password = password.join("");
  return password;
}