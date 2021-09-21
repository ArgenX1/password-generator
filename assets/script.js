// Assignment Code
const generateBtn = document.querySelector("#generate");
const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const numValue = ["1","2","3","4","5","6","7","8","9","0"]
const specChar = ["!","@","#","$","%","^","&","*","(",")"]

// Write password to the #password input
function generatePassword(){
  const numChars = prompt("How many characters in your password?");
    if (numChars < 8 || numChars > 128){
      alert("Password must be between 8 and 128 characters.");
      return "Please try again.";
  }
  
  const isLowerCase = confirm("Do you want to use Lower Case?");
  const isUpperCase = confirm("Do you want to use Upper Case?");
  const isNum = confirm("Do you want Numbers?");
  const isSpec = confirm("Do you want Special Characters?");

  if (!isLowerCase && !isUpperCase && !isNum && !isSpec){
    alert("Please select at least one of these options.");
    return "Please try again.";
  }

  var options = [];
  var password = "";

  if (isLowerCase) options = options.concat(lowerCase);
  if (isUpperCase) options = options.concat(upperCase);
  if (isNum) options = options.concat(numValue);
  if (isSpec) options = options.concat(specChar);
  
  for (var i = 0; i < numChars; i++){
    const index = Math.floor(Math.random() * (options.length - 1));
    password = password.concat(options[index]);
  }

  return password;


}



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);