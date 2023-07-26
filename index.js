// JavaScript
let characterLow = "abcdefghijklmnopqrstuvwxyz";
let characterUpper = characterLow.toUpperCase();
let specialCharacters = "!@#$%^&*()_-+*/";
let characterNumbers = "0123456789";
let character = "";

const lowCheckbox = document.getElementById("chkCharacterLow");
const upperCheckbox = document.getElementById("chkCharacterUpper");
const numberCheckbox = document.getElementById("chkCharacterNumbers");
const specialCheckbox = document.getElementById("chkSpecialCharacters");

lowCheckbox.addEventListener("change", updateCharacter);
upperCheckbox.addEventListener("change", updateCharacter);
numberCheckbox.addEventListener("change", updateCharacter);
specialCheckbox.addEventListener("change", updateCharacter);

const btnGenerate = document.getElementById("btn-generate");
const btnDelete = document.getElementById("btn-delete");
const btnCopy = document.getElementById("btn-copy");
const passwordInput = document.getElementById("password");

btnGenerate.addEventListener("click", generatePassword);
btnDelete.addEventListener("click", deletePassword);
btnCopy.addEventListener("click", copyText);

function updateCharacter() {
  character = '';
  
  if (lowCheckbox.checked) {
    character += characterLow;
  }

  if (upperCheckbox.checked) {
    character += characterUpper;
  }

  if (numberCheckbox.checked) {
    character += characterNumbers;
  }

  if (specialCheckbox.checked) {
    character += specialCharacters;
  }
}

function generatePassword() {
  const pwdLength = document.getElementById("lengthPassword").value;
  updateCharacter(); 

  let password = "";
  for (let i = 0; i < pwdLength; i++) {
    let position = Math.floor(Math.random() * character.length);
    password += character.charAt(position);
  }

  passwordInput.value = password;
}

function deletePassword() {
  passwordInput.value = "";
}

function copyText() {
  passwordInput.select();
  passwordInput.setSelectionRange(0, 99999);
  document.execCommand("copy");
}