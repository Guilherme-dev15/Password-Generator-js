let character = "";
const characterLow = "abcdefghijklmnopqrstuvwxyz";
const characterUpper = characterLow.toUpperCase();
const specialCharacters = "!@#$%^&*()_-+*/";
const characterNumbers = "0123456789";

const lowCheckbox = document.getElementById("chkCharacterLow");
const upperCheckbox = document.getElementById("chkCharacterUpper");
const numberCheckbox = document.getElementById("chkCharacterNumbers");
const specialCheckbox = document.getElementById("chkSpecialCharacters");
const btnGenerate = document.getElementById("btn-generate");
const btnDelete = document.getElementById("btn-delete");
const btnCopy = document.getElementById("btn-copy");

btnGenerate.addEventListener("click", generatePassword);
btnDelete.addEventListener("click", deletePassword);
btnCopy.addEventListener("click", copyText);

function generatePassword() {
  const pwdLength = document.getElementById("lengthPassword").value;
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

  let password = '';
  for (let i = 0; i < pwdLength; i++) {
    let position = Math.floor(Math.random() * character.length);
    password += character.charAt(position);
  }

  document.getElementById("password").value = password;
}

function deletePassword() {
  document.getElementById("password").value = "";
}

function copyText() {
  let textElement = document.getElementById("password");
  textElement.select();
  textElement.setSelectionRange(0, 99999);
  document.execCommand("copy");
}
