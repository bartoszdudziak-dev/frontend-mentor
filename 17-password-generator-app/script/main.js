'use strict';

const slider = document.getElementById('slider');
const sliderValue = document.querySelector('.slider__value');

const generateBtn = document.querySelector('.generate-btn');
const lowercaseInput = document.getElementById('lowercase');
const uppercaseInput = document.getElementById('uppercase');
const numbersInput = document.getElementById('numbers');
const symbolsInput = document.getElementById('symbols');
const strengthInfo = document.querySelector('.strength__info');
const strengthIndicators = document.querySelectorAll('.strength__indicator');
const passwordEl = document.querySelector('.password');

const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

const copyBtn = document.querySelector('.copy__btn');
const copyMessage = document.querySelector('.copy__message');

const getCharacterSet = function () {
  let charactersSet = '';

  if (lowercaseInput.checked) charactersSet += lowerLetters;
  if (uppercaseInput.checked) charactersSet += upperLetters;
  if (numbersInput.checked) charactersSet += numbers;
  if (symbolsInput.checked) charactersSet += symbols;

  return charactersSet.split('');
};

const renderStrength = function (quantity, className, message) {
  for (let i = 0; i < quantity; i++) {
    strengthIndicators[i].classList.add(className);
  }
  strengthInfo.textContent = message;
};

const reset = function () {
  strengthIndicators.forEach(el => {
    el.className = el.classList[0];
  });
  copyMessage.textContent = '';
};

const generatePassword = function () {
  const set = getCharacterSet();
  const length = +slider.value;

  if (set.length === 0 || !length) return;

  let password = '';
  for (let i = 0; i < length; i++) {
    password += set[Math.floor(Math.random() * set.length)];
  }
  passwordEl.textContent = password;
  passwordEl.classList.add('password--active');
  strengthInfo.style.opacity = '1';
};

const renderResults = function () {
  const passwordEl = document.querySelector('.password--active');
  if (!passwordEl) return;

  const password = document.querySelector('.password--active').textContent;
  const length = password.length;

  let isLower = false;
  let isUpper = false;
  let isDigit = false;
  let isSymbol = false;

  // Too weak password
  if (length <= 8) return renderStrength(1, 'too-weak', 'too weak');

  for (let i = 0; i < length; i++) {
    if (lowerLetters.includes(password.charAt(i))) isLower = true;
    if (upperLetters.includes(password.charAt(i))) isUpper = true;
    if (numbers.includes(password.charAt(i))) isDigit = true;
    if (symbols.includes(password.charAt(i))) isSymbol = true;
  }

  const strength = [isLower, isUpper, isDigit, isSymbol].reduce(
    (acc, curr) => acc + curr,
    0
  );

  // Strong password
  if (length >= 16 && strength === 4)
    return renderStrength(4, 'strong', 'strong');

  // Medium password
  if (length >= 12 && strength >= 2)
    return renderStrength(3, 'medium', 'medium');

  // Weak password
  return renderStrength(2, 'weak', 'weak');
};

slider.addEventListener('input', function () {
  const value = Math.floor((slider.value / slider.max) * 100);
  slider.style.background = `linear-gradient(to right, #a4ffaf ${value}%, #18171f ${value}%)`;
  sliderValue.textContent = slider.value;
});

generateBtn.addEventListener('click', function () {
  reset();
  generatePassword();
  renderResults();
});

copyBtn.addEventListener('click', async function () {
  const passwordEl = document.querySelector('.password--active');

  try {
    await navigator.clipboard.writeText(passwordEl.textContent);
    copyMessage.textContent = 'copied';
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
});
