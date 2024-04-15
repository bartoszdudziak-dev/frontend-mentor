const newsletter = document.querySelector('.newsletter');
const form = document.querySelector('.newsletter__form');
const inputGroup = document.querySelector('.input-group');
const inputField = document.querySelector('#email');
const success = document.querySelector('.success');
const successBtn = document.querySelector('.success__btn');
const successEmail = document.querySelector('.success__email');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  inputField.blur();

  if (!isValid(inputField.value)) {
    errorMessage();
    return;
  }
  successEmail.innerHTML = inputField.value;
  succesMessage();
});

successBtn.addEventListener('click', () => {
  success.classList.add('hidden');
  newsletter.classList.remove('hidden');
  inputField.value = '';
});

form.addEventListener('focusin', () => {
  inputGroup.classList.remove('input-group--error');
});

const succesMessage = function () {
  inputGroup.classList.remove('input-group--error');
  newsletter.classList.add('hidden');
  success.classList.remove('hidden');
};

const errorMessage = function () {
  inputGroup.classList.add('input-group--error');
};

const isValid = function (email) {
  const pattern = (validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

  return email.match(pattern) ? true : false;
};
