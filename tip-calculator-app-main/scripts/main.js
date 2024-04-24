'use strict';

// prettier-ignore
const optionsContainer = document.querySelector('.tip-options').querySelector('.grid');
const tipBtns = document.querySelectorAll('.tip-option');
const tipCustom = document.querySelector('#custom');
const fields = document.querySelectorAll('input');
const resetBtn = document.querySelector('.reset');

const activeResetBtn = () => resetBtn.classList.add('reset--active');
const deactiveResetBtn = () => resetBtn.classList.remove('reset--active');

const clearTipOptions = function () {
  tipBtns.forEach(btn => btn.classList.remove('tip-option--active'));
  if (tipCustom.value === '') {
    clearInput(tipCustom);
    clearResults();
    deactiveResetBtn();
  }
};

const clearInput = function (inputEl) {
  inputEl.value = '';
  inputEl.dataset.status = 'invalid';
  inputEl.classList.remove('error');
  inputEl.classList.remove('success');
  inputEl.parentNode.querySelector('.error-message')?.classList.add('hidden');
};

const clearResults = function () {
  document
    .querySelectorAll('.tip-amount, .total-amount')
    .forEach(result => (result.innerHTML = '$0.00'));
};

const chooseTipOption = function (e) {
  const tipBtn = e.target.closest('.tip-option');
  if (!tipBtn) return;
  clearInput(tipCustom);
  clearTipOptions();
  tipBtn.classList.add('tip-option--active');
  tipCustom.dataset.status = 'valid';
  showResults();
};

const showResults = function () {
  if (Array.from(fields).every(field => field.dataset.status === 'valid')) {
    activeResetBtn();
    calculateResults();
  } else {
    deactiveResetBtn();
  }
};

const goToResults = function () {
  validation(this);
  showResults();
};

const validation = function (inputEl) {
  if (inputEl.value === '') {
    clearInput(inputEl);
    clearResults();
    return;
  }
  if (
    Number.isNaN(+inputEl.value) ||
    +inputEl.value <= 0 ||
    inputEl.value.startsWith('0')
  ) {
    inputEl.dataset.status = 'invalid';
    renderError(inputEl);
  } else {
    inputEl.dataset.status = 'valid';
    renderSuccess(inputEl);
  }
};

const calculateResults = function () {
  const bill = +document.querySelector('input#bill').value;
  const people = +document.querySelector('input#people').value;
  const tip =
    document.querySelector('.tip-option--active')?.value * bill ||
    document.querySelector('input#custom').value;

  const tipPerPerson = tip / people;
  const totalPerPerson = bill / people + tipPerPerson;
  renderResults(tipPerPerson, totalPerPerson);
};

const renderResults = function (tip, total) {
  const tipField = document.querySelector('.tip-amount');
  const totalField = document.querySelector('.total-amount');

  tipField.innerHTML = `$${tip.toFixed(2)}`;
  totalField.innerHTML = `$${total.toFixed(2)}`;
};

const renderSuccess = function (inputEl) {
  inputEl.classList.remove('error');
  inputEl.classList.add('success');
  inputEl.parentNode.querySelector('.error-message')?.classList.add('hidden');
};

const renderError = function (inputEl) {
  inputEl.classList.remove('success');
  inputEl.classList.add('error');
  inputEl.parentNode
    .querySelector('.error-message')
    ?.classList.remove('hidden');
  clearResults();
};

const reset = function (e) {
  if (!e.target.classList.contains('reset--active')) return;
  fields.forEach(field => clearInput(field));
  clearTipOptions();
  clearResults();
  deactiveResetBtn();
};

// Events
optionsContainer.addEventListener('click', chooseTipOption);
tipCustom.addEventListener('focus', clearTipOptions);
fields.forEach(field => {
  field.addEventListener('input', goToResults);
});
resetBtn.addEventListener('click', reset);
