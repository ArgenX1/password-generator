// Assignment Code
const generateBtn = document.querySelector("#generate");
const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const numValue = ["1","2","3","4","5","6","7","8","9","0"]
const specChar = ["!","@","#","$","%","^","&","*","(",")"]

// Write password to the #password input

//prompts for password criteria//
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

  //arrays to be filled and pushed//
  var options = [];
  var password = [];
  var requiredChar = [];


  //fills arrays with desired options//
  if (isLowerCase){
    options = options.concat(lowerCase);
    requiredChar.push(getRandom(lowerCase));
  }
  if (isUpperCase){
    options = options.concat(upperCase);
    requiredChar.push(getRandom(upperCase));
  }
  if (isNum){
    options = options.concat(numValue);
    requiredChar.push(getRandom(numValue));
  }
  if (isSpec){
    options = options.concat(specChar);
    requiredChar.push(getRandom(specChar));
  }


  //fills password array with random characters from options array minus the amount of required character criteria selected//
  for (var i = 0; i < numChars - requiredChar.length; i++){
    password.push(getRandom(options));
  }

  // picks a random spot in the password array to place the required characters in //
  for (var i = 0; i < numChars; i++){
    const index = Math.floor(Math.random() * password.length);
    password.splice(index, 0, requiredChar[i]);
  }

  //turing password array into string//
  password = password.join("");

  return password;


}


//function to not write the for loop math out every time//
function getRandom(array){
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);