const rating = document.querySelector('.rating');
const feedback = document.querySelector('.feedback');

const form = document.querySelector('.rating__form');
const optionsContainer = document.querySelector('.rating__options');
const options = document.querySelectorAll('.rating__option-btn');

const curRate = document.querySelector('.selected-rate');
const maxRate = document.querySelector('.max-rate');

optionsContainer.addEventListener('click', function (e) {
  const btn = e.target.closest('.rating__option-btn');
  if (!btn) return;

  options.forEach(option => {
    option.classList.remove('rating__option-btn--active');
  });
  btn.classList.add('rating__option-btn--active');
});

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const rate = document.querySelector('.rating__option-btn--active');
  if (!rate) return;

  curRate.textContent = rate.dataset.rate;
  maxRate.textContent = options.length;

  rating.classList.add('hidden');
  feedback.classList.remove('hidden');
});
