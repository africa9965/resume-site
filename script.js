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
  const includeUpper = document.getElementById('include-uppercase').checked;
  const includeLower = document.getElementById('include-lowercase').checked;
  const includeNumbers = document.getElementById('include-numbers').checked;
  const includeSymbols = document.getElementById('include-symbols').checked;

  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+[]{}<>?/|";

  let charset = "";
  if (includeUpper) charset += upper;
  if (includeLower) charset += lower;
  if (includeNumbers) charset += numbers;
  if (includeSymbols) charset += symbols;

  if (charset.length === 0) {
    document.getElementById('password-output').value = "Please select at least one character type.";
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const rand = Math.floor(Math.random() * charset.length);
    password += charset[rand];
  }

  document.getElementById('password-output').value = password;
}

function copyPassword() {
  const output = document.getElementById('password-output');
  navigator.clipboard.writeText(output.value).then(() => {
    const original = output.value;
    output.value = "Copied to clipboard!";
    setTimeout(() => {
      output.value = original;
    }, 1000);
  });
}
