const form = document.querySelector('.form');
const submitBtn = document.querySelector('.form__submit-btn');
const checkbox = document.querySelector('.form__input-checkbox');
const radioFields = document.querySelectorAll('.form__field-radio');
const radioGroup = document.querySelectorAll('.form__input-radio');

const errorMessage = {
  required: 'This field is required',
  querytype: 'Please select a query type',
  confirmation: 'To submit this form, please consent to being contacted',
  emailInvalid: 'Please enter a valid email address',
};

const validations = {
  firstname: value => !!value.trim(),
  lastname: value => !!value.trim(),
  email: value => !!value.trim(),
  emailCheck: value => value.includes('@'),
  querytype: value => !!value,
  message: value => !!value.trim(),
  confirmation: value => !!value,
};

const formIsValid = function (data, validations) {
  let isValid = true;
  Object.keys(data).forEach(key => {
    if (!dataIsValid(key, data[key], validations)) {
      isValid = false;
    }
  });
  return isValid;
};

const dataIsValid = (key, value, validations) => {
  if (!validations[key]) return true;

  if (validations[key](value)) {
    if (key === 'email' && !validations.emailCheck(value)) {
      renderError(key, errorMessage.emailInvalid);
      return false;
    }
    renderSuccess(key);
    return true;
  }
  renderError(key, errorMessage[key] || errorMessage.required);
  return false;
};

const renderError = function (inputName, message) {
  const errorEl = document.getElementById(`${inputName}-instructions`);
  const inputEl = document.getElementById(inputName);

  errorEl.textContent = message;
  errorEl.style.display = 'block';
  if (inputEl.type === 'checkbox') return;
  inputEl.style.borderColor = 'red';
};

const renderSuccess = function (inputName) {
  console.log(inputName);
  const errorEl = document.getElementById(`${inputName}-instructions`);
  const inputEl = document.getElementById(inputName);
  errorEl.textContent = '';
  errorEl.style.display = 'none';
  inputEl.style.borderColor = 'hsl(186, 15%, 59%)';
};

const getInputs = function () {
  const dataSet = [...new FormData(form)];
  const data = Object.fromEntries(dataSet);
  getRadioValue(data);
  getCheckboxValue(data);
  return data;
};

const getRadioValue = function (data) {
  radioGroup.forEach(radio => {
    if (!data[radio.name]) data[radio.name] = false;
  });
};

const getCheckboxValue = function (data) {
  !data[checkbox.name]
    ? (data[checkbox.name] = checkbox.checked)
    : (data[checkbox.name] = true);
};

const toggleRadio = function () {
  const btn = this.querySelector('.form__input-radio');
  btn.checked = true;
  btn.focus();
  renderError(btn.name);
  radioFields.forEach(radio =>
    radio.classList.remove('form__field-radio--active')
  );
  this.classList.add('form__field-radio--active');
};

document.querySelectorAll('input, textarea').forEach(el => {
  el.addEventListener('input', function () {
    renderSuccess(el.name);
  });
});

radioFields.forEach(radio => radio.addEventListener('click', toggleRadio));

submitBtn.addEventListener('click', function (event) {
  event.preventDefault();
  const data = getInputs();
  if (formIsValid(data, validations)) {
    renderMessage();
    setTimeout(() => {
      form.submit();
    }, 3000);
  }
});

const renderMessage = function () {
  const message = document.querySelector('.form__success-message');

  message.classList.add('form__success-message--active');
  message.focus();
};
