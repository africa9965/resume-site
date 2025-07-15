document.addEventListener('DOMContentLoaded', () => {
  const output = document.getElementById('password-output');
  const lengthSlider = document.getElementById('length-slider');
  const lengthVal = document.getElementById('length-val');

  lengthSlider.addEventListener('input', () => {
    lengthVal.textContent = lengthSlider.value;
  });

  generatePassword();
});

function generatePassword() {
  const length = parseInt(document.getElementById('length-slider').value);
  const includeNumbers = document.getElementById('include-numbers').checked;
  const includeSymbols = document.getElementById('include-symbols').checked;

  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+[]{}<>?/|";

  let charset = upper + lower;
  if (includeNumbers) charset += numbers;
  if (includeSymbols) charset += symbols;

  let password = "";
  for (let i = 0; i < length; i++) {
    const rand = Math.floor(Math.random() * charset.length);
    password += charset[rand];
  }

  document.getElementById('password-output').value = password;
}

function copyPassword() {
  const output = document.getElementById('password-output');
  output.select();
  output.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(output.value).then(() => {
    alert("Password copied to clipboard!");
  });
}
