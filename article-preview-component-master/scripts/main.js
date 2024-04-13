const card = document.querySelector('.card__content');
const share = document.querySelector('.card__publish--active');

card.addEventListener('click', function (e) {
  const btn = e.target.closest('.card__publish-btn');
  const active = e.target.closest('.card__publish--active');

  if (active && active.classList.contains('visible')) {
    return;
  }

  if (!btn) {
    share.classList.remove('visible');
    share.classList.add('hidden');
    return;
  }

  share.classList.toggle('hidden');
  share.classList.toggle('visible');
});
