const faqList = document.querySelector('.faq__list');
const answers = document.querySelectorAll('.faq__answer');
const icons = document.querySelectorAll('.faq__toggle-icon');

const iconMinusMarkup = `<path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/>`;
const iconPlusMarkup = `<path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/>`;

faqList.addEventListener('click', function (e) {
  const btn = e.target.closest('.faq__question');
  if (!btn) return;
  const answer = btn.parentElement.nextElementSibling;
  const icon = btn.nextElementSibling;

  if (answer.classList.contains('faq__answer--active')) {
    answer.classList.remove('faq__answer--active');
    icon.innerHTML = iconPlusMarkup;
  } else {
    answers.forEach(answer => answer.classList.remove('faq__answer--active'));
    icons.forEach(icon => (icon.innerHTML = iconPlusMarkup));
    answer.classList.add('faq__answer--active');
    icon.innerHTML = iconMinusMarkup;
    return;
  }
});
